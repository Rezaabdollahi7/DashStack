import PropTypes from 'prop-types'
const ProgressBar = ({ title, value, width, gradientFrom, gradientTo }) => {
  return (
    <div className='flex flex-col'>
      <div className='progress-title flex justify-between'>
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <div className='h-2 w-full rounded-lg bg-gray-200'>
        <div
          className={`h-2 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}
ProgressBar.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  gradientFrom: PropTypes.string,
  gradientTo: PropTypes.string,
  width: PropTypes.number,
}
export default ProgressBar
