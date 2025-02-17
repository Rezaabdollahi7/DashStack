import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  TextField,
  IconButton,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Typography,
} from '@mui/material'
import { Search, Delete, Settings, StarBorder, Star } from '@mui/icons-material'
import { useStarred } from './ContextApiInbox'

const initialEmails = [
  {
    name: 'Juliu Jalal',
    category: 'Privacy',
    subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
    time: '8:38 AM',
    color: '#00B69B',
  },
  {
    name: 'Minerva Barnett',
    category: 'Work',
    subject: 'Get Best Advertiser In Your Side Pocket',
    time: '8:13 AM',
    color: '#D456FD',
  },
  {
    name: 'Juliu Jalal',
    category: 'Privacy',
    subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
    time: '8:38 AM',
    color: '#00B69B',
  },
  {
    name: 'Minerva Barnett',
    category: 'Work',
    subject: 'Get Best Advertiser In Your Side Pocket',
    time: '8:13 AM',
    color: '#D456FD',
  },
  {
    name: 'Juliu Jalal',
    category: 'Privacy',
    subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
    time: '8:38 AM',
    color: '#00B69B',
  },
  {
    name: 'Minerva Barnett',
    category: 'Work',
    subject: 'Get Best Advertiser In Your Side Pocket',
    time: '8:13 AM',
    color: '#D456FD',
  },
  {
    name: 'Anthony Briggs',
    category: 'Free Classifieds',
    subject: 'Using Them To Promote Your Stuff Online',
    time: '7:52 PM',
    color: '#00B69B',
  },
  {
    name: 'Clifford Morgan',
    category: 'Social',
    subject: 'Enhance Your Brand Potential With Giant Advertising Blimps',
    time: '4:13 PM',
    color: '#5A8CFF',
  },
]

function InboxData() {
  const [emails, setEmails] = useState(initialEmails)
  const [starred, setStarred] = useState(
    new Array(initialEmails.length).fill(false),
  )
  const [selected, setSelected] = useState(
    new Array(initialEmails.length).fill(false),
  )
  const [searchTerm, setSearchTerm] = useState('')
  const { starredEmails, toggleStars } = useStarred()
  const toggleStar = (index) => {
    const newStars = [...starred]
    newStars[index] = !newStars[index]
    setStarred(newStars)
  }

  const handleDelete = (index) => {
    setEmails((prevEmails) => {
      const newEmails = [...prevEmails]
      newEmails.splice(index, 1)
      return newEmails
    })
  }

  const toggleSelect = (index) => {
    const newSelected = [...selected]
    newSelected[index] = !newSelected[index]
    setSelected(newSelected)
  }

  const filteredEmails = emails.filter((email) =>
    email.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Box
      sx={{
        width: 980,
        height: 660,
        p: 3,
        ml: 'auto',
        boxShadow: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Box display='flex' alignItems='center' mb={2}>
        <TextField
          fullWidth
          placeholder='Search mail by name'
          variant='outlined'
          size='small'
          sx={{ maxWidth: 400 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Box display='flex' ml='auto'>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      <TableBody>
        {filteredEmails.map((email, index) => (
          <TableRow key={index}>
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

            <TableCell>
              <Typography fontWeight='bold' fontSize={14}>
                {email.name}
              </Typography>
            </TableCell>

            <TableCell>
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

            <TableCell>
              <Typography fontSize={14}>{email.subject}</Typography>
            </TableCell>

            <TableCell>
              <Typography fontSize={12} color='text.secondary'>
                {email.time}
              </Typography>
            </TableCell>

            <TableCell padding='checkbox'>
              <IconButton
                sx={{ color: 'gray' }}
                onClick={() => handleDelete(index)}
              >
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Box>
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
