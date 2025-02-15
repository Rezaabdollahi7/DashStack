import { initialEvents } from '../../constants/Events'

export default function CalendarSideBar() {
  return (
    <div className='col-span-12 flex flex-col gap-y-5 rounded-2xl border border-gray-200 bg-white p-7 lg:col-span-3'>
      <button className='bg-primary-light rounded-xl py-3 text-white'>
        {' '}
        + Add New Event
      </button>
      <h3 className='text-light-black text-xl font-semibold'>
        You Are going to :{' '}
      </h3>

      {initialEvents.slice(0, 5).map((event) => (
        <div
          key={event.id}
          className='flex items-start gap-2 border-t border-t-gray-200 pt-5'
        >
          <img
            src={event.img}
            alt={`${event.title} - img`}
            className='h-12 w-12 rounded-full'
          />
          <div className='event-details flex flex-col justify-start'>
            <p className='text-light-black font-medium'>{event.title}</p>
            <p className='text-sm font-light text-gray-400'>
              from : {'  '}
              {event.start.toLocaleString()}
            </p>
            <p className='text-sm font-light text-gray-400'>
              to : {'  '}
              {event.end.toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      <button className='bg-bg-melo-blue text-light-black mx-auto mt-12 w-max rounded-xl px-8 py-2 font-semibold'>
        See More
      </button>
    </div>
  )
}
