import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import DeleteIcon from '@mui/icons-material/Delete'

const Header = ({ email, starredEmails, toggleStars, handleGoBack }) => {
  return (
    <div className='flex w-full items-center justify-between border-b-2 border-gray-300 p-2'>
      <div className='flex text-start'>
        <IconButton onClick={handleGoBack} className='mr-4'>
          <ArrowBackIcon fontSize='large' />
        </IconButton>
        <h1 className='text-3xl font-semibold'>{email.name}</h1>
      </div>
      <div className='flex items-center justify-center gap-2 rounded-2xl bg-stone-200 p-1'>
        <IconButton onClick={() => toggleStars(email)}>
          {starredEmails.some((e) => e.name === email.name) ? (
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
  )
}

Header.propTypes = {
  email: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  starredEmails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  toggleStars: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired,
}

export default Header
