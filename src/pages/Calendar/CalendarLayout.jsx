import HeroTitle from '../../components/common/HeroTitle'
import MainCalendar from './Calendar'
import CalendarSideBar from './CalendarSideBar'

export default function CalendarLayout() {
  return (
    <section className=''>
      <HeroTitle name='Calendar' />

      <div className='main-wrapper my-4 grid w-full grid-cols-12 gap-5'>
        <CalendarSideBar />
        <MainCalendar />
      </div>
    </section>
  )
}
