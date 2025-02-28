import { useParams, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { IconButton } from '@mui/material'

function EmailDetail() {
  const { emailName } = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex flex-col'>
      <div className='flex text-start'>
        <IconButton onClick={handleGoBack} className='mr-4'>
          <IoArrowBack size={24} />
        </IconButton>
        <div className='flex'>
          <h1 className='text-3xl font-semibold'>{`${emailName}`}</h1>
        </div>
      </div>
      <div className='mt-2 w-full border-b-2 border-gray-300'></div>{' '}
    </div>
  )
}

export default EmailDetail
