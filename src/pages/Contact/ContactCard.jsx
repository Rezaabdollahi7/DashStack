import { BiMessageDetail } from 'react-icons/bi'
import PropTypes from 'prop-types'

export default function ContactCard({ contact }) {
  return (
    <div className='flex flex-col items-center gap-5 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition hover:shadow-lg'>
      <img
        src={contact.img}
        alt={`${contact.fullName} image`}
        className='h-68 w-full object-cover lg:h-80'
      />
      <div className='flex flex-col items-center gap-2 pb-5 text-center'>
        <p className='text-lg font-bold text-gray-800'>{contact.fullName}</p>
        <span className='text-sm text-gray-500'>{contact.email}</span>
        <button className='mt-2 flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100'>
          <BiMessageDetail className='text-lg' />
          <span>Message</span>
        </button>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    img: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
}
