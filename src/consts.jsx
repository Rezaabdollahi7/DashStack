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
import { PiUsersThreeFill } from 'react-icons/pi'
import { GoHistory } from 'react-icons/go'
import user1Logo from './assets/images/users/lastVisitedUsers/user1.jpg'
import user2Logo from './assets/images/users/lastVisitedUsers/user9.jpg'
import user3Logo from './assets/images/users/lastVisitedUsers/user3.jpg'
import user4Logo from './assets/images/users/lastVisitedUsers/user4.jpg'
import user5Logo from './assets/images/users/lastVisitedUsers/user5.jpg'

export const sidebarLinks = [
  {
    LinkName: 'Home',
    Link: '/',
    icon: <SpeedIcon className='h-6 w-5' />,
  },
  {
    LinkName: 'Users',
    Link: '/users',
    icon: <PiUsersThreeFill className='h-6 w-5' />,
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

// dashboard sales details chart data
export const salesDetailsData = [
  [1704067200000, 23.39], // 1 Jan 2024
  [1705507200000, 45.67], // 15 Jan 2024
  [1706745600000, 32.91], // 1 Feb 2024
  [1708185600000, 67.89], // 15 Feb 2024
  [1709251200000, 43.06], // 1 Mar 2024
  [1710691200000, 78.12], // 15 Mar 2024
  [1711929600000, 32.62], // 1 Apr 2024
  [1713369600000, 65.43], // 15 Apr 2024
  [1714521600000, 132.4], // 1 May 2024
  [1715961600000, 12.34], // 15 May 2024
  [1717200000000, 23.13], // 1 Jun 2024
  [1718640000000, 54.32], // 15 Jun 2024
  [1719792000000, 35.26], // 1 Jul 2024
  [1721232000000, 76.54], // 15 Jul 2024
  [1722470400000, 53.58], // 1 Aug 2024
  [1723910400000, 34.21], // 15 Aug 2024
  [1725148800000, 33.55], // 1 Sep 2024
  [1726588800000, 67.89], // 15 Sep 2024
  [1727740800000, 43.77], // 1 Oct 2024
  [1729180800000, 89.12], // 15 Oct 2024
  [1730419200000, 56.76], // 1 Nov 2024
  [1731859200000, 23.45], // 15 Nov 2024
  [1733011200000, 33.32], // 1 Dec 2024
  [1734451200000, 78.98], // 15 Dec 2024
]

// dashboard last visited users
export const lastVisitedUsers = [
  {
    id: 1,
    name: 'Asghar ali',
    job: 'Developer',
    online: true,
    visitTime: '10:16',
    img: user1Logo,
  },
  {
    id: 2,
    name: 'Pandhang Sadio',
    job: 'Designer',
    online: false,
    visitTime: '11:16',
    img: user2Logo,
  },
  {
    id: 3,
    name: 'Zakir Hozi',
    job: 'Qc',
    online: true,
    visitTime: '11:30',
    img: user3Logo,
  },
  {
    id: 4,
    name: 'Leonardo',
    job: 'Enginner',
    online: false,
    visitTime: '11:45',
    img: user4Logo,
  },
  {
    id: 5,
    name: 'Iman Mosa',
    job: 'Software',
    online: true,
    visitTime: '12:00',
    img: user5Logo,
  },
]
