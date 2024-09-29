import fs from 'fs'
import matter from 'gray-matter'
import { InfoIcon } from 'lucide-react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import path from 'path'
import Layout from '~/components/layout/Layout'
import { postFilePaths, POSTS_PATH } from '~/lib/mdx-utils'
import { NextPageWithLayout } from '~/lib/types'

export const components = {}

const BlogPostPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ source, frontMatter }) => {
  // This is needed because of getInitialProps in _app.tsx
  if (!frontMatter) return null

  return (
    <>
      <NextSeo title={frontMatter.title} />
      <div className="flex flex-col">
        <h1 className="m-4 text-3xl font-bold">{frontMatter.title}</h1>

        <hr />

        <main className="m-4 prose">
          <MDXRemote {...source} components={components} />
        </main>

        {frontMatter.sponsored && (
          <>
            <hr />

            <div className="m-4 flex items-center gap-1 text-gray-500">
              <InfoIcon size={12} />
              <p className="text-xs">
                This post contains sponsored content. Contact us for more
                information.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

BlogPostPage.getLayout = (page) => <Layout>{page}</Layout>

export default BlogPostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    })

    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    }
  } catch (error) {
    // captureException(error)

    return {
      notFound: true,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
