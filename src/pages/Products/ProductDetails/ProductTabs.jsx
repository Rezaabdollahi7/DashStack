import { useState } from 'react'
import { Rating } from '@mui/material'
import { FaPen } from 'react-icons/fa'
import ProductCommentCard from './ProductCommentCard'
import { ProductComments } from '../../../constants/ProductComments'
import { FaStar, FaRegStar } from 'react-icons/fa6'

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      label: 'Description',
      content: (
        <div className='space-y-6 text-gray-800'>
          <div>
            <h2 className='mb-4 text-xl font-bold'>Specifications</h2>
            <table className='w-full border-collapse text-sm'>
              <tbody>
                <tr className='border-b border-gray-200'>
                  <td className='py-3 font-medium text-gray-600'>Category</td>
                  <td className='py-3 text-gray-800'>Mobile</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td className='py-3 font-medium text-gray-600'>
                    Manufacturer
                  </td>
                  <td className='py-3 text-gray-800'>Apple</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td className='py-3 font-medium text-gray-600'>Warranty</td>
                  <td className='py-3 text-gray-800'>12 Months</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td className='py-3 font-medium text-gray-600'>
                    Serial number
                  </td>
                  <td className='py-3 text-gray-800'>358607726380</td>
                </tr>
                <tr>
                  <td className='py-3 font-medium text-gray-600'>Ships from</td>
                  <td className='py-3 text-gray-800'>United States</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='mb-4 text-xl font-bold'>Product details</h2>
            <ul className='list-disc space-y-2 pl-5 text-sm font-normal'>
              <li>The foam sockliner feels soft and comfortable</li>
              <li>Pull tab</li>
              <li>Not intended for use as Personal Protective Equipment</li>
              <li>Colour Shown: White/Black/Oxygen Purple/Action Grape</li>
              <li>Style: 921826-109</li>
              <li>Country/Region of Origin: China</li>
            </ul>
          </div>

          <div>
            <h2 className='mb-4 text-xl font-bold'>Benefits</h2>
            <ul className='list-disc space-y-2 pl-5 text-sm font-normal'>
              <li>
                Mesh and synthetic materials on the upper keep the fluid look of
                the OG while adding comfort and durability.
              </li>
              <li>
                Originally designed for performance running, the full-length Max
                Air unit adds soft, comfortable cushioning underfoot.
              </li>
              <li>The foam midsole feels springy and soft.</li>
              <li>The rubber outsole adds traction and durability.</li>
            </ul>
          </div>

          <div>
            <h2 className='mb-4 text-xl font-bold'>Delivery and returns</h2>
            <p className='mb-4 text-sm font-normal'>
              Your order of $200 or more gets free standard delivery.
            </p>
            <ul className='list-disc space-y-2 pl-5 text-sm font-normal'>
              <li>Standard delivered 4-5 Business Days</li>
              <li>Express delivered 2-4 Business Days</li>
            </ul>
            <p className='mt-4 text-sm text-gray-500'>
              Orders are processed and delivered Monday-Friday (excluding public
              holidays)
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      label: 'Reviews(13)',
      content: (
        <div className='main-container flex flex-col'>
          <div className='rating-section col-span-1 mb-8 grid gap-8 border-dashed border-b-gray-200 md:border-b lg:grid-cols-4 lg:gap-0 lg:py-5 xl:grid-cols-3'>
            {/* average rating */}
            <div className='col-span-1 flex flex-col items-center justify-center gap-4 border-b border-dashed border-gray-300 pb-5 lg:border-r lg:border-b-0'>
              <h6>Average rating</h6>
              <strong className='text-4xl font-extrabold'>4.2/5</strong>
              <Rating
                name='half-rating-read'
                defaultValue={4}
                precision={1}
                readOnly
                icon={<FaStar className='size-4 md:size-5' />}
                emptyIcon={<FaRegStar className='size-4 md:size-5' />}
              />
              <span className='text-xs text-gray-400'>(9.12k reviews)</span>
            </div>
            {/* stars counter */}
            <div className='col-span-1 flex flex-col items-center justify-center gap-2 border-b border-dashed border-gray-300 pb-5 text-sm lg:col-span-2 lg:border-r lg:border-b-0 xl:col-span-1 xl:text-base'>
              <div className='star-number-wraper flex items-center gap-2'>
                <span className='font-medium'>5 Star</span>
                <div className='progress flex h-1 w-32'>
                  <span className='h-full w-1/4 rounded-lg bg-gray-950'></span>
                  <span className='h-full w-3/4 rounded-lg bg-gray-200'></span>
                </div>
                <span className='font-light text-gray-400'>2.03k</span>
              </div>

              <div className='star-number-wraper flex items-center gap-2'>
                <span className='font-medium'>4 Star</span>
                <div className='progress flex h-1 w-32'>
                  <span className='h-full w-2/4 rounded-lg bg-gray-950'></span>
                  <span className='h-full w-2/4 rounded-lg bg-gray-200'></span>
                </div>
                <span className='font-light text-gray-400'>8.49k</span>
              </div>

              <div className='star-number-wraper flex items-center gap-2'>
                <span className='font-medium'>3 Star</span>
                <div className='progress flex h-1 w-32'>
                  <span className='h-full w-2/5 rounded-lg bg-gray-950'></span>
                  <span className='h-full w-3/5 rounded-lg bg-gray-200'></span>
                </div>
                <span className='font-light text-gray-400'>6.98k</span>
              </div>
              <div className='star-number-wraper flex items-center gap-2'>
                <span className='font-medium'>2 Star</span>
                <div className='progress flex h-1 w-32'>
                  <span className='h-full w-1/4 rounded-lg bg-gray-950'></span>
                  <span className='h-full w-3/4 rounded-lg bg-gray-200'></span>
                </div>
                <span className='font-light text-gray-400'>9.12k</span>
              </div>
              <div className='star-number-wraper flex items-center gap-2'>
                <span className='font-medium'>1 Star</span>
                <div className='progress flex h-1 w-32'>
                  <span className='h-full w-1/10 rounded-lg bg-gray-950'></span>
                  <span className='h-full w-9/10 rounded-lg bg-gray-200'></span>
                </div>
                <span className='font-light text-gray-400'>1.95k</span>
              </div>
            </div>
            {/* write review */}
            <div className='col-span-1 flex items-center justify-center'>
              <button className='flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-6 py-3 text-xs font-semibold text-gray-950'>
                <FaPen className='size-4' />
                <span>Write Your Review</span>
              </button>
            </div>
          </div>
          <div className='comments-wrapper flex flex-col gap-12'>
            {ProductComments.map((comment) => (
              <ProductCommentCard key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className='col-span-12 mx-auto mt-8 w-full rounded-2xl bg-white'>
      {/* تب‌ها */}
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`cursor-pointer px-6 py-3 text-sm font-medium transition-colors focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-gray-600 text-gray-800'
                : 'text-gray-500 hover:border-gray-200 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای تب‌ها */}
      <div className='rounded-b-lg bg-white p-6 shadow-sm'>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
