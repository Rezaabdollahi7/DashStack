import moment from 'moment'
import img1 from '../assets/images/LastProducts/img1.png'
import img2 from '../assets/images/LastProducts/img2.png'
import img3 from '../assets/images/LastProducts/img3.png'
import img4 from '../assets/images/LastProducts/img4.png'
import img5 from '../assets/images/LastProducts/img5.png'
import { Link } from 'react-router-dom'

export const columns = [
  {
    field: 'Product',
    headerName: 'Product',
    width: 350,
    headerAlign: 'center',

    renderCell: (params) => {
      return (
        <Link to={`/product/${params.row.id}`}>
          <div className='flex w-full items-center justify-start gap-4'>
            <img
              src={params.row.img}
              alt={` ${params.row.Product} - img`}
              className='h-12 w-12'
            />
            <div className='product-details flex gap-2'>
              <span className='font-medium hover:cursor-pointer hover:underline hover:underline-offset-2'>
                {params.row.Product}{' '}
              </span>
              <span className='text-gray-400'>
                {' '}
                / {params.row.ProductDesc}{' '}
              </span>
            </div>
          </div>
        </Link>
      )
    },
  },
  {
    field: 'created',
    headerName: 'Create at',
    width: 250,
    headerAlign: 'center',
    align: 'center',
    type: 'date',
    renderCell: (params) => {
      return <span>{moment(params.row.created).format('lll')}</span>
    },
  },
  {
    field: 'Stock',
    headerName: 'Stock',
    type: 'number',
    width: 150,
    headerAlign: 'center',
    align: 'left',
    renderCell: (params) => {
      const percent = Math.floor((params.row.Stock / 100) * 100)
      return (
        <div className='relative mt-[35%] flex flex-col'>
          {params.row.Stock < 10 ? (
            <div className='h-1 w-full rounded-2xl bg-red-300'>
              <div
                className='absolute h-1 w-[50%] rounded-2xl bg-red-500'
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          ) : (
            <div className='h-1 w-full rounded-2xl bg-green-200'>
              <div
                className='absolute h-1 w-[70%] rounded-2xl bg-green-500'
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          )}
          <p className='mt-1 text-sm'>{params.row.Stock} in stock</p>
        </div>
      )
    },
  },
  {
    field: 'Price',
    headerName: 'Price',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => {
      return `$${params.row.Price}`
    },
  },
  {
    field: 'Publish',
    headerName: 'Publish',
    type: 'string',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => {
      return (
        <div>
          {params.row.Publish === 'Published' ? (
            <span className='rounded-lg bg-[#d6f4f9] px-4 py-1 text-sm font-semibold text-cyan-800'>
              Published
            </span>
          ) : (
            <span className='rounded-lg bg-gray-200 px-4 py-1 text-sm text-gray-700'>
              Draft
            </span>
          )}
        </div>
      )
    },
  },
]

export const rows = [
  {
    id: 1,
    Product: 'Urban Explorer Sneakers',
    ProductDesc: 'Accessories',
    img: img1,
    created: new Date(2025, 0, 15),
    Stock: 14,
    Price: 19900,
    Publish: 'Draft',
  },
  {
    id: 2,
    Product: 'Classic Leather Loafers',
    ProductDesc: 'Shose',
    img: img2,
    created: new Date(2025, 1, 10),
    Stock: 31,
    Price: 24900,
    Publish: 'Published',
  },
  {
    id: 3,
    Product: 'Mountain Trekking Boots',
    ProductDesc: 'Apparel',
    img: img3,
    created: new Date(2025, 2, 22),
    Stock: 71,
    Price: 17900,
    Publish: 'Published',
  },
  {
    id: 4,
    Product: 'Comfy Running Shoes',
    ProductDesc: 'Apparel',
    img: img4,
    created: new Date(2025, 3, 5),
    Stock: 11,
    Price: 21900,
    Publish: 'Draft',
  },
  {
    id: 5,
    Product: 'Chic Ballet Flats',
    ProductDesc: 'Shose',
    img: img5,
    created: new Date(2025, 4, 18),
    Stock: 4,
    Price: 15900,
    Publish: 'Published',
  },
  {
    id: 6,
    Product: 'Melisandre',
    ProductDesc: 'Accessories',
    img: img1,
    created: new Date(2025, 5, 30),
    Stock: 150,
    Price: 29900,
    Publish: 'Published',
  },
  {
    id: 7,
    Product: 'Clifford',
    ProductDesc: 'Shose',
    img: img2,
    created: new Date(2025, 6, 12),
    Stock: 44,
    Price: 23900,
    Publish: 'Draft',
  },
  {
    id: 8,
    Product: 'Vintage Oxford Shoes',
    ProductDesc: 'Apparel',
    img: img3,
    created: new Date(2025, 7, 25),
    Stock: 36,
    Price: 26900,
    Publish: 'Published',
  },
  {
    id: 9,
    Product: 'Roxie',
    ProductDesc: 'Shose',
    img: img4,
    created: new Date(2025, 8, 8),
    Stock: 65,
    Price: 18900,
    Publish: 'Published',
  },
]
