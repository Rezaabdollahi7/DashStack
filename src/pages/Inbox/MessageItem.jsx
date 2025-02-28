import PropTypes from 'prop-types'

const MessageItem = ({ message }) => {
  return (
    <div
      className={`flex items-center ${message.isSender ? 'justify-end' : 'justify-start'}`}
    >
      {!message.isSender && (
        <div className='h-8 w-8 rounded-full bg-gray-300'></div>
      )}
      <div
        className={`max-w-md rounded-lg p-3 shadow-md ${message.isSender ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
      >
        <p>{message.message}</p>
        <span className='text-xs text-gray-500'>{message.time}</span>
      </div>
    </div>
  )
}

MessageItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isSender: PropTypes.bool.isRequired,
  }).isRequired,
}

export default MessageItem
