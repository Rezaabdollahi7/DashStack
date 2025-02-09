import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa6'
import { MdDeleteSweep } from 'react-icons/md'
import user1Logo from '../assets/images/users/lastVisitedUsers/user1.jpg'
import user2Logo from '../assets/images/users/lastVisitedUsers/user9.jpg'
import user3Logo from '../assets/images/users/lastVisitedUsers/user3.jpg'
import user4Logo from '../assets/images/users/lastVisitedUsers/user4.jpg'
import user5Logo from '../assets/images/users/lastVisitedUsers/user5.jpg'

// Users information
export const usersInfo = [
  {
    id: 1,
    fullName: 'Reza Abdollahi',
    age: 24,
    avatar: user1Logo,
    status: true,
    email: 'reza.abdollahi@gmail.com',
    contactNumber: '9219811980',
    birthday: 'March 12, 2000',
    rule: 'Front-End Developer',
    team: 'irDevs',
    joinTime: 'April, 2025',
    resumeLink: 'reza-resume.com',
    location: 'USA / California',
    linkedInPage: 'linkedin.com/in/reza-abdollahi',
    about:
      'Experienced in building responsive and user-friendly web interfaces using modern technologies like React and Vue.js. Passionate about creating seamless user experiences.',
  },
  {
    id: 2,
    fullName: 'Yeganeh Jafari',
    age: 23,
    avatar: user2Logo,
    status: false,
    email: 'yeganeh.jafari@gmail.com',
    contactNumber: '9219811981',
    birthday: 'May 15, 2001',
    rule: 'UI/UX Designer',
    team: 'DesignTeam',
    joinTime: 'June, 2024',
    resumeLink: 'yeganeh-resume.com',
    location: 'Canada / Toronto',
    linkedInPage: 'linkedin.com/in/yeganeh-jafari',
    about:
      'Specializes in creating intuitive and visually appealing designs. Proficient in tools like Figma, Adobe XD, and Sketch.',
  },
  {
    id: 3,
    fullName: 'Hamed Adhamn',
    age: 17,
    avatar: user3Logo,
    status: true,
    email: 'hamed.adhamn@gmail.com',
    contactNumber: '9219811982',
    birthday: 'July 20, 2006',
    rule: 'Back-End Developer',
    team: 'ServerTeam',
    joinTime: 'August, 2023',
    resumeLink: 'hamed-resume.com',
    location: 'Germany / Berlin',
    linkedInPage: 'linkedin.com/in/hamed-adhamn',
    about:
      'Expert in server-side development with Node.js and Django. Focuses on building scalable and efficient backend systems.',
  },
  {
    id: 4,
    fullName: 'RMG CU',
    age: 25,
    avatar: user4Logo,
    status: false,
    email: 'rmg.cu@gmail.com',
    contactNumber: '9219811983',
    birthday: 'September 10, 1998',
    rule: 'DevOps Engineer',
    team: 'OpsTeam',
    joinTime: 'October, 2022',
    resumeLink: 'rmg-resume.com',
    location: 'UK / London',
    linkedInPage: 'linkedin.com/in/rmg-cu',
    about:
      'Skilled in CI/CD pipelines, containerization, and cloud infrastructure. Enjoys automating deployment processes.',
  },
  {
    id: 5,
    fullName: 'Kaveh Ahmadi',
    age: 32,
    avatar: user5Logo,
    status: true,
    email: 'kaveh.ahmadi@gmail.com',
    contactNumber: '9219811984',
    birthday: 'November 5, 1991',
    rule: 'Full-Stack Developer',
    team: 'FullStackTeam',
    joinTime: 'December, 2021',
    resumeLink: 'kaveh-resume.com',
    location: 'France / Paris',
    linkedInPage: 'linkedin.com/in/kaveh-ahmadi',
    about:
      'Proficient in both front-end and back-end development. Loves building end-to-end solutions with React and Node.js.',
  },
  {
    id: 6,
    fullName: 'Meysam Abdi',
    age: 28,
    avatar: user3Logo,
    status: false,
    email: 'meysam.abdi@gmail.com',
    contactNumber: '9219811985',
    birthday: 'January 30, 1995',
    rule: 'Data Scientist',
    team: 'DataTeam',
    joinTime: 'February, 2020',
    resumeLink: 'meysam-resume.com',
    location: 'Australia / Sydney',
    linkedInPage: 'linkedin.com/in/meysam-abdi',
    about:
      'Passionate about data analysis and machine learning. Experienced in Python, TensorFlow, and data visualization tools.',
  },
  {
    id: 7,
    fullName: 'Kimia Hasani',
    age: 35,
    avatar: user5Logo,
    status: true,
    email: 'kimia.hasani@gmail.com',
    contactNumber: '9219811986',
    birthday: 'April 22, 1988',
    rule: 'Machine Learning Engineer',
    team: 'MLTeam',
    joinTime: 'May, 2019',
    resumeLink: 'kimia-resume.com',
    location: 'Japan / Tokyo',
    linkedInPage: 'linkedin.com/in/kimia-hasani',
    about:
      'Specializes in developing and deploying machine learning models. Enjoys solving complex problems with AI.',
  },
  {
    id: 8,
    fullName: 'Jalil Asadi',
    age: 40,
    avatar: user1Logo,
    status: false,
    email: 'jalil.asadi@gmail.com',
    contactNumber: '9219811987',
    birthday: 'June 18, 1983',
    rule: 'System Administrator',
    team: 'SysAdminTeam',
    joinTime: 'July, 2018',
    resumeLink: 'jalil-resume.com',
    location: 'Netherlands / Amsterdam',
    linkedInPage: 'linkedin.com/in/jalil-asadi',
    about:
      'Experienced in managing and maintaining IT infrastructure. Skilled in network security and server management.',
  },
  {
    id: 9,
    fullName: 'Sara Mohammadi',
    age: 29,
    avatar: user2Logo,
    status: true,
    email: 'sara.mohammadi@gmail.com',
    contactNumber: '9219811988',
    birthday: 'August 14, 1994',
    rule: 'Mobile Developer',
    team: 'MobileTeam',
    joinTime: 'September, 2017',
    resumeLink: 'sara-resume.com',
    location: 'Spain / Madrid',
    linkedInPage: 'linkedin.com/in/sara-mohammadi',
    about:
      'Expert in developing cross-platform mobile applications using Flutter and React Native. Passionate about mobile UX.',
  },
  {
    id: 10,
    fullName: 'Ali Rezaei',
    age: 26,
    avatar: user3Logo,
    status: false,
    email: 'ali.rezaei@gmail.com',
    contactNumber: '9219811989',
    birthday: 'October 9, 1997',
    rule: 'Cloud Engineer',
    team: 'CloudTeam',
    joinTime: 'November, 2016',
    resumeLink: 'ali-resume.com',
    location: 'Brazil / Sao Paulo',
    linkedInPage: 'linkedin.com/in/ali-rezaei',
    about:
      'Specializes in cloud infrastructure and services. Proficient in AWS, Azure, and Google Cloud Platform.',
  },
  {
    id: 11,
    fullName: 'Narges Karimi',
    age: 31,
    avatar: user4Logo,
    status: true,
    email: 'narges.karimi@gmail.com',
    contactNumber: '9219811990',
    birthday: 'December 3, 1992',
    rule: 'Security Analyst',
    team: 'SecTeam',
    joinTime: 'January, 2015',
    resumeLink: 'narges-resume.com',
    location: 'India / Bangalore',
    linkedInPage: 'linkedin.com/in/narges-karimi',
    about:
      'Expert in cybersecurity and threat analysis. Passionate about protecting systems and data from vulnerabilities.',
  },
  {
    id: 12,
    fullName: 'Amir Hosseini',
    age: 27,
    avatar: user5Logo,
    status: false,
    email: 'amir.hosseini@gmail.com',
    contactNumber: '9219811991',
    birthday: 'February 28, 1996',
    rule: 'Game Developer',
    team: 'GameDevTeam',
    joinTime: 'March, 2014',
    resumeLink: 'amir-resume.com',
    location: 'South Korea / Seoul',
    linkedInPage: 'linkedin.com/in/amir-hosseini',
    about:
      'Passionate about game development and interactive storytelling. Proficient in Unity and Unreal Engine.',
  },
  {
    id: 13,
    fullName: 'Fatemeh Alizadeh',
    age: 22,
    avatar: user1Logo,
    status: true,
    email: 'fatemeh.alizadeh@gmail.com',
    contactNumber: '9219811992',
    birthday: 'April 25, 2001',
    rule: 'AI Researcher',
    team: 'AIResearchTeam',
    joinTime: 'May, 2023',
    resumeLink: 'fatemeh-resume.com',
    location: 'Switzerland / Zurich',
    linkedInPage: 'linkedin.com/in/fatemeh-alizadeh',
    about:
      'Focuses on advancing AI research and developing innovative algorithms. Enjoys exploring the frontiers of machine learning.',
  },
  {
    id: 14,
    fullName: 'Mohsen Ebrahimi',
    age: 33,
    avatar: user2Logo,
    status: false,
    email: 'mohsen.ebrahimi@gmail.com',
    contactNumber: '9219811993',
    birthday: 'June 19, 1990',
    rule: 'Blockchain Developer',
    team: 'BlockchainTeam',
    joinTime: 'July, 2022',
    resumeLink: 'mohsen-resume.com',
    location: 'Singapore / Singapore',
    linkedInPage: 'linkedin.com/in/mohsen-ebrahimi',
    about:
      'Specializes in blockchain technology and smart contracts. Passionate about decentralized applications.',
  },
  {
    id: 15,
    fullName: 'Zahra Rahimi',
    age: 30,
    avatar: user3Logo,
    status: true,
    email: 'zahra.rahimi@gmail.com',
    contactNumber: '9219811994',
    birthday: 'August 12, 1993',
    rule: 'Software Architect',
    team: 'ArchitectureTeam',
    joinTime: 'September, 2021',
    resumeLink: 'zahra-resume.com',
    location: 'UAE / Dubai',
    linkedInPage: 'linkedin.com/in/zahra-rahimi',
    about:
      'Experienced in designing scalable and maintainable software systems. Enjoys solving complex architectural challenges.',
  },
]

