import { RRule } from 'rrule'
import eventImg1 from '../assets/images/CalenderEvents/img1.png'
import eventImg2 from '../assets/images/CalenderEvents/img2.png'
import eventImg3 from '../assets/images/CalenderEvents/img3.png'

const generateRecurringEvents = (event, startDate, endDate) => {
  const rule = new RRule({
    freq: RRule.MONTHLY,
    dtstart: event.start,
    until: endDate,
  })

  const dates = rule.between(startDate, endDate)

  return dates.map((date, index) => ({
    ...event,
    id: event.id + 1000 * (index + 1),
    start: date,
    end: new Date(date.getTime() + (event.end - event.start)),
  }))
}

const startDate = new Date(2025, 2, 1)
const endDate = new Date(2026, 11, 31)

const initialSingleEvents = [
  {
    id: 0,
    title: 'Work Meeting',
    start: new Date(2025, 1, 14, 10, 0),
    end: new Date(2025, 1, 14, 11, 0),
    category: 'meeting',
    img: eventImg1,
  },
  {
    id: 1,
    title: 'Gym Workout',
    start: new Date(2025, 1, 15, 18, 0),
    end: new Date(2025, 1, 15, 19, 0),
    category: 'sport',
    img: eventImg2,
  },
  {
    id: 2,
    title: 'Doctor Appointment',
    start: new Date(2025, 1, 16, 9, 0),
    end: new Date(2025, 1, 16, 10, 0),
    category: 'personal',
    img: eventImg3,
  },
  {
    id: 3,
    title: 'Team Sync',
    start: new Date(2025, 1, 17, 14, 0),
    end: new Date(2025, 1, 17, 15, 0),
    category: 'meeting',
    img: eventImg1,
  },
  {
    id: 4,
    title: 'Family Dinner',
    start: new Date(2025, 1, 18, 20, 0),
    end: new Date(2025, 1, 18, 22, 0),
    category: 'personal',
    img: eventImg2,
  },
  {
    id: 5,
    title: 'Conference Call',
    start: new Date(2025, 1, 19, 16, 0),
    end: new Date(2025, 1, 19, 17, 0),
    category: 'meeting',
    img: eventImg3,
  },
  {
    id: 6,
    title: 'Running',
    start: new Date(2025, 1, 20, 7, 0),
    end: new Date(2025, 1, 20, 8, 0),
    category: 'sport',
    img: eventImg1,
  },
  {
    id: 7,
    title: 'Project Deadline',
    start: new Date(2025, 1, 21, 23, 0),
    end: new Date(2025, 1, 22, 0, 0),
    category: 'work',
    img: eventImg2,
  },
  {
    id: 8,
    title: 'Lunch with Friend',
    start: new Date(2025, 1, 22, 12, 0),
    end: new Date(2025, 1, 22, 13, 0),
    category: 'personal',
    img: eventImg3,
  },
  {
    id: 9,
    title: 'Yoga Class',
    start: new Date(2025, 1, 23, 17, 0),
    end: new Date(2025, 1, 23, 18, 0),
    category: 'sport',
    img: eventImg1,
  },
]

const recurringEvents = initialSingleEvents.flatMap((event) =>
  generateRecurringEvents(event, startDate, endDate),
)

export const initialEvents = [...initialSingleEvents, ...recurringEvents]
