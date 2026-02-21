import { Rating } from '@mui/material'
import { useState } from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { SlLike } from 'react-icons/sl'
import { SlDislike } from 'react-icons/sl'
import PropTypes from 'prop-types'
import { FaStar, FaRegStar } from 'react-icons/fa6'

export default function ProductCommentCard({
  icon,
  name,
  date,
  star,
  isVerify,
  commentText,
  commentImages,
  like,
  disLike,
}) {
  const [likeCount, setLikeCount] = useState(like)
  const [disLikeCount, setdisLikeCount] = useState(disLike)
  return (
    <div className='comment flex flex-col items-center gap-5 md:flex-row'>
      {/* comment author */}
      <div className='flex w-full items-center justify-start gap-2 md:w-fit md:min-w-1/5 md:flex-col md:justify-center md:px-12'>
        <img
          src={icon}
          alt={`${name}-avatar-icon`}
          className='size-12 rounded-full md:size-16'
        />
        <div className='author-info md:text-center'>
          <p className='text-sm font-semibold text-gray-950'>{name}</p>
          <span className='text-[11px] text-gray-400'>{date}</span>
        </div>
      </div>
      {/* comment contemt */}
      <div className='flex flex-col gap-2'>
        <Rating
          name='half-rating-read'
          defaultValue={star}
          precision={0.5}
          readOnly
          icon={<FaStar className='size-4 md:size-5' />}
          emptyIcon={<FaRegStar className='size-4 md:size-5' />}
        />
        {isVerify && (
          <p className='text-main-green flex items-center gap-1 text-xs font-semibold'>
            <RiVerifiedBadgeFill className='size-4' /> Verified Purchase
          </p>
        )}
        <p className='text-sm text-gray-600 md:text-base'>{commentText}</p>
        {commentImages.length > 0 && (
          <div className='img-container flex gap-2'>
            {commentImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt='product-img'
                className='size-10 rounded-lg'
              />
            ))}
          </div>
        )}
        <div className='likes-section-wrapper flex gap-5'>
          <span
            className='flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 hover:bg-gray-950 hover:text-gray-300'
            onClick={() => setLikeCount((prev) => prev + 1)}
          >
            <SlLike className='size-4' /> {likeCount}
          </span>
          <span
            className='flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 hover:bg-gray-950 hover:text-gray-300'
            onClick={() => setdisLikeCount((prev) => prev + 1)}
          >
            <SlDislike className='size-4' />
            {disLikeCount}
          </span>
        </div>
      </div>
    </div>
  )
}

ProductCommentCard.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  commentText: PropTypes.string,
  star: PropTypes.number,
  isVerify: PropTypes.bool,
  commentImages: PropTypes.array,
  like: PropTypes.number,
  disLike: PropTypes.number,
}
