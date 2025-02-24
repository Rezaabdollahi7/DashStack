import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment'
import img from '../../assets/images/LastProducts/img1.png'
const columns = [
  {
    field: 'Product',
    headerName: 'Product',
    width: 400,
    editable: true,
    renderCell: (params) => {
      return (
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
            <span className='text-gray-400'> / {params.row.ProductDesc} </span>
          </div>
        </div>
      )
    },
  },
  {
    field: 'created',
    headerName: 'Create at',
    width: 250,
    editable: true,
    align: 'start',
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
    editable: true,
    align: 'start',
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
    align: 'start',
    renderCell: (params) => {
      return `$${params.row.Price}`
    },
  },
  {
    field: 'Publish',
    headerName: 'Publish',
    type: 'string',
    width: 150,
    editable: true,
    align: 'start',
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

const rows = [
  {
    id: 1,
    Product: 'Urban Explorer Sneakers',
    ProductDesc: 'Accessories',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 14,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 2,
    Product: 'Classic Leather Loafers',
    ProductDesc: 'Shose',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 31,
    Price: 20000,
    Publish: 'Draft',
  },
  {
    id: 3,
    Product: 'Mountain Trekking Boots',
    ProductDesc: 'Apparel',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 71,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 4,
    Product: 'Comfy Running Shoes',
    ProductDesc: 'Apparel',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 11,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 5,
    Product: 'Chic Ballet Flats',
    ProductDesc: 'Shose',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 4,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 6,
    Product: 'Melisandre',
    ProductDesc: 'Accessories',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 150,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 7,
    Product: 'Clifford',
    ProductDesc: 'Shose',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 44,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 8,
    Product: 'Vintage Oxford Shoes',
    ProductDesc: 'Apparel',
    img: img,
    created: new Date(1979, 0, 1),
    Stock: 36,
    Price: 20000,
    Publish: 'Published',
  },
  {
    id: 9,
    Product: 'Roxie',
    ProductDesc: 'Shose',
    img: img,
    created: new Date(1979, 5, 1),
    Stock: 65,
    Price: 20000,
    Publish: 'Published',
  },
]

export default function ProductsTable() {
  return (
    <div className='my-5 w-full rounded-lg'>
      <DataGrid
        sx={{ borderRadius: 3 }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        rowHeight={105}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
