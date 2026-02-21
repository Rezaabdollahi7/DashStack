import PropTypes from 'prop-types'
import { IoEye } from 'react-icons/io5'
import { FaCommentDots } from 'react-icons/fa6'
import { AiFillLike } from 'react-icons/ai'

const BlogPostCard = ({ post }) => {
  // Format numbers with K suffix if over 1000
  const formatNumber = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(2) + 'k' : num
  }

  return (
    <div className='flex flex-col-reverse items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 px-4 py-4 shadow-sm sm:flex-row'>
      <div className='flex-1'>
        <div className='mb-2 flex items-center'>
          <span
            className={`rounded-lg px-3 py-1 text-xs font-semibold ${
              post.status === 'published'
                ? 'bg-cyan-100 text-cyan-800'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {post.status === 'published' ? 'Published' : 'Draft'}
          </span>
          <span className='ml-auto text-xs text-gray-500'>{post.date}</span>
        </div>

        <h2 className='mb-2 font-semibold xl:line-clamp-3'>{post.title}</h2>
        <p className='mb-4 line-clamp-2 text-xs font-normal text-gray-400'>
          {post.excerpt}
        </p>

        <div className='mt-6 flex items-center'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center justify-center gap-1 text-gray-500'>
              <IoEye className='h-4 w-4 text-xs' />
              <span className='mt-[2px] text-xs text-gray-500'>
                {formatNumber(post.stats.views)}
              </span>
            </div>

            <div className='flex items-center justify-center gap-1 text-gray-500'>
              <FaCommentDots className='size-4 text-xs' />
              <span className='mt-[2px] text-xs text-gray-500'>
                <span>{formatNumber(post.stats.comments)}</span>
              </span>
            </div>

            <div className='flex items-center justify-center gap-1 text-gray-500'>
              <AiFillLike className='size-4 text-xs' />
              <span className='mt-[2px] text-xs text-gray-500'>
                <span>{formatNumber(post.stats.likes)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='relative sm:w-[16rem] lg:w-60'>
        <img
          src={post.image}
          alt={post.title}
          className='h-full w-full rounded-2xl object-cover'
        />
        <div className='absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm'>
          <img
            src={post.avatarIcon}
            alt='Profile'
            className='size-7 rounded-full'
          />
        </div>
      </div>
    </div>
  )
}

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    status: PropTypes.oneOf(['published', 'draft']).isRequired,
    date: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
    avatarIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
  }).isRequired,
}

export default BlogPostCard
