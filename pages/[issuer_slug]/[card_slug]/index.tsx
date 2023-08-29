import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '~/components/layout/Layout'
import supabaseAdmin from '~/lib/supabase-admin'
import { NextPageWithLayout } from '~/lib/types'

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabaseAdmin
    .from('cards')
    .select('slug,issuer:issuers(slug)')
  if (error) throw error

  return {
    paths: data.map(({ slug, issuer }) => ({
      params: {
        card_slug: slug,
        issuer_slug: issuer?.slug,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: issuerData } = await supabaseAdmin
    .from('issuers')
    .select('id')
    .eq('slug', params?.issuer_slug)
    .maybeSingle()
  if (!issuerData) return { notFound: true }

  const { data } = await supabaseAdmin
    .from('cards')
    .select('*,bonus_points(*)')
    .match({
      slug: params?.card_slug,
      issuer_id: issuerData.id,
    })
    .maybeSingle()
  if (!data) return { notFound: true }

  return {
    props: { card: data },
  }
}

interface CardPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const CardPage: NextPageWithLayout<CardPageProps> = ({ card }) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(card, null, 2)}</code>
      </pre>
    </div>
  )
}

CardPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardPage
