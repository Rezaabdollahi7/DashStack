import PropTypes from 'prop-types'
import { IconButton, Button } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageIcon from '@mui/icons-material/Image'
import SendIcon from '@mui/icons-material/Send'

const MessageInput = ({ newMessage, setNewMessage, sendMessage }) => {
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return

    const newMsg = {
      id: Date.now(),
      sender: 'You',
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isSender: true,
    }

    sendMessage(newMsg)
    setNewMessage('')
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSendMessage()
      }}
      className='flex w-full items-center gap-2 border-t border-gray-300 bg-white p-2'
    >
      <IconButton>
        <MicIcon fontSize='large' className='text-gray-500' />
      </IconButton>
      <input
        type='text'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder='Write message...'
        className='flex-1 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
      <div className='flex items-center gap-2'>
        <IconButton>
          <AttachFileIcon fontSize='large' className='text-gray-500' />
        </IconButton>
        <IconButton>
          <ImageIcon fontSize='large' className='text-gray-500' />
        </IconButton>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='flex items-center gap-1'
        >
          Send <SendIcon fontSize='small' />
        </Button>
      </div>
    </form>
  )
}

MessageInput.propTypes = {
  newMessage: PropTypes.string.isRequired,
  setNewMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
}

export default MessageInput
