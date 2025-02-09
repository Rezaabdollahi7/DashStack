import { PiBuildingApartment, PiUsersThree } from 'react-icons/pi'
import { CiLocationArrow1 } from 'react-icons/ci'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

export const professionalInfoItems = [
  {
    id: 'department',
    icon: PiBuildingApartment,
    bgColor: 'bg-bg-yellow',
    iconColor: 'text-icon-yellow',
    label: 'Department',
    valueKey: 'rule',
  },
  {
    id: 'team',
    icon: PiUsersThree,
    bgColor: 'bg-bg-purple',
    iconColor: 'text-icon-purple',
    label: 'Team',
    valueKey: 'team',
  },
  {
    id: 'joined',
    icon: CiLocationArrow1,
    bgColor: 'bg-bg-green',
    iconColor: 'text-icon-green',
    label: 'Joined',
    valueKey: 'joinTime',
  },
  {
    id: 'purchase',
    icon: FaRegMoneyBillAlt,
    bgColor: 'bg-bg-orange',
    iconColor: 'text-icon-orange',
    label: 'Purchase',
    value: '$100.1',
  },
]
