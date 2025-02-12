import PropTypes from 'prop-types'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Button,
} from '@mui/material'
import { CiInboxIn, CiStar, CiTrash } from 'react-icons/ci'
import { AiOutlineSend, AiOutlineFileText } from 'react-icons/ai'
import { MdDrafts } from 'react-icons/md'

function Sidebar({ itemCount }) {
  return (
    <Box
      sx={{
        width: 280,
        height: 650,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 2,
        p: 2,
      }}
    >
      <Typography variant='h6'>My Email</Typography>

      <List>
        {[
          { text: 'Inbox', icon: <CiInboxIn size={25} />, badge: 235 },
          { text: 'Starred', icon: <CiStar size={25} />, badge: 522 },
          { text: 'Sent', icon: <AiOutlineSend size={25} />, badge: 21 },
          { text: 'Draft', icon: <AiOutlineFileText size={25} />, badge: 2 },
          { text: 'Spam', icon: <MdDrafts size={25} />, badge: 45 },
          { text: 'Bin', icon: <CiTrash size={25} />, badge: 57 },
        ].map((item, index) => (
          <ListItem
            key={index}
            button
            sx={{
              bgcolor: 'transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#e6eeff',
              },
              borderRadius: 3,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {item.icon}
                <span
                  style={{
                    marginLeft: '10px',
                    fontSize: '18px',
                    color: '#000000',
                    fontWeight: '500',
                    transition: 'font-weight 0.3s ease',
                  }}
                  className='hover-text'
                >
                  {item.text}
                </span>
              </div>
              <Avatar
                sx={{
                  bgcolor: 'white',
                  width: 30,
                  height: 30,
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                {item.badge}
              </Avatar>
            </div>
          </ListItem>
        ))}
      </List>

      <Typography variant='h6'>Label</Typography>

      <List>
        {[
          { text: 'Primary' },
          { text: 'Social' },
          { text: 'Work' },
          { text: 'Friends' },
        ].map((item, index) => (
          <ListItem
            key={index}
            button
            sx={{
              bgcolor: 'transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#e6eeff',
              },
              borderRadius: 3,
            }}
          >
            <input
              type='checkbox'
              name={item.text}
              id={item.text}
              style={{
                width: 18,
                height: 18,
                borderRadius: '15px',
                cursor: 'pointer',
                color: 'black',
              }}
            />
            <ListItemText
              primary={item.text}
              sx={{ ml: '8px', fontWeight: 'bold' }}
            />
          </ListItem>
        ))}
      </List>

      <Button sx={{ mt: 1, color: 'primary' }}>+ Create New Label</Button>

      <Typography
        variant='body2'
        align='center'
        sx={{ mt: 'auto', fontWeight: 'bold' }}
      ></Typography>
    </Box>
  )
}

Sidebar.propTypes = {
  itemCount: PropTypes.number,
}

Sidebar.defaultProps = {
  itemCount: 10,
}

export default Sidebar
