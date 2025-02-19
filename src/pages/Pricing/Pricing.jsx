import { pricingPlans } from '../../constants/Pricing'
import HeroTitle from '../../components/common/HeroTitle'
import PricingCart from './PricingCart'
export default function Pricing() {
  return (
    <>
      <HeroTitle name='pricing' />
      <section className='my-6 grid grid-cols-1 gap-12 lg:grid-cols-3'>
        {pricingPlans.map((plan) => PricingCart({ plan }))}
      </section>
    </>
  )
}
