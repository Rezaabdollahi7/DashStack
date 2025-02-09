import PropTypes from 'prop-types'

const AdditionalInfo = ({ resumeLink, linkedInPage }) => (
  <div className='col-span-12 flex flex-col gap-y-3 rounded-3xl border border-slate-700 bg-white px-5 py-8 md:col-span-4'>
    <h6 className='text-xl font-bold'>Additional Info</h6>
    <div className='resume flex flex-col'>
      <span className='text-gray-600'>Resume</span>
      <a
        href={resumeLink}
        className='text-start font-light text-blue-800 hover:underline'
      >
        {resumeLink}
      </a>
    </div>
    <div className='link mt-4 flex flex-col'>
      <span className='text-gray-600'>Additional Link</span>
      <a
        href={linkedInPage}
        className='text-start font-light text-blue-800 hover:underline'
      >
        {linkedInPage}
      </a>
    </div>
  </div>
)

AdditionalInfo.propTypes = {
  resumeLink: PropTypes.string.isRequired,
  linkedInPage: PropTypes.string.isRequired,
}

export default AdditionalInfo
