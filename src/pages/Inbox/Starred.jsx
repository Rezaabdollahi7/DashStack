import { useStarred } from './ContextApiInbox'
import {
  IconButton,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Typography,
} from '@mui/material'
import { Star } from '@mui/icons-material'

function Starred() {
  const { starredEmails, toggleStars } = useStarred()

  return (
    <TableBody>
      {starredEmails.length === 0 ? (
        <Typography>No starred emails yet.</Typography>
      ) : (
        starredEmails.map((email, index) => (
          <TableRow key={index} sx={{ width: '400px' }}>
            <TableCell padding='checkbox'>
              <IconButton onClick={() => toggleStars(email)}>
                <Star color='warning' />
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

            <TableCell
              sx={{
                width: '540px',
              }}
            >
              <Typography fontSize={14}>{email.subject}</Typography>
            </TableCell>

            <TableCell>
              <Typography fontSize={12} color='text.secondary'>
                {email.time}
              </Typography>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  )
}

export default Starred
