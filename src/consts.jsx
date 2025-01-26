import SpeedIcon from '@mui/icons-material/Speed'
import { AiOutlineProduct } from 'react-icons/ai'
import { TiHeart } from 'react-icons/ti'
import { FaInbox } from 'react-icons/fa'
import { TiThList } from 'react-icons/ti'
import { RiAlignItemBottomLine } from 'react-icons/ri'
import { MdOutlineCardGiftcard } from 'react-icons/md'
import { LuCalendar1 } from 'react-icons/lu'
import { RiTodoLine } from 'react-icons/ri'
import { IoMdContacts } from 'react-icons/io'
import { GrSettingsOption } from 'react-icons/gr'
import { MdShowChart } from 'react-icons/md'
import { IoPeople } from 'react-icons/io5'
import { RiBox3Fill } from 'react-icons/ri'
import { RiLineChartFill } from 'react-icons/ri'
import { GoHistory } from 'react-icons/go'

export const sidebarLinks = [
  {
    LinkName: 'Home',
    Link: '/',
    icon: <SpeedIcon className='h-6 w-5' />,
  },
  {
    LinkName: 'products',
    Link: '/products',
    icon: <AiOutlineProduct className='h-6 w-5' />,
  },
  {
    LinkName: 'favorites',
    Link: '/favorites',
    icon: <TiHeart className='h-6 w-5' />,
  },
  {
    LinkName: 'order-lists',
    Link: '/order-lists',
    icon: <TiThList className='h-6 w-5' />,
  },
  {
    LinkName: 'product-stock',
    Link: '/product-stock',
    icon: <RiAlignItemBottomLine className='h-6 w-5' />,
  },
  {
    LinkName: 'pricing',
    Link: '/pricing',
    icon: <MdOutlineCardGiftcard className='h-6 w-5' />,
  },
  {
    LinkName: 'inbox',
    Link: '/inbox',
    icon: <FaInbox className='h-6 w-5' />,
  },
  {
    LinkName: 'calendar',
    Link: '/calendar',
    icon: <LuCalendar1 className='h-6 w-5' />,
  },
  {
    LinkName: 'todo',
    Link: '/todo',
    icon: <RiTodoLine className='h-6 w-5' />,
  },
  {
    LinkName: 'contact',
    Link: '/contact',
    icon: <IoMdContacts className='h-6 w-5' />,
  },
  {
    LinkName: 'settings',
    Link: '/settings',
    icon: <GrSettingsOption className='h-6 w-5' />,
  },
]

// dashboard stats details
export const dashboardStats = [
  {
    id: 0,
    title: 'Total User',
    count: '40,689',
    chartIcon: <MdShowChart className='h-6 w-5' />,
    chartChangeCount: 8.5,
    chartText: 'Up From Yesterday',
    statsIcon: (
      <IoPeople className='text-icon-purple bg-bg-purple h-10 w-10 rounded-2xl p-2' />
    ),
  },
  {
    id: 1,
    title: 'Total Orders',
    count: '10,293',
    chartIcon: <MdShowChart className='h-6 w-5' />,
    chartChangeCount: 1.3,
    chartText: 'Up From Yesterday',
    statsIcon: (
      <RiBox3Fill className='bg-bg-yellow text-icon-yellow h-10 w-10 rounded-2xl p-2' />
    ),
  },
  {
    id: 2,
    title: 'Total Sales',
    count: '$89,000',
    chartIcon: <MdShowChart className='h-6 w-5' />,
    chartChangeCount: 4.3,
    chartText: 'Down From Yesterday',
    statsIcon: (
      <RiLineChartFill className='bg-bg-green text-icon-green h-10 w-10 rounded-2xl p-2' />
    ),
  },
  {
    id: 3,
    title: 'Total Pending',
    count: '2040',
    chartIcon: <MdShowChart className='h-6 w-5' />,
    chartChangeCount: 1.8,
    chartText: 'Up From Yesterday',
    statsIcon: (
      <GoHistory className='bg-bg-orange text-icon-orange h-10 w-10 rounded-2xl p-2' />
    ),
  },
]
