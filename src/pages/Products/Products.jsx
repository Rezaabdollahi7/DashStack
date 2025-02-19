import HeroTitle from '../../components/common/HeroTitle'

export default function ProductsLayout() {
  return (
    <div className='main-wrapper'>
      <HeroTitle name='Products' />
      <section className='products grid gap-3 lg:grid-cols-12'>
        <div className='col-span-9 grid grid-cols-10 grid-rows-3 gap-4 bg-blue-100'>
          <div className='col-span-4 row-span-3 bg-blue-200'>1</div>
          {/* here */}
          <div className='current-balance col-span-3 row-span-2 flex flex-col gap-y-5 rounded-lg bg-white p-5'>
            <h6>Your current balance</h6>
            <strong className='text-3xl font-bold'>$9,990</strong>
            <ul className='flex flex-col gap-2'>
              <li className='flex justify-between text-base'>
                <span className='text-gray-400'>Order Total</span>
                <span className='font-light'>$10,989</span>
              </li>
              <li className='flex justify-between text-base'>
                <span className='text-gray-400'>Order Total</span>
                <span className='font-light'>$10,989</span>
              </li>
              <li className='flex justify-between text-base'>
                <span className='text-gray-400'>Order Total</span>
                <span className='font-light'>$10,989</span>
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
          {/* here */}

          <div className='col-span-3 row-span-2 bg-blue-200'>3</div>

          <div className='col-span-2 row-span-1 bg-blue-200'>4</div>
        </div>
        <div className='col-span-3 bg-red-100'>5</div>
      </section>
    </div>
  )
}
