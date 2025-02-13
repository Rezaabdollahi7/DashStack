import HeroTitle from '../../components/common/HeroTitle'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { CiInboxIn, CiStar, CiTrash } from 'react-icons/ci'
import { AiOutlineSend, AiOutlineFileText } from 'react-icons/ai'
import { MdDrafts } from 'react-icons/md'
const items = [
  {
    text: 'Inbox',
    icon: <CiInboxIn size={25} />,
    badge: 235,
    link: '/inbox/inbox',
  },
  {
    text: 'Starred',
    icon: <CiStar size={25} />,
    badge: 522,
    link: '/inbox/starred',
  },
  {
    text: 'Sent',
    icon: <AiOutlineSend size={25} />,
    badge: 21,
    link: '/inbox/sent',
  },
  {
    text: 'Draft',
    icon: <AiOutlineFileText size={25} />,
    badge: 2,
    link: '/inbox/draft',
  },
  {
    text: 'Spam',
    icon: <MdDrafts size={25} />,
    badge: 45,
    link: '/inbox/spam',
  },
  {
    text: 'Bin',
    icon: <CiTrash size={25} />,
    badge: 57,
    link: '/inbox/bin',
  },
]
export default function Inbox() {
  return (
    <div>
      <HeroTitle name='Inbox' />

      <Sidebar items={items} />

      <Outlet />
    </div>
  )
}
