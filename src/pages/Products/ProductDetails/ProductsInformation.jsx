import { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import { FaStar, FaRegStar, FaOpencart, FaPlus } from 'react-icons/fa6'
import { TiHeartFullOutline } from 'react-icons/ti'
import { IoShareSocialSharp } from 'react-icons/io5'

export default function ProductsInformation({ selectedProductsDetails }) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () =>
    setQuantity((prev) => Math.min(prev + 1, selectedProductsDetails.available))
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1))

  return (
    <div className='product-info space-y-6'>
      <span className='inline-block rounded-lg bg-cyan-200/60 px-2 py-1 text-xs font-semibold text-cyan-800'>
        NEW
      </span>
      <h5 className='text-xl font-semibold text-gray-900'>
        {selectedProductsDetails.name}
      </h5>

      <div className='flex items-end gap-2'>
        <Rating
          name='product-rating'
          value={3.5}
          precision={1}
          readOnly
          icon={<FaStar />}
          emptyIcon={<FaRegStar />}
        />
        <span className='text-sm text-gray-400'>(1.95k reviews)</span>
      </div>

      <div className='flex items-start gap-2 text-xl'>
        <span className='font-semibold text-gray-400 line-through'>
          $110.50
        </span>
        <span className='text-2xl font-semibold text-gray-900'>
          ${selectedProductsDetails.price}
        </span>
      </div>

      <p className='text-sm text-gray-400'>{selectedProductsDetails.desc}</p>
      <hr className='border-gray-200' />

      <div className='flex justify-between'>
        <span className='text-gray-900'>Color</span>
        <div className='flex gap-2'>
          {selectedProductsDetails.colors.map((color, index) => (
            <span
              key={index}
              className='h-6 w-6 cursor-pointer rounded-full border border-gray-300'
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-between'>
        <span>Size</span>
        <select className='rounded-lg border border-gray-200 bg-white px-2 py-1'>
          {[6, 7, 8, 9, 10].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-1'>
          <span>Quantity</span>
          <span className='text-xs text-gray-400'>
            Available: {selectedProductsDetails.available}
          </span>
        </div>
        <div className='flex h-8 w-24 items-center justify-between rounded-lg border border-gray-300 bg-gray-100'>
          <button
            className='h-full cursor-pointer rounded-l-lg bg-white px-2 text-xl text-black/70'
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className='h-full cursor-pointer rounded-r-lg bg-white px-2 text-xl text-black/70'
            onClick={handleIncrement}
            disabled={quantity >= selectedProductsDetails.available}
          >
            +
          </button>
        </div>
      </div>

      <hr className='border-gray-200' />

      <div className='grid gap-3 md:grid-cols-2'>
        <button className='flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:opacity-80'>
          <FaOpencart /> Add To Cart
        </button>
        <button className='cursor-pointer rounded-lg bg-black px-6 py-3 font-semibold text-white hover:opacity-80'>
          Buy Now
        </button>
      </div>

      <div className='flex justify-center gap-4 text-sm text-gray-500'>
        {[
          { Icon: FaPlus, text: 'Compare' },
          { Icon: TiHeartFullOutline, text: 'Favorite' },
          { Icon: IoShareSocialSharp, text: 'Share' },
        ].map(({ Icon, text }) => (
          <div
            key={text}
            className='flex cursor-pointer items-center gap-1 hover:text-gray-600'
          >
            <Icon className='size-4' />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

ProductsInformation.propTypes = {
  selectedProductsDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    available: PropTypes.number.isRequired,
  }).isRequired,
}
