import PropTypes from 'prop-types'

const MessageList = ({ messages }) => {
  return (
    <div className='flex min-h-0 flex-col gap-2 overflow-y-auto'>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex items-center ${msg.isSender ? 'justify-end' : 'justify-start'}`}
        >
          {!msg.isSender && (
            <div className='h-8 w-8 rounded-full bg-gray-300'></div>
          )}
          <div
            className={`max-w-md rounded-lg p-3 shadow-md ${msg.isSender ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            <p>{msg.message}</p>
            <span className='text-xs text-gray-500'>{msg.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      isSender: PropTypes.bool.isRequired,
    }),
  ).isRequired,
}

export default MessageList
