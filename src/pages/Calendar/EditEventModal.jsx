import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from '@mui/material'

const EditEventModal = ({ open, onClose, event, onSave }) => {
  const [title, setTitle] = useState(event ? event.title : '')
  const [category, setCategory] = useState(event ? event.category : '')

  const handleSave = () => {
    if (event) {
      onSave({ ...event, title, category })
    }
    onClose()
  }

  if (!event) {
    return null
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Event</DialogTitle>
      <DialogContent>
        <TextField
          label='Title'
          placeholder={event.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          select
          label='Category'
          placeholder={event.category}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          margin='normal'
        >
          <MenuItem value='meeting'>Meeting</MenuItem>
          <MenuItem value='sport'>Sport</MenuItem>
          <MenuItem value='personal'>Personal</MenuItem>
          <MenuItem value='work'>Work</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: '#f93c65',
            color: 'white',
            padding: '10px 25px',
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color='primary'
          sx={{
            backgroundColor: '#4880ff',
            color: 'white',
            padding: '10px 25px',
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

EditEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.oneOf(['meeting', 'sport', 'personal', 'work'])
      .isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
  }),
  onSave: PropTypes.func.isRequired,
}

EditEventModal.defaultProps = {
  event: null,
}

export default EditEventModal
