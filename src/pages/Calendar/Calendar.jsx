import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { initialEvents } from '../../constants/Events'

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

const MyCalendar = () => {
  const [events, setEvents] = useState(initialEvents)

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

  return (
    <div style={{ height: '800px', padding: '20px' }}>
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
      />
    </div>
  )
}

export default MyCalendar
