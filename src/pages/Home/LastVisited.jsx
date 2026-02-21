import { lastVisitedUsers } from '../../constants/LastVisited'
export default function LastVisited() {
  return (
    <section className='h-full w-full rounded-2xl bg-white p-4'>
      <div className='title-wrapper flex items-center justify-between'>
        <h6 className='text-light-black text-xl font-semibold'>Last Visited</h6>
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
      <button className='bg-bg-melo-blue text-light-black mx-auto mt-7 flex cursor-pointer items-center rounded-full border border-gray-200 px-8 py-2'>
        See All
      </button>
    </section>
  )
}
