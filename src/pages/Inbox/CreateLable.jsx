import { Box } from '@mui/material'
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material'
import { useState } from 'react'
import { useStarred } from './ContextApiInbox'

function CreateLable() {
  const { changeCategory } = useStarred()
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleClick = (label) => {
    setSelectedCategory(label)
    changeCategory(label)
  }

  return (
    <Box>
      <Typography variant='h6'>Label</Typography>

      <List>
        {[
          { text: 'all' },
          { text: 'Primary' },
          { text: 'Social' },
          { text: 'Work' },
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
            onClick={() => handleClick(item.text)}
          >
            <input
              type='checkbox'
              name={item.text}
              id={item.text}
              checked={selectedCategory === item.text}
              style={{
                width: 18,
                height: 18,
                borderRadius: '15px',
                cursor: 'pointer',
                color: 'black',
              }}
              readOnly
            />
            <ListItemText
              primary={item.text}
              sx={{ ml: '8px', fontWeight: 'bold' }}
            />
          </ListItem>
        ))}
      </List>

      <Button sx={{ mt: 1, color: 'primary' }}>+ Create New Label</Button>
    </Box>
  )
}

export default CreateLable
