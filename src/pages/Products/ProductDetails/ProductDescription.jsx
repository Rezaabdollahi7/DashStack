import {
  productSpecs,
  productDetails,
  productBenefits,
  deliveryInfo,
} from '../../../constants/productConstants'

const ProductDescription = () => {
  return (
    <div className='space-y-6 text-gray-800'>
      <div>
        <h2 className='mb-4 text-xl font-bold'>Specifications</h2>
        <table className='w-full border-collapse text-sm'>
          <tbody>
            {productSpecs.map((spec, index) => (
              <tr key={index} className='border-b border-gray-200'>
                <td className='py-3 font-medium text-gray-600'>{spec.label}</td>
                <td className='py-3 text-gray-800'>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className='mb-4 text-xl font-bold'>Product details</h2>
        <ul className='list-disc space-y-2 pl-5 text-sm font-normal'>
          {productDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className='mb-4 text-xl font-bold'>Benefits</h2>
        <ul className='list-disc space-y-2 pl-5 text-sm font-normal'>
          {productBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className='mb-4 text-xl font-bold'>Delivery and returns</h2>
        <p className='mb-4 text-sm font-normal'>{deliveryInfo.description}</p>
        <ul className='list-disc space-y-2 pl-5 text-sm font-normal'>
          {deliveryInfo.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className='mt-4 text-sm text-gray-500'>{deliveryInfo.note}</p>
      </div>
    </div>
  )
}

export default ProductDescription
