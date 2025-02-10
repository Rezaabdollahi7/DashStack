import HeroTitle from '../../components/common/HeroTitle'
import ProductDataGrid, { rows, columns } from './ProductDataGrid'
function ProductStock() {
  return (
    <div>
      <HeroTitle name='Product stock' />
      <ProductDataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default ProductStock
