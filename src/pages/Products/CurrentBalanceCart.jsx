export default function CurrentBalanceCart() {
  return (
    <div className='current-wrapper flex flex-col gap-y-5'>
      <h6>Your current balance</h6>
      <strong className='text-3xl font-bold'>$9,990</strong>
      <ul className='flex flex-col gap-2'>
        <li className='flex justify-between text-base'>
          <span className='text-gray-400'>Order Total</span>
          <span className='font-light'>$10,989</span>
        </li>
        <li className='flex justify-between text-base'>
          <span className='text-gray-400'>Earning</span>
          <span className='font-light'>$11,980</span>
        </li>
        <li className='flex justify-between text-base'>
          <span className='text-gray-400'>Refunded</span>
          <span className='font-light'>$90,10</span>
        </li>
      </ul>
      <div className='btns flex w-full justify-center gap-2'>
        <button className='bg-main-yellow text-black-light flex-1 rounded-lg px-6 py-1 font-semibold'>
          Share
        </button>
        <button className='bg-dark-green flex-1 rounded-lg px-6 py-1 font-semibold text-white'>
          Send
        </button>
      </div>
    </div>
  )
}
