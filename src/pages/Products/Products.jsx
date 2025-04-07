import RadialBar from '../../components/charts/RadialBar'
import HeroTitle from '../../components/common/HeroTitle'
import Booked from './Booked'
import CurrentBalanceCart from './CurrentBalanceCart'
import { productsStatsData } from '../../constants/ProductsStatsData'
import StatsCard from './StatsCard'
import LastProducts from './LastProducts'
import ProductsTable from './ProductsTable'
import { Helmet } from 'react-helmet-async'

export default function ProductsLayout() {
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name='Products' content='Products' />
      </Helmet>

      <div className='main-wrapper'>
        <HeroTitle name='Products' />
        <section className='products grid grid-cols-1 gap-3 lg:grid-cols-12'>
          <div className='col-span-1 grid gap-4 lg:col-span-9 lg:grid-cols-10 lg:grid-rows-3'>
            <div className='rounded-lg bg-white p-5 md:col-span-2 lg:col-span-4 lg:row-span-3'>
              <h6>Sale By Gender</h6>
              <RadialBar
                series={[30, 50, 20]}
                labels={['Mens', 'Womens', 'Children']}
                colors={['#00a76f', '#ffab00', '#ff5630']}
              />
            </div>
            <div className='current-balance rounded-lg bg-white p-5 md:col-span-1 lg:col-span-3 lg:row-span-2'>
              <CurrentBalanceCart />
            </div>

            <div className='rounded-lg bg-white p-5 md:col-span-1 lg:col-span-3 lg:row-span-2'>
              <Booked />
            </div>

            <div className='flex flex-col justify-between gap-4 rounded-lg md:col-span-2 md:flex-row lg:col-span-6 lg:row-span-1'>
              {productsStatsData.map((stat) => (
                <StatsCard key={stat.id} {...stat} />
              ))}
            </div>
          </div>
          <div className='col-span-1 rounded-lg bg-white p-5 lg:col-span-3'>
            <LastProducts />
          </div>
        </section>
        <ProductsTable />
      </div>
    </>
  )
}
