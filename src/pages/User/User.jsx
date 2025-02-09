import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { usersInfo } from '../../constants/Users'
import PersonalInfo from './PersonalInfo'
import UserProfile from './UserProfile'
import UserAbout from './UserAbout'
import UserLocation from './UserLocation'
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
        <div className='bg-light-black order-1 col-span-12 mt-4 flex flex-col justify-center gap-y-4 rounded-3xl px-6 py-5 lg:order-2 lg:col-span-4 lg:mt-0'>
          <UserProfile user={selectedUserDetails} />
          <UserLocation user={selectedUserDetails} />
          <UserAbout user={selectedUserDetails} />
        </div>
      </div>
    </>
  )
}
