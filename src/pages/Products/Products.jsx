import HeroTitle from '../../components/common/HeroTitle'
import CurrentBalanceCart from './CurrentBalanceCart'

export default function ProductsLayout() {
  return (
    <div className='main-wrapper'>
      <HeroTitle name='Products' />
      <section className='products grid gap-3 lg:grid-cols-12'>
        <div className='col-span-9 grid grid-cols-10 grid-rows-3 gap-4 bg-blue-100'>
          <div className='col-span-4 row-span-3 bg-blue-200'>1</div>
          <div className='current-balance col-span-3 row-span-2 rounded-lg bg-white p-5'>
            <CurrentBalanceCart />
          </div>

          <div className='col-span-2 row-span-1 bg-blue-200'>4</div>
        </div>
        <div className='col-span-3 bg-red-100'>5</div>
      </section>
    </div>
  )
}
