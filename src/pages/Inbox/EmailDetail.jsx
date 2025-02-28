import { useParams, useNavigate } from 'react-router-dom'
import { useStarred } from './ContextApiInbox'
import { initialEmails } from '../../constants/ItemInbox'
import { useState } from 'react'
import Header from './Header'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import { fakeEmails } from '../../components/charts/fakeEmails'

function EmailDetail() {
  const { emailName } = useParams()
  const navigate = useNavigate()
  const { starredEmails, toggleStars } = useStarred()

  const email = initialEmails.find((e) => e.name === emailName)
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState(fakeEmails)

  if (!email) {
    return <div className='p-4 text-red-500'>Email not found!</div>
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const sendMessage = (message) => {
    setMessages([...messages, message])
  }

  return (
    <div className='flex h-160 flex-col justify-between pb-[70px]'>
      <Header
        email={email}
        starredEmails={starredEmails}
        toggleStars={toggleStars}
        handleGoBack={handleGoBack}
      />
      <MessageList messages={messages} />
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={sendMessage}
      />
    </div>
  )
}

export default EmailDetail
