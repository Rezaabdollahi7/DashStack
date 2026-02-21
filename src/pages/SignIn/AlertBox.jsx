import { IoAlertCircle } from 'react-icons/io5'

const AlertBox = () => (
  <div className='alert-box flex w-full items-center gap-3 rounded-lg bg-[#CAFDF5] px-4 py-4 my-4 text-[0.875rem]'>
    <IoAlertCircle className='h-10 w-10 text-[#00B8D9] lg:h-6 lg:w-6' />
    <p className='font-light'>
      Use{' '}
      <span className='font-semibold text-slate-950'>DashStack@gmail.com</span>{' '}
      with password{' '}
      <span className='font-semibold text-slate-950'>@DashStack</span>
    </p>
  </div>
)
export default AlertBox
