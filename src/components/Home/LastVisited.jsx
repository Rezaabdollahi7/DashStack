import AvTimerIcon from '@mui/icons-material/AvTimer'
import { lastVisitedUsers } from '../../consts'
export default function LastVisited() {
  return (
    <section className='mt-12 w-full rounded-2xl bg-white p-4 shadow'>
      <div className='title-wrapper flex items-center justify-between'>
        <h6 className='text-primary-light text-2xl font-bold'>Last Visited</h6>
        <AvTimerIcon className='mr-3 text-gray-500' />
      </div>
      <div className='users-wrapper mt-3 flex flex-col'>
        {lastVisitedUsers.map((user) => (
          <div
            key={user.id}
            className='mt-2 flex items-center justify-between border-b border-dashed border-gray-200 pb-2'
          >
            <div className='user flex items-center gap-4'>
              <div className='img-wrapper relative flex min-w-14'>
                <img
                  src={user.img}
                  alt='user image'
                  className='h-10 w-10 rounded-full'
                />
                {user.online && (
                  <>
                    <span className='absolute right-3 bottom-1 inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75'></span>
                    <span className='bg-icon-green absolute right-3 bottom-1 inline-flex size-3 rounded-full border-2 border-white'></span>
                  </>
                )}
              </div>
              <div className='user-details-wrapper flex flex-col items-start'>
                <p className='text-light-black font-bold'>{user.name}</p>
                <span className='mt-1 text-xs text-gray-400'>{user.job}</span>
              </div>
            </div>
            <span className='text-primary-light rounded-full border border-gray-200 px-3 text-sm font-semibold'>
              {user.visitTime}
            </span>
          </div>
        ))}
      </div>
      <button className='bg-bg-purple text-icon-purple hover:bg-primary-light mt-4 w-full cursor-pointer rounded-full py-2 hover:text-white'>
        See All
      </button>
    </section>
  )
}
