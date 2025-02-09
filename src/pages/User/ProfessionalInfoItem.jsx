import PropTypes from 'prop-types'

const ProfessionalInfoItem = ({
  icon: Icon,
  bgColor,
  iconColor,
  label,
  value,
}) => (
  <div className='col-span-1 flex items-center gap-2'>
    <div className='icon-wrapper'>
      <Icon className={`${bgColor} ${iconColor} h-10 w-10 rounded-full p-2`} />
    </div>
    <div className='item-wrapper flex flex-col justify-start'>
      <h6 className='text-sm font-light text-gray-600'>{label}</h6>
      <p className='font-semibold'>{value}</p>
    </div>
  </div>
)

ProfessionalInfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  bgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default ProfessionalInfoItem
