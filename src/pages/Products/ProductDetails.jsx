import { rows } from '../../constants/ProductsListTable'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const [products] = useState(rows)
  let selectedProduct = useParams()

  const selectedProductsDetails = products.filter(
    (product) => product.id == selectedProduct.productID,
  )[0]

  return <div>ProductDetails {selectedProductsDetails.id} </div>
}
