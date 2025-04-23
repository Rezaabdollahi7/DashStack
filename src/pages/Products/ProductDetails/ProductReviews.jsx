import PropTypes from 'prop-types'
import { FaPen } from 'react-icons/fa'
import { FaStar, FaRegStar } from 'react-icons/fa6'
import { Rating } from '@mui/material'
import { ratingData } from '../../../constants/productConstants'

const ProductReviews = ({ onOpenModal }) => {
  return (
    <div className='main-container flex flex-col'>
      <div className='rating-section col-span-1 mb-8 grid gap-8 border-dashed border-b-gray-200 md:border-b lg:grid-cols-4 lg:gap-0 lg:py-5 xl:grid-cols-3'>
        {/* average rating */}
        <div className='col-span-1 flex flex-col items-center justify-center gap-4 border-b border-dashed border-gray-300 pb-5 lg:border-r lg:border-b-0'>
          <h6>Average rating</h6>
          <strong className='text-4xl font-extrabold'>
            {ratingData.average}/5
          </strong>
          <Rating
            name='half-rating-read'
            defaultValue={ratingData.average}
            precision={0.1}
            readOnly
            icon={<FaStar className='size-4 md:size-5' />}
            emptyIcon={<FaRegStar className='size-4 md:size-5' />}
          />
          <span className='text-xs text-gray-400'>
            ({ratingData.totalReviews} reviews)
          </span>
        </div>

        {/* stars counter */}
        <div className='col-span-1 flex flex-col items-center justify-center gap-2 border-b border-dashed border-gray-300 pb-5 text-sm lg:col-span-2 lg:border-r lg:border-b-0 xl:col-span-1 xl:text-base'>
          {ratingData.stars.map((star) => (
            <div
              key={star.value}
              className='star-number-wraper flex items-center gap-2'
            >
              <span className='font-medium'>{star.value} Star</span>
              <div className='progress flex h-1 w-32'>
                <span
                  className={`h-full w-${star.width} rounded-lg bg-gray-950`}
                ></span>
                <span
                  className='h-full rounded-lg bg-gray-200'
                  style={{ width: `calc(100% - ${star.width})` }}
                ></span>
              </div>
              <span className='font-light text-gray-400'>{star.count}</span>
            </div>
          ))}
        </div>

        {/* write review */}
        <div className='col-span-1 flex items-center justify-center'>
          <button
            className='flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-100 px-6 py-3 text-xs font-semibold text-gray-950'
            onClick={onOpenModal}
          >
            <FaPen className='size-4' />
            <span>Write Your Review</span>
          </button>
        </div>
      </div>
    </div>
  )
}

ProductReviews.propTypes = {
  comments: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

export default ProductReviews