// users table columns
export const getColumns = (handleDeleteUser) => [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 180,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    renderCell: (params) => {
      return (
        <div className='te flex items-center justify-start gap-2'>
          <img
            className='h-8 w-8 rounded-full'
            src={params.row.avatar}
            alt='user-avatar'
          />
          <span className=''>{params.row.fullName}</span>
        </div>
      )
    },
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    sortable: true,
    width: 120,
    renderCell: (params) => {
      return params.row.status ? (
        <span className='rounded-xl bg-green-100 px-3 py-1 font-normal text-green-600'>
          Active
        </span>
      ) : (
        <span className='rounded-xl bg-red-100 px-3 py-1 font-normal text-red-600'>
          De active
        </span>
      )
    },
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 300,
    renderCell: (params) => {
      return (
        <div className='flex items-center justify-center gap-x-3'>
          <Link
            to={`/user/${params.row.id}`}
            className='bg-primary-light mt-2 flex h-9 items-center justify-center gap-x-2 rounded-xl px-4 font-semibold text-white'
          >
            <FaPen className='size-3' />
            <button>Edit</button>
          </Link>

          <div className='delete-wrapper mt-2 flex h-9 items-center justify-center gap-2 rounded-xl bg-red-400 px-4 font-semibold text-white'>
            <MdDeleteSweep className='h-5 w-5' />
            <button
              onClick={() => handleDeleteUser(params.row.id)}
              className=''
            >
              Delete User
            </button>
          </div>
        </div>
      )
    },
  },
]
