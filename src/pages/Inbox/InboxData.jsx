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
import { Search, Delete, Settings } from '@mui/icons-material'

function InboxData() {
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
          placeholder='Search mail'
          variant='outlined'
          size='small'
          sx={{ maxWidth: 400 }}
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
        {[
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
            subject:
              'Enhance Your Brand Potential With Giant Advertising Blimps',
            time: '4:13 PM',
            color: '#5A8CFF',
          },
          {
            name: 'Cecilia Webster',
            category: 'Friends',
            subject: 'Always Look On The Bright Side Of Life',
            time: '3:52 PM',
            color: '#D456FD',
          },
          {
            name: 'Harvey Manning',
            category: 'Lifestyle',
            subject:
              'Curling Irons Are As Individual As The Women Who Use Them',
            time: '2:30 PM',
            color: '#00B69B',
          },
          {
            name: 'Willie Blake',
            category: 'Privacy',
            subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            time: '8:38 AM',
            color: '#FD9A56',
          },
          {
            name: 'Fanny Weaver',
            category: 'Free Classifieds',
            subject: 'Using Them To Promote Your Stuff Online',
            time: '7:52 PM',
            color: '#FD9A56',
          },
          {
            name: 'Olga Hogan',
            category: 'Social',
            subject:
              'Enhance Your Brand Potential With Giant Advertising Blimps',
            time: '4:13 PM',
            color: '#D456FD',
          },
          {
            name: 'Lora Houston',
            category: 'Friends',
            subject: 'Vacation Home Rental Success',
            time: '7:52 PM',
            color: '#00B69B',
          },
        ].map((email, index) => (
          <TableRow key={index}>
            <TableCell padding='checkbox'>
              <input type='checkbox' />
            </TableCell>
            <TableCell>
              <Typography fontWeight='bold' fontSize={14}>
                {email.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Chip
                label={email.category}
                color={email.color ? 'default' : 'primary'}
                size='small'
                sx={{
                  background: email.color
                    ? `rgba(${parseInt(email.color.slice(1, 3), 16)}, ${parseInt(
                        email.color.slice(3, 5),
                        16,
                      )}, ${parseInt(email.color.slice(5, 7), 16)}, 0.2)`
                    : 'transparent',
                  color: email.color,
                  borderRadius: '10px',
                  padding: '5px 10px',
                  boxShadow: `0 2px 5px rgba(0, 0, 0, 0.1)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1.2)',
                    boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
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
  ).isRequired,
}

export default InboxData
