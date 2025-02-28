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

function EmailDetail() {
  const { emailName } = useParams()
  const navigate = useNavigate()
  const { starredEmails, toggleStars } = useStarred()

  const email = initialEmails.find((e) => e.name === emailName)

  if (!email) {
    return <div className='p-4 text-red-500'>ایمیل یافت نشد!</div>
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex flex-col justify-between pb-[70px]'>
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
              <StarIcon fontSize='large' className='text-yellow-500' />
            ) : (
              <StarBorderIcon fontSize='large' />
            )}
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize='large' />
          </IconButton>
        </div>
      </div>

      <form className='flex w-full items-center justify-between gap-2 border-t-0 border-gray-300 p-2'>
        <IconButton>
          <MicIcon fontSize='large' className='text-gray-500' />
        </IconButton>
        <input
          type='text'
          placeholder='Write message'
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
