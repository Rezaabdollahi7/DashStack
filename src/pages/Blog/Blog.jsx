import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { BLOG_POSTS } from '../../constants/blogPosts'
import BlogPostCard from './BlogPostCard'
export default function Blog() {
  const [posts, setPosts] = useState(BLOG_POSTS)

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name='Blog' content='Blog ' />
      </Helmet>
      <div className='posts-container mx-auto mt-32 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2'>
        {posts.map((post) => (
          <div key={post.id} className='col-span-1'>
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
    </>
  )
}
