import { BsShieldFillCheck } from 'react-icons/bs'
import { FaClock } from 'react-icons/fa6'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

export default function ProductFeatures() {
  return (
    <div className='col-span-12 my-24 grid w-full grid-cols-1 gap-24 lg:grid-cols-3'>
      {[
        {
          Icon: FaMoneyBill1Wave,
          title: 'Year warranty',
          text: 'Cotton candy gingerbread cake I love sugar sweet Yes men.',
        },
        {
          Icon: BsShieldFillCheck,
          title: '100% original',
          text: ' Chocolate bar candy canes ice cream toffee cookie halvah.',
        },
        {
          Icon: FaClock,
          title: ' 10 days replacement',
          text: ' 10 days replacement',
        },
      ].map(({ Icon, text, title }) => (
        <div
          key={text}
          className='col-span-1 flex flex-col items-center justify-center gap-4'
        >
          <Icon className='text-main-green size-7' />
          <h6 className='text-light-black text-lg font-semibold'>{title}</h6>
          <p className='text-center text-sm text-gray-400'>{text}</p>
        </div>
      ))}
    </div>
  )
}
