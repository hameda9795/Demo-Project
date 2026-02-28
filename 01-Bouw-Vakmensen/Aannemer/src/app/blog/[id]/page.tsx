import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import BlogPostContent from './BlogPostContent'

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

interface PageProps {
  params: { id: string }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />
}
