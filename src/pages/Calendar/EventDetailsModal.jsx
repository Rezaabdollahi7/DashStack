import PropTypes from 'prop-types'
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material'
import { Chip } from '@mui/material'
import { LuAlarmClockCheck } from 'react-icons/lu'

const EventDetailsModal = ({ open, onClose, event, onEdit }) => {
  if (!event) {
    return null
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <div className='flex flex-col gap-y-6'>
          <div className='event-top flex items-center justify-between'>
            <p className='text-light-black text-2xl font-medium'>
              {event.title}
            </p>
          </div>
          <div className='event-main flex items-start gap-4 gap-y-4 border-b border-b-gray-200 pb-8'>
            <img
              src={event.img}
              alt={`${event.title} - img`}
              className='h-12 w-12'
            />
            <div className='event-desc flex flex-col items-start justify-start'>
              <p className='text-gray-400'>
                {event.start.getDay()}/{event.start.getMonth()}/
                {event.start.getFullYear()}
              </p>
              <p>{event.description}</p>
            </div>
          </div>
          <div>
            <div className='cat-wrapper flex gap-3'>
              <Chip
                color='primary'
                label={event.category}
                sx={{ fontSize: '18px', padding: '15px ' }}
              />
              <div className='flex items-center gap-1 rounded-3xl border border-gray-400 px-4'>
                <LuAlarmClockCheck className='h-4 w-4' />
                <span className='pt-1'>
                  {event.start.getHours()} to {event.end.getHours()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='secondary' variant='outlined'>
          Close
        </Button>
        <Button onClick={onEdit} color='success' variant='contained'>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

EventDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.oneOf(['meeting', 'sport', 'personal', 'work'])
      .isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    img: PropTypes.string,
    description: PropTypes.string,
  }),
  onEdit: PropTypes.func.isRequired,
}

export default EventDetailsModal
