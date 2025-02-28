import { Box, List, ListItem, Typography, Avatar } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { items } from '../../constants/ItemsSidebarInbox'
import CreateLable from './CreateLable'
import { initialEmails } from '../../constants/ItemInbox'

function Sidebar() {
  const location = useLocation()

  const getBadgeCount = (category) => {
    return initialEmails.filter((email) => email.category === category).length
  }

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
        {items.map((item, index) => {
          const isActive = location.pathname === item.link
          const badgeCount = getBadgeCount(item.text)

          return (
            <ListItem
              key={index}
              button
              sx={{
                bgcolor: isActive ? '#e6eeff' : 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: isActive ? '#c1d7f7' : '#e6eeff',
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
                    {badgeCount}
                  </Avatar>
                </div>
              </Link>
            </ListItem>
          )
        })}
      </List>
      <CreateLable />
    </Box>
  )
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      badge: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Sidebar
