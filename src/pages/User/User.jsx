import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { usersInfo } from '../../constants/Users'
import PersonalInfo from './PersonalInfo'

export default function User() {
  const [users] = useState(usersInfo)
  let selectedUser = useParams()

  const selectedUserDetails = users.filter(
    (user) => user.id == selectedUser.userID,
  )

  return (
    <>
      <div className='user-total-wrapper mt-6 grid grid-cols-12'>
        <PersonalInfo user={selectedUserDetails[0]} />
      </div>
    </>
  )
}
