import PropTypes from 'prop-types'
export default function HeroTitle({ name }) {
  return <h5 className='text-light-black my-4 text-3xl font-bold'>{name}</h5>
}
HeroTitle.propTypes = {
  name: PropTypes.string.isRequired,
}
