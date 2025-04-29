import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { BLOG_POSTS } from '../../constants/blogPosts'
import BlogPostCard from './BlogPostCard'

export default function Blog() {
  const [posts] = useState(BLOG_POSTS)
  const [filter, setFilter] = useState('')

  // Filter posts based on title or excerpt
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase()),
  )

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name='Blog' content='Blog ' />
      </Helmet>

      <div className='blog-header-section flex flex-col mx-auto px-2 py-7 sm:px-6 md:px-0 lg:gap-8 lg:px-12 xl:max-w-6xl xl:gap-12'>
        <input
          type='text'
          onChange={handleFilterChange}
          value={filter}
          className='rounded-lg border border-gray-200 px-4 py-3'
          placeholder='Search posts...'
        />

        <div className='posts-container mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
          {filteredPosts.map((post) => (
            <div key={post.id} className='col-span-1'>
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
