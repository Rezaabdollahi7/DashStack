import { FaLocationDot } from 'react-icons/fa6'
import { IoMdLocate } from 'react-icons/io'
import PropTypes from 'prop-types'
export default function UserLocation({ user }) {
  return (
    <div className='user-location flex flex-col gap-y-3 rounded-2xl bg-white px-6 py-8'>
      <div className='location-title flex items-center justify-between'>
        <h6 className='text-xl font-semibold'>Location</h6>
        <FaLocationDot className='text-primary-light h-10 w-10 rounded-full border border-gray-300 bg-gray-100 p-2' />
      </div>
      <div className='relative container'>
        <input
          type='text'
          disabled
          className='mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-600'
          value={user.location}
        />
        <IoMdLocate className='absolute top-[30%] right-2 h-6 w-6 rounded-full bg-white p-1' />
      </div>
    </div>
  )
}

UserLocation.propTypes = {
  user: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
}
