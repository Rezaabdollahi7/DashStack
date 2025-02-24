import RadialBar from '../../components/charts/RadialBar'
import HeroTitle from '../../components/common/HeroTitle'
import Booked from './Booked'
import CurrentBalanceCart from './CurrentBalanceCart'
import { productsStatsData } from '../../constants/ProductsStatsData'
import StatsCard from './StatsCard'
import LastProducts from './LastProducts'
import ProductsTable from './ProductsTable'

export default function ProductsLayout() {
  return (
    <div className='main-wrapper'>
      <HeroTitle name='Products' />
      <section className='products grid gap-3 lg:grid-cols-12'>
        <div className='col-span-9 grid grid-cols-10 grid-rows-3 gap-4'>
          <div className='col-span-4 row-span-3 rounded-lg bg-white p-5'>
            <h6>Sale By Gender</h6>
            <RadialBar
              series={[30, 50, 20]}
              labels={['Mens', 'Womens', 'Children']}
              colors={['#00a76f', '#ffab00', '#ff5630']}
            />
          </div>
          <div className='current-balance col-span-3 row-span-2 rounded-lg bg-white p-5'>
            <CurrentBalanceCart />
          </div>

          <div className='col-span-3 row-span-2 rounded-lg bg-white p-5'>
            <Booked />
          </div>

          <div className='col-span-6 row-span-1 flex justify-between gap-4 rounded-lg'>
            {productsStatsData.map((stat) => (
              <StatsCard key={stat.id} {...stat} />
            ))}
          </div>
        </div>
        <div className='col-span-3 rounded-lg bg-white p-5'>
          <LastProducts />
        </div>
      </section>
      <ProductsTable />
    </div>
  )
}
