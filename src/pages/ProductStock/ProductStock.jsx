import HeroTitle from '../../components/common/HeroTitle'
import ProductDataGrid, { rows, columns } from './ProductDataGrid'
import { Helmet } from 'react-helmet-async'

function ProductStock() {
  return (
    <>
      <Helmet>
        <title>Product Stock</title>
        <meta name='Product Stock' content='Product Stock' />
      </Helmet>
      <div>
        <HeroTitle name='Product stock' />
        <ProductDataGrid rows={rows} columns={columns} />
      </div>
    </>
  )
}

export default ProductStock
