import { Universal } from '@scrapeless-ai/sdk'

const universal = new Universal({
  apiKey: process.env.SCRAPELESS_API_KEY,
  timeout: 60000,
})

export async function scrapeUrl(url: string, waitForTag?: string) {
  const markdown: string = await universal.jsRender({
    actor: 'unlocker.webunlocker',
    input: {
      url: url,
      jsRender: {
        enabled: true,
        headless: false,
        instructions: waitForTag
          ? [{ waitFor: [waitForTag, 10000] }]
          : undefined,
        block: {
          resources: ['Image', 'Font', 'Stylesheet', 'Script'],
        },
        response: {
          type: 'markdown',
        },
      },
    },
    proxy: {
      country: 'AU',
    },
  })

  if (!markdown) {
    throw new Error('Failed to scrape URL: No markdown returned')
  }

  if (markdown.length > 50000) {
    throw new Error('Failed to scrape URL: Page is too long')
  }

  let errorJson: any = undefined
  try {
    errorJson = JSON.parse(markdown)
  } catch {
    // Markdown was actually markdown, not JSON
  }
  if (errorJson?.statusCode === 500) {
    throw new Error('Failed to scrape URL: ' + errorJson.message)
  }

  // Remove all links from the markdown
  return markdown.replace(/\[([^\]]*)\]\([^\)]+\)/g, '$1')
}
