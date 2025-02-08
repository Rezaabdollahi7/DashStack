import Stats from '../../components/Home/Stats'
import MyApexChart from '../../components/charts/ApexChart'
import LastVisited from '../../components/Home/LastVisited'
import HeroTitle from '../../components/common/HeroTitle'
export default function Home() {
  return (
    <section>
      <HeroTitle name='Dashboard' />
      <Stats />
      <MyApexChart />
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-4'>
          <LastVisited />
        </div>
      </div>
    </section>
  )
}
