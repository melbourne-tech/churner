import { sql } from '~/lib/db'

export async function getIssuerSlugs() {
  return sql<{ slug: string }[]>`
    SELECT slug FROM issuers
  `
}

export async function getIssuerBySlug(slug: string) {
  const rows = await sql<{ id: string; name: string }[]>`
    SELECT id, name
    FROM issuers
    WHERE slug = ${slug}
    LIMIT 1
  `
  return rows[0] ?? null
}
