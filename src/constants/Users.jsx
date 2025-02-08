import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa6'
import { MdDeleteSweep } from 'react-icons/md'
import user1Logo from '../assets/images/users/lastVisitedUsers/user1.jpg'
import user2Logo from '../assets/images/users/lastVisitedUsers/user9.jpg'
import user3Logo from '../assets/images/users/lastVisitedUsers/user3.jpg'
import user4Logo from '../assets/images/users/lastVisitedUsers/user4.jpg'
import user5Logo from '../assets/images/users/lastVisitedUsers/user5.jpg'

// Users information
export const usersInfo = [
  {
    id: 1,
    fullName: 'Reza Abdollahi1',
    age: 24,
    avatar: user1Logo,
    status: true,
  },
  {
    id: 2,
    fullName: 'Yeganeh Jafari',
    age: 23,
    avatar: user2Logo,
    status: false,
  },
  {
    id: 3,
    fullName: 'Hamed Adhamn',
    age: 17,
    avatar: user3Logo,
    status: true,
  },
  {
    id: 4,
    fullName: 'RMG CU',
    age: 25,
    avatar: user4Logo,
    status: false,
  },
  {
    id: 5,
    fullName: 'Kaveh Ahmadi',
    age: 32,
    avatar: user5Logo,
    status: true,
  },
  {
    id: 6,
    fullName: 'Meysam Abdi',
    age: 28,
    avatar: user3Logo,
    status: false,
  },
  {
    id: 7,
    fullName: 'Kimia Hasani',
    age: 35,
    avatar: user5Logo,
    status: true,
  },
  {
    id: 8,
    fullName: 'Jalil Asadi',
    age: 40,
    avatar: user1Logo,
    status: false,
  },
]

// users table columns
export const getColumns = (handleDeleteUser) => [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 180,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    renderCell: (params) => {
      return (
        <div className='te flex items-center justify-start gap-2'>
          <img
            className='h-8 w-8 rounded-full'
            src={params.row.avatar}
            alt='user-avatar'
          />
          <span className=''>{params.row.fullName}</span>
        </div>
      )
    },
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    sortable: true,
    width: 120,
    renderCell: (params) => {
      return params.row.status ? (
        <span className='rounded-xl bg-green-100 px-3 py-1 font-normal text-green-600'>
          Active
        </span>
      ) : (
        <span className='rounded-xl bg-red-100 px-3 py-1 font-normal text-red-600'>
          De active
        </span>
      )
    },
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 300,
    renderCell: (params) => {
      return (
        <div className='flex items-center justify-center gap-x-3'>
          <Link
            to={`/user/${params.row.id}`}
            className='bg-primary-light mt-2 flex h-9 items-center justify-center gap-x-2 rounded-xl px-4 font-semibold text-white'
          >
            <FaPen className='size-3' />
            <button>Edit</button>
          </Link>

          <div className='delete-wrapper mt-2 flex h-9 items-center justify-center gap-2 rounded-xl bg-red-400 px-4 font-semibold text-white'>
            <MdDeleteSweep className='h-5 w-5' />
            <button
              onClick={() => handleDeleteUser(params.row.id)}
              className=''
            >
              Delete User
            </button>
          </div>
        </div>
      )
    },
  },
]


