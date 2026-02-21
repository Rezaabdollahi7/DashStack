import { useState } from 'react'
import HeroTitle from '../../components/common/HeroTitle'
import { usersInfo, getColumns } from '../../constants/Users'
import { deleteUser } from '../../utils/userUtils'
import UsersDataGrid from './UsersDataGrid'
import CustomSnackbar from './CustomSnackbar'
import { Helmet } from 'react-helmet-async'

export default function UsersList() {
  const [userRows, setUserRows] = useState(usersInfo)
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

  const handleDeleteUser = (userId) => {
    deleteUser(userId, userRows, setUserRows, handleClick)
  }

  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta name='Users' content='Users ' />
      </Helmet>
      <div className='wrapper'>
        <HeroTitle name='Users' />
        <UsersDataGrid rows={userRows} columns={getColumns(handleDeleteUser)} />
        <CustomSnackbar
          open={open}
          onClose={handleClose}
          message='User Deleted :))'
        />
      </div>
    </>
  )
}
