import Stats from './Stats'
import MyApexChart from '../../components/charts/ApexChart'
import LastVisited from './LastVisited'
import HeroTitle from '../../components/common/HeroTitle'
import Banner from './Banner'
import EmblaCarousel from './Carousel'
import slides from '../../constants/DashboardCarouselSlides'
import BestSalesman from './BestSalesman'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name='Dashboard' content='Dashboard' />
      </Helmet>
      <section className='flex flex-col space-y-10'>
        <HeroTitle name='Dashboard' />
        <section id='banner' className='grid grid-cols-12 gap-5'>
          <div className='banner-bg col-span-12 flex flex-col items-center justify-between gap-6 rounded-2xl px-8 py-14 lg:col-span-8 lg:flex-row'>
            <Banner />
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <EmblaCarousel
              slides={slides}
              options={{ loop: true, dragFree: false }}
              autoplay={true}
            />
          </div>
        </section>
        <Stats />
        <MyApexChart />
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-4'>
            <LastVisited />
          </div>
          <div className='col-span-12 lg:col-span-8'>
            <BestSalesman />
          </div>
        </div>
      </section>
    </>
  )
}
