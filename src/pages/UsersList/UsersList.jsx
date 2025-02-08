import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import { usersRow } from '../../consts'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa6'
import { MdDeleteSweep } from 'react-icons/md'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import HeroTitle from '../../components/common/HeroTitle'
export default function UsersList() {
  const [userRows, setUserRows] = useState(usersRow)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const deleteUser = (userId) => {
    handleClick()
    const updatedUsers = userRows.filter((user) => user.id !== userId)
    setUserRows(updatedUsers)
  }

  const columns = [
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
              <button onClick={() => deleteUser(params.row.id)} className=''>
                Delete User
              </button>
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className='wrapper'>
      <HeroTitle name='Users' />
      <Box sx={{ height: 370, width: '100%' }}>
        <DataGrid
          rows={userRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity='success'
          variant='standard'
          sx={{
            width: '100%',
            fontSize: '1.2rem',
          }}
        >
          User Deleted :))
        </Alert>
      </Snackbar>
    </div>
  )
}
