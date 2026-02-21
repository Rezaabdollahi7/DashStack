import PropTypes from 'prop-types'

export default function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
}) {
  return (
    <div className='relative w-full'>
      <label
        htmlFor={name}
        className='absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600'
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className='w-full rounded-lg border border-gray-400 px-4 py-3 hover:border-gray-800'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon}
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
}
