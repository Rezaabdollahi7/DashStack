import US from '../assets/icons/Countries/US.svg'
import FR from '../assets/icons/Countries/FR.svg'
import DE from '../assets/icons/Countries/DE.svg'
import KR from '../assets/icons/Countries/KR.svg'
import GB from '../assets/icons/Countries/GB.svg'

import Avatar1 from '../assets/icons/Avatars/avatar-1.webp'
import Avatar2 from '../assets/icons/Avatars/avatar-2.webp'
import Avatar3 from '../assets/icons/Avatars/avatar-3.webp'
import Avatar4 from '../assets/icons/Avatars/avatar-4.webp'
import Avatar5 from '../assets/icons/Avatars/avatar-5.webp'

export const rows = [
  {
    id: 1,
    avatar: Avatar1,
    seller: 'Jayvion Simon',
    product: 'CAP',
    country: DE,
    total: '$83.74',
    rank: 'Top 1',
    rankText: '#007867',
    rankBg: '#d6f1e8',
  },
  {
    id: 2,
    avatar: Avatar2,
    seller: 'Lucian Obrien',
    product: 'Branded shoes',
    country: US,
    total: '$97.14',
    rank: 'Top 2',
    rankText: '#5a25bb',
    rankBg: '#edd3ff',
  },
  {
    id: 3,
    avatar: Avatar3,
    seller: 'Deja Brady',
    product: 'Headphone',
    country: FR,
    total: '$68.71',
    rank: 'Top 3',
    rankText: '#006c9c',
    rankBg: '#d6f4f9',
  },
  {
    id: 4,
    avatar: Avatar4,
    seller: 'Harrison Stein',
    product: 'Cell phone',
    country: KR,
    total: '$85.21',
    rank: 'Top 4',
    rankText: '#b76f01',
    rankBg: '#fff1d6',
  },
  {
    id: 5,
    avatar: Avatar5,
    seller: 'Reece Chung',
    product: 'Earings',
    country: GB,
    total: '$52.17',
    rank: 'Top 5',
    rankText: '#b71d18',
    rankBg: '#ffe4de',
  },
]

export const columns = [
  {
    field: 'seller',
    headerName: 'Seller',
    width: 250,
    renderCell: (param) => {
      return (
        <div className='flex items-center gap-2'>
          <img
            className='h-8 w-8 rounded-full'
            src={param.row.avatar}
            alt={`${param.row.seller}-avatar `}
          />
          <span>{param.row.seller}</span>
        </div>
      )
    },
  },
  { field: 'product', headerName: 'Product', width: 170 },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,

    renderCell: (param) => {
      return (
        <div className='flex w-full items-center'>
          <img
            src={param.row.country}
            alt='Country-img'
            className='mt-4 h-8 w-8 rounded-xl'
          />
        </div>
      )
    },
  },
  { field: 'total', headerName: 'Total', width: 170 },
  {
    field: 'rank',
    headerName: 'Rank',
    width: 150,
    renderCell: (param) => {
      return (
        <span
          className='rounded-lg p-2 font-semibold'
          style={{ background: param.row.rankBg, color: param.row.rankText }}
        >
          {param.row.rank}
        </span>
      )
    },
  },
]
