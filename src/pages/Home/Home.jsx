import Stats from '../../components/Home/Stats'
import MyApexChart from '../../components/charts/ApexChart'
import LastVisited from '../../components/Home/LastVisited'
export default function Home() {
  return (
    <section className='px-6'>
      <h5 className='text-light-black mt-4 text-3xl font-bold'>Dashboard</h5>
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
