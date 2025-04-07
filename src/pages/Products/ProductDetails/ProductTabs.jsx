import { useState } from 'react'

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
      content: 'review Section',
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
