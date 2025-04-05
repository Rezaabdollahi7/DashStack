import { useState } from 'react'

import { products_data } from '../../constants/Products'
import { useParams } from 'react-router-dom'
import ProductSlider from './ProductDetails/ProductSlider'

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
    <section className='grid grid-cols-12 gap-4 py-7'>
      {/* left section */}
      <div className='left-section col-span-12 flex flex-col gap-4 lg:col-span-7'>
        <ProductSlider
          imgNumber={imgNumber}
          productImagesCount={productImagesCount}
          productImages={productImages}
          setImgNumber={setImgNumber}
        />
      </div>
      {/* Right section */}
      <div className='col-span-12 bg-black text-white lg:col-span-5'>
        ProductDetails {selectedProductsDetails.name}
      </div>
    </section>
  )
}
