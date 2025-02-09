import PropTypes from 'prop-types'
import ProfessionalInfoItem from './ProfessionalInfoItem'
import AdditionalInfo from './AdditionalInfo'
import { professionalInfoItems } from '../../constants/UserProfessionalInfoItems'

const ProfessionalSection = ({ user }) => {
  return (
    <div className='mt-8 grid grid-cols-12 gap-6'>
      <div className='col-span-12 flex flex-col gap-y-4 rounded-3xl border border-slate-700 bg-white px-5 py-8 lg:col-span-8'>
        <h6 className='text-xl font-bold'>Professional Info</h6>
        <div className='grid gap-6 rounded-2xl bg-gray-50 px-4 py-4 shadow-sm md:grid-cols-2'>
          {professionalInfoItems.map((item) => (
            <ProfessionalInfoItem
              key={item.id}
              icon={item.icon}
              bgColor={item.bgColor}
              iconColor={item.iconColor}
              label={item.label}
              value={item.valueKey ? user[item.valueKey] : item.value}
            />
          ))}
        </div>
      </div>

      <AdditionalInfo
        resumeLink={user.resumeLink}
        linkedInPage={user.linkedInPage}
      />
    </div>
  )
}

ProfessionalSection.propTypes = {
  user: PropTypes.shape({
    resumeLink: PropTypes.string.isRequired,
    linkedInPage: PropTypes.string.isRequired,
    joinTime: PropTypes.string.isRequired,
    rule: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProfessionalSection
