import { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, TableCell, Chip, Typography } from '@mui/material'
import { Delete, StarBorder, Star } from '@mui/icons-material'
import { useStarred } from './ContextApiInbox'
import { initialEmails } from '../../constants/ItemInbox'
import { useOutletContext, Link } from 'react-router-dom'

function InboxData() {
  const { searchTerm } = useOutletContext()
  const [emails, setEmails] = useState(initialEmails)
  const [selected, setSelected] = useState(
    new Array(initialEmails.length).fill(false),
  )
  const { starredEmails, toggleStars, deleteStarredEmail } = useStarred()
  const handleDelete = (index) => {
    const emailToDelete = emails[index]
    setEmails((prevEmails) => {
      const newEmails = [...prevEmails]
      newEmails.splice(index, 1)
      return newEmails
    })
    deleteStarredEmail(emailToDelete)
  }
  const toggleSelect = (index) => {
    const newSelected = [...selected]
    newSelected[index] = !newSelected[index]
    setSelected(newSelected)
  }
  const filteredEmails = emails.filter((email) =>
    email.name.toLowerCase().includes(searchTerm),
  )

  return (
    <div className='w-full'>
      {filteredEmails.map((email, index) => (
        <div key={index} className='w-300'>
          <TableCell padding='checkbox'>
            <input
              type='checkbox'
              checked={selected[index]}
              onChange={() => toggleSelect(index)}
            />
          </TableCell>
          <TableCell padding='checkbox'>
            <IconButton onClick={() => toggleStars(email)}>
              {starredEmails.includes(email) ? (
                <Star color='warning' />
              ) : (
                <StarBorder />
              )}
            </IconButton>
          </TableCell>
          <TableCell style={{ width: '150px' }}>
            <Link to={`/inbox/inboxs/${email.name}`}>
              <Typography fontWeight='bold' fontSize={14}>
                {email.name}
              </Typography>
            </Link>
          </TableCell>
          <TableCell style={{ width: '150px' }}>
            <Chip
              label={email.category || 'General'}
              size='small'
              sx={{
                background: email.color
                  ? `rgba(${parseInt(email.color.slice(1, 3), 16)}, ${parseInt(email.color.slice(3, 5), 16)}, ${parseInt(email.color.slice(5, 7), 16)}, 0.2)`
                  : 'transparent',
                color: email.color || '#5A8CFF',
                borderRadius: '10px',
                padding: '5px 10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'brightness(1.2)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            />
          </TableCell>
          <TableCell style={{ width: '400px' }}>
            <Typography fontSize={14}>{email.subject}</Typography>
          </TableCell>
          <TableCell sx={{ width: '60px' }}>
            <Typography fontSize={12} color='text.secondary'>
              {email.time}
            </Typography>
          </TableCell>
          <TableCell padding='checkbox' style={{ width: '60px' }}>
            <IconButton
              sx={{ color: 'gray' }}
              onClick={() => handleDelete(index)}
            >
              <Delete />
            </IconButton>
          </TableCell>
        </div>
      ))}
    </div>
  )
}

InboxData.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      color: PropTypes.string,
    }),
  ),
}

export default InboxData
