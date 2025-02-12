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
import { Link } from 'react-router-dom'

function Sidebar() {
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
          {
            text: 'Inbox',
            icon: <CiInboxIn size={25} />,
            badge: 235,
            link: '/inbox',
          },
          {
            text: 'Starred',
            icon: <CiStar size={25} />,
            badge: 522,
            link: '/inbox/starred',
          },
          {
            text: 'Sent',
            icon: <AiOutlineSend size={25} />,
            badge: 21,
            link: '/inbox/sent',
          },
          {
            text: 'Draft',
            icon: <AiOutlineFileText size={25} />,
            badge: 2,
            link: '/inbox/draft',
          },
          {
            text: 'Spam',
            icon: <MdDrafts size={25} />,
            badge: 45,
            link: '/inbox/spam',
          },
          {
            text: 'Bin',
            icon: <CiTrash size={25} />,
            badge: 57,
            link: '/inbox/bin',
          },
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
            <Link
              to={item.link}
              style={{ display: 'flex', alignItems: 'center', width: '100%' }}
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
            </Link>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      badge: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,

  labels: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Sidebar
