import PropTypes from 'prop-types'
export const DotButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button type='button' {...restProps}>
      {children}
    </button>
  )
}

DotButton.propTypes = {
  children: PropTypes.element,
}
