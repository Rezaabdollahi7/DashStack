import { BiMessageSquareDots } from 'react-icons/bi'
import { LuCalendarHeart } from 'react-icons/lu'
import PropTypes from 'prop-types'
import CustomInput from '../../components/common/CustomInput'

const personalInfoFields = [
  { id: 'fullName', label: 'Full name', icon: null },
  { id: 'email', label: 'Email', icon: null },
  { id: 'contactNumber', label: 'Contact Number', icon: null },
  {
    id: 'birthday',
    label: 'Birthday',
    icon: <LuCalendarHeart className='absolute top-[55%] right-4 h-5 w-5' />,
  },
]

export default function PersonalInfo({ user }) {
  return (
    <section className='personal-info text-light-black col-span-12 flex w-full flex-col gap-y-6 rounded-3xl border border-slate-700 bg-white px-5 py-8 lg:col-span-8'>
      {/*  title */}
      <div className='personal-top-section flex w-full items-center justify-between'>
        <div className='title flex flex-col'>
          <h6 className='text-xl font-bold'>Personal Info</h6>
          <p className='text-sm text-gray-400 lg:text-base'>
            Explore Personal Information here !
          </p>
        </div>
        <div className='icon'>
          <BiMessageSquareDots className='h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 p-2' />
        </div>
      </div>

      {/*  personal info fields */}
      <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2'>
        {personalInfoFields.map((field) => (
          <div key={field.id} className='col-span-1 flex flex-col'>
            <CustomInput
              inputId={field.id}
              inputName={field.id}
              labelName={field.label}
              inputValue={user[field.id]}
              hasIcon={field.icon}
            >
              {field.icon}
            </CustomInput>
          </div>
        ))}
      </div>
    </section>
  )
}

PersonalInfo.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }).isRequired,
}
