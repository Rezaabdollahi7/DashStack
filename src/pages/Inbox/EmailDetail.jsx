import { useParams, useNavigate } from 'react-router-dom'
import { IconButton, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import DeleteIcon from '@mui/icons-material/Delete'
import MicIcon from '@mui/icons-material/Mic'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageIcon from '@mui/icons-material/Image'
import SendIcon from '@mui/icons-material/Send'
import { useStarred } from './ContextApiInbox'
import { initialEmails } from '../../constants/ItemInbox'
import { useState } from 'react'
import { fakeEmails } from '../../components/charts/fakeEmails'

function EmailDetail() {
  const { emailName } = useParams()
  const navigate = useNavigate()
  const { starredEmails, toggleStars } = useStarred()

  const email = initialEmails.find((e) => e.name === emailName)

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState(fakeEmails)
  if (!email) {
    return <div className='p-4 text-red-500'> Email not found!</div>
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const sendMessage = () => {
    if (newMessage.trim() === '') return

    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isSender: true,
    }

    setMessages([...messages, newMsg])
    setNewMessage('')
  }

  return (
    <div className='flex h-160 flex-col justify-between pb-[70px]'>
      <div className='flex w-full items-center justify-between border-b-2 border-gray-300 p-2'>
        <div className='flex text-start'>
          <IconButton onClick={handleGoBack} className='mr-4'>
            <ArrowBackIcon fontSize='large' />
          </IconButton>
          <h1 className='text-3xl font-semibold'>{email.name}</h1>
        </div>
        <div className='flex items-center justify-center gap-2 rounded-2xl bg-stone-200 p-1'>
          <IconButton onClick={() => toggleStars(email)}>
            {starredEmails.includes(email) ? (
              <StarIcon fontSize='md' className='text-yellow-500' />
            ) : (
              <StarBorderIcon fontSize='md' />
            )}
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize='md' />
          </IconButton>
        </div>
      </div>

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

      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage()
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
    </div>
  )
}

export default EmailDetail
