import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { usersInfo } from '../../constants/Users'
import PersonalInfo from './PersonalInfo'
import UserProfile from './UserProfile'

export default function User() {
  const [users] = useState(usersInfo)
  let selectedUser = useParams()

  const selectedUserDetails = users.filter(
    (user) => user.id == selectedUser.userID,
  )[0]

  return (
    <>
      <div className='user-total-wrapper mt-6 grid grid-cols-12 gap-x-8 gap-y-6'>
        <PersonalInfo user={selectedUserDetails} />
        <UserProfile user={selectedUserDetails} />
      </div>
    </>
  )
}
