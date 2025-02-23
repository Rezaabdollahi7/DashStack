import { RiBarChartGroupedFill } from 'react-icons/ri'
import { RiArrowUpDoubleFill } from 'react-icons/ri'
import PropTypes from 'prop-types'

export default function StatsCard({ title, value, percentage, period }) {
  return (
    <div className='flex w-full flex-col justify-between space-y-2 rounded-2xl bg-white p-4'>
      <h6>{title}</h6>
      <div className='flex items-center justify-between'>
        <span className='text-2xl font-bold'>{value}</span>
        <RiBarChartGroupedFill className='text-primary-light text-3xl' />
      </div>
      <div className='flex items-center justify-start gap-1 text-sm text-gray-500'>
        <RiArrowUpDoubleFill className='text-main-green text-xl' />
        <span className='text-light-black font-semibold'>{percentage}</span>
        {period}
      </div>
    </div>
  )
}

StatsCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  percentage: PropTypes.string,
  period: PropTypes.string,
}
