import { useState } from 'react'
import { products_data } from '../../constants/Products'
import { useParams } from 'react-router-dom'
import ProductSlider from './ProductDetails/ProductSlider'
import ProductsInformation from './ProductDetails/ProductsInformation'
export default function ProductDetails() {
  const [products] = useState(products_data)
  let selectedProduct = useParams()

  const selectedProductsDetails = products.filter(
    (product) => product.id == selectedProduct.productID,
  )[0]

  const productImages = selectedProductsDetails.images
  const productImagesCount = selectedProductsDetails.images.length
  const [imgNumber, setImgNumber] = useState(1)

  return (
    <section className='grid grid-cols-12 py-7 lg:px-16'>
      {/* left section */}
      <div className='left-section col-span-12 flex flex-col gap-4 lg:col-span-6'>
        <ProductSlider
          imgNumber={imgNumber}
          productImagesCount={productImagesCount}
          productImages={productImages}
          setImgNumber={setImgNumber}
        />
      </div>
      {/* Right section */}
      <div className='right-section col-span-12 mt-12 flex max-w-lg flex-col items-start gap-8 md:mt-0 md:gap-5 lg:col-span-6'>
        <ProductsInformation
          selectedProductsDetails={selectedProductsDetails}
        />
      </div>
    </section>
  )
}
