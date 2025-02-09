import { CiShare1 } from 'react-icons/ci'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import PropTypes from 'prop-types'

export default function UserProfile({ user }) {
  return (
    <div className='user-photo-container relative flex flex-col items-center justify-center gap-y-3 rounded-2xl bg-white py-8'>
      <img
        src={user.avatar}
        alt='user-img'
        className='h-32 w-32 rounded-full'
      />
      <p className='text-2xl font-semibold'>{user.fullName}</p>
      <span className='rounded-3xl border border-gray-300 px-4 py-2 text-sm'>
        {user.rule}
      </span>
      <div className='absolute top-4 right-5'>
        <RiVerifiedBadgeFill className='text-primary-light border-primary-light h-10 w-10 rounded-full border bg-white p-2 shadow-lg' />
      </div>
      <CiShare1 className='absolute top-4 left-5 h-10 w-10 rounded-full border border-gray-300 p-2 text-gray-400' />
    </div>
  )
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rule: PropTypes.string.isRequired,
  }).isRequired,
}
