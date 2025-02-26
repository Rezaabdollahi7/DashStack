import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { initialEvents } from '../../constants/Events'
import EditEventModal from './EditEventModal'
import EventDetailsModal from './EventDetailsModal'

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

const MainCalendar = () => {
  const [events, setEvents] = useState(initialEvents)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleEditClick = () => {
    setDetailsModalOpen(false)
    setEditModalOpen(true)
  }

  const handleEventEdit = (event) => {
    setSelectedEvent(event)
    setEditModalOpen(true)
  }

  const handleSaveEvent = (updatedEvent) => {
    setEvents(events.map((e) => (e === selectedEvent ? updatedEvent : e)))
    setEditModalOpen(false)
  }

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:')
    const category = window.prompt(
      'Enter category (e.g., meeting, sport, personal):',
    )
    if (title && category) {
      setEvents([...events, { start, end, title, category }])
    }
  }

  const handleEventDrop = ({ event, start, end }) => {
    setEvents(events.map((e) => (e === event ? { ...e, start, end } : e)))
  }

  const eventStyleGetter = (event) => {
    const backColors = {
      meeting: '#e3dcfb',
      sport: '#fbdcf2',
      personal: '#fbe9dc',
      work: '#dc32fb',
    }
    const colors = {
      meeting: '#7551e9',
      sport: '#e951bf',
      personal: '#ff9e58',
      work: '#516fe9',
    }
    return {
      style: {
        backgroundColor: backColors[event.category] || 'gray',
        color: colors[event.category],
      },
    }
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setDetailsModalOpen(true)
  }

  return (
    <div
      className='col-span-12 lg:col-span-9'
      style={{
        height: '800px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid oklch(0.928 0.006 264.531)',
        borderRadius: '1rem',
      }}
    >
      <DnDCalendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        onSelectSlot={handleSelect}
        views={['month', 'week', 'day']}
        onEventDrop={handleEventDrop}
        style={{ height: '100%' }}
        draggableAccessor={() => true}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={handleEventEdit}
        onSelectEvent={handleEventClick}
      />
      <EditEventModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        event={selectedEvent}
        onSave={handleSaveEvent}
      />
      <EventDetailsModal
        open={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        event={selectedEvent}
        onEdit={handleEditClick}
      />
    </div>
  )
}

export default MainCalendar
