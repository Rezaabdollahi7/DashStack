import Stats from '../../components/Home/Stats'
import MyApexChart from '../../components/charts/ApexChart'
export default function Home() {
  return (
    <section className='px-6'>
      <h5 className='text-light-black mt-4 text-3xl font-bold'>Dashboard</h5>
      <Stats />
      <MyApexChart />
    </section>
  )
}
