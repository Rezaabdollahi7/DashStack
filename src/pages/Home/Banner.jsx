import DashboardSvgIcon from '../../constants/DashboardSvgIcon'
export default function Banner() {
  return (
    <>
      <div className='right flex flex-col gap-y-4 lg:flex-2'>
        <h4 className='text-2xl font-bold text-white'>
          Welcome back 👋 <br /> Jaydon Frankie
        </h4>
        <p className='text-gray-400'>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything.
        </p>
        <button className='bg-primary-light w-max rounded-xl px-4 py-2 text-white'>
          Go Now
        </button>
      </div>
      <div className='left lg:flex-1'>
        <DashboardSvgIcon />
      </div>
    </>
  )
}
