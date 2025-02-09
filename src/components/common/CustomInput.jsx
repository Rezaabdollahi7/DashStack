import PropTypes from 'prop-types'
export default function CustomInput({
  labelName,
  inputId,
  inputName,
  inputValue,
  hasIcon,
  children,
}) {
  return (
    <div className='relative flex flex-col'>
      <label htmlFor='fullName'>{labelName}</label>
      <input
        type='text'
        id={inputId}
        name={inputName}
        disabled
        className='mt-1 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-600'
        value={inputValue}
      />
      {hasIcon && children}
    </div>
  )
}

CustomInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  hasIcon: PropTypes.object,
  children: PropTypes.object,
}
