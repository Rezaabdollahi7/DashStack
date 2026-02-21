import { useState } from 'react'
import { products_data } from '../../constants/Products'
import { useParams } from 'react-router-dom'
import ProductSlider from './ProductDetails/ProductSlider'
import ProductsInformation from './ProductDetails/ProductsInformation'
import ProductFeatures from './ProductDetails/ProductFeatures'
import ProductTabs from './ProductDetails/ProductTabs'
import { Helmet } from 'react-helmet-async'
import { IoChevronBack } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

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
    <>
      <Helmet>
        <title>Product Details</title>
        <meta
          name='description'
          content='Product Details , name , price , images , buy '
        />
      </Helmet>
      <section className='mx-auto grid grid-cols-12 px-2 py-7 sm:px-6 md:px-0 lg:gap-8 lg:px-12 xl:max-w-6xl xl:gap-12'>
        {/* buttons section */}
        <div className='col-span-12 flex items-center justify-between text-xs md:text-sm'>
          <Link
            to={'/products'}
            className='flex items-center justify-center gap-2 rounded-lg bg-white px-2 py-2 font-semibold shadow-2xl'
          >
            <IoChevronBack className='size-4' />
            <span>Back</span>
          </Link>

          <Link
            to={`/product/${selectedProductsDetails.id}/edit`}
            state={{ product: selectedProductsDetails }}
            className='flex cursor-pointer items-start justify-center gap-2 rounded-lg bg-gray-950 px-4 py-2 font-semibold text-gray-200'
          >
            <span>Edit</span>
            <MdEdit className='size-4' />
          </Link>
        </div>
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
        <div className='right-section col-span-12 mt-12 flex flex-col items-start gap-8 md:mt-0 md:gap-5 lg:col-span-6'>
          <ProductsInformation
            selectedProductsDetails={selectedProductsDetails}
          />
        </div>
        {/* features */}
        <ProductFeatures />
        {/* Tabs */}
        <ProductTabs />
      </section>
    </>
  )
}
