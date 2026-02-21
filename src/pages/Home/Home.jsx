import { motion } from 'framer-motion'
import Stats from './Stats'
import MyApexChart from '../../components/charts/ApexChart'
import LastVisited from './LastVisited'
import HeroTitle from '../../components/common/HeroTitle'
import Banner from './Banner'
import EmblaCarousel from './Carousel'
import slides from '../../constants/DashboardCarouselSlides'
import BestSalesman from './BestSalesman'
import { Helmet } from 'react-helmet-async'
import { scaleIn, staggerChildren, fadeInUp } from '../../utils/motionVariants'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name='Dashboard' content='Dashboard' />
      </Helmet>

      <motion.section
        className='flex flex-col space-y-10'
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <HeroTitle name='Dashboard' />
        </motion.div>

        <motion.section
          id='banner'
          className='grid grid-cols-12 gap-5'
          variants={staggerChildren}
        >
          <div className='banner-bg col-span-12 flex flex-col items-center justify-between gap-6 rounded-2xl px-8 py-14 lg:col-span-8 lg:flex-row'>
            <Banner />
          </div>

          <motion.div
            className='col-span-12 lg:col-span-4'
            variants={scaleIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <EmblaCarousel
              slides={slides}
              options={{ loop: true, dragFree: false }}
              autoplay={true}
            />
          </motion.div>
        </motion.section>

        <motion.div
          variants={fadeInUp}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Stats />
        </motion.div>

        <motion.div
          variants={scaleIn}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 15 },
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <MyApexChart />
        </motion.div>

        <motion.div
          className='grid grid-cols-12 gap-6'
          variants={staggerChildren}
        >
          <motion.div
            className='col-span-12 rounded-2xl lg:col-span-4'
            variants={fadeInUp}
            whileHover={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
          >
            <LastVisited />
          </motion.div>

          <motion.div
            className='col-span-12 rounded-2xl lg:col-span-8'
            variants={fadeInUp}
            whileHover={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
          >
            <BestSalesman />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
