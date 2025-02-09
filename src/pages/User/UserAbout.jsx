import PropTypes from 'prop-types'
export default function UserAbout({ user }) {
  return (
    <div className='user-about flex flex-col gap-y-4 rounded-2xl bg-white px-6 py-8'>
      <div className='about-title flex items-center justify-between'>
        <h6 className='text-xl font-semibold'>About</h6>
        <p className='text-gray-600'>
          <span className='text-lg font-semibold text-gray-950'>100</span>/120
          Words
        </p>
      </div>
      <textarea
        name='about'
        id='about'
        readOnly
        value={user.about}
        className='h-40 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3'
      ></textarea>
    </div>
  )
}

UserAbout.propTypes = {
  user: PropTypes.shape({
    about: PropTypes.string.isRequired,
  }).isRequired,
}
