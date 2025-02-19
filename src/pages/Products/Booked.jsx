import ProgressBar from '../../components/common/ProgressBar'
import progressData from '../../constants/ProgressData'

export default function Booked() {
  return (
    <div className='booked-wrapper flex flex-col gap-y-9'>
      <h6>Booked</h6>
      {progressData.map((data, index) => (
        <ProgressBar
          key={index}
          title={data.title}
          value={data.value}
          width={data.width}
          gradientFrom={data.gradientFrom}
          gradientTo={data.gradientTo}
        />
      ))}
    </div>
  )
}
