import fs from 'fs'
import matter from 'gray-matter'
import { ArrowRight } from 'lucide-react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import path from 'path'
import Layout from '~/components/layout/Layout'
import { postFilePaths, POSTS_PATH } from '~/lib/mdx-utils'
import { NextPageWithLayout } from '~/lib/types'

type PostsPageProps = {
  posts: any[]
}

const PostsPage: NextPageWithLayout<PostsPageProps> = ({
  posts,
}: PostsPageProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="m-4 text-3xl font-bold">Posts</h1>

      <hr />

      <ul className="flex flex-col divide-y">
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              href={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              className="flex items-center gap-3 px-4 py-4"
            >
              <h2 className="flex-1 text-lg font-medium">{post.data.title}</h2>

              <ArrowRight className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

PostsPage.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)

      return {
        data,
        filePath,
      }
    })
    .sort((a, b) =>
      new Date(a.data.datetime) < new Date(b.data.datetime) ? 1 : -1
    )

  return { props: { posts } }
}

export default PostsPage
