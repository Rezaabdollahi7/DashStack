import { pricingPlans } from '../../constants/Pricing'
import HeroTitle from '../../components/common/HeroTitle'
import PricingCart from './PricingCart'
import { Helmet } from 'react-helmet-async'

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
        <meta name='Pricing' content='Pricing' />
      </Helmet>
      <HeroTitle name='Pricing' />
      <section className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-24'>
        {pricingPlans.map((plan) => PricingCart({ plan }))}
      </section>
    </>
  )
}
