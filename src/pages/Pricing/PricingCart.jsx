import PropTypes from 'prop-types'

export default function PricingCart({ plan }) {
  return (
    <div
      className='plan text-light-black flex flex-col items-center gap-y-3 rounded-3xl border border-gray-200 bg-white bg-[image:var(--pattern-img)] px-6 py-8 shadow-md'
      key={plan.id}
    >
      <h6 className='text-2xl font-bold'>{plan.planName}</h6>
      <p className='text-lg text-gray-400'>{plan.planCharge}</p>
      <p className='text-primary-light text-4xl font-extrabold'>
        ${plan.planPrice}
      </p>

      <ul className='my-4 w-full space-y-4 border-y border-y-gray-200 py-6 text-center'>
        {plan.activeFacilities.map((activeLink) => (
          <li className='font-base' key={plan.id}>
            {activeLink}
          </li>
        ))}

        {plan.deActiveFacilities.map((activeLink) => (
          <li className='font-base text-gray-400' key={plan.id}>
            {activeLink}
          </li>
        ))}
      </ul>
      <button className='border-primary-light text-primary-light hover:bg-primary-light rounded-3xl border-2 px-10 py-3 font-semibold transition delay-150 duration-150 ease-in-out hover:scale-110 hover:text-white'>
        Get Started
      </button>
      <span className='underline'>Start Your 30 Day Free Trial</span>
    </div>
  )
}
PricingCart.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    planName: PropTypes.string.isRequired,
    planCharge: PropTypes.string.isRequired,
    planPrice: PropTypes.number.isRequired,
    activeFacilities: PropTypes.array.isRequired,
    deActiveFacilities: PropTypes.array.isRequired,
  }),
}
