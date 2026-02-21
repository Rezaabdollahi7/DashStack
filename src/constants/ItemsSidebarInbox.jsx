import { CiInboxIn, CiStar, CiTrash } from 'react-icons/ci'
import { AiOutlineSend, AiOutlineFileText } from 'react-icons/ai'
import { MdDrafts } from 'react-icons/md'
export const items = [
  {
    text: 'Inbox',
    icon: <CiInboxIn size={25} />,
    link: '/inbox/inboxs',
  },
  {
    text: 'Starred',
    icon: <CiStar size={25} />,
    link: '/inbox/starred',
  },
  {
    text: 'Sent',
    icon: <AiOutlineSend size={25} />,
    link: '/inbox/sent',
  },
  {
    text: 'Draft',
    icon: <AiOutlineFileText size={25} />,
    link: '/inbox/draft',
  },
  {
    text: 'Spam',
    icon: <MdDrafts size={25} />,
    link: '/inbox/spam',
  },
  {
    text: 'Bin',
    icon: <CiTrash size={25} />,
    link: '/inbox/bin',
  },
]
