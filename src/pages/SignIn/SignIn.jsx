import { useState } from 'react'
import SignInImg from '../../assets/images/signIn.webp'
import { PiEyeClosedBold, PiEyesBold } from 'react-icons/pi'
import { useForm } from '../../Hooks/useForm'
import { useAuth } from '../../Hooks/useAuth'
import AlertBox from './AlertBox'
import InputField from './InputField'

export default function SignIn() {
  const [isShow, setIsShow] = useState(false)
  const { values, handleChange } = useForm({
    email: 'DashStack@gmail.com',
    password: '@DashStack',
  })
  const { handleLogin } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!handleLogin(values.email, values.password)) {
      alert('Email or Password is incorrect')
    }
  }

  return (
    <section className='wrapper grid h-screen w-full gap-5 lg:grid-cols-12'>
      {/* Left Side */}
      <div className='hidden flex-col items-center justify-center gap-4 px-4 lg:col-span-4 lg:flex'>
        <h2 className='text-3xl font-bold'>Hi, Welcome back</h2>
        <p className='text-gray-500'>
          More effectively with optimized workflows.
        </p>
        <img src={SignInImg} alt='sign in img' className='w-full' />
      </div>

      {/* Right Side */}
      <div className='col-span-8 flex flex-col items-center justify-center bg-white px-6'>
        <form
          onSubmit={handleSubmit}
          className='content-wrapper flex flex-col items-center gap-y-5 lg:items-start'
        >
          <h3 className='text-xl font-semibold'>Sign in to your account</h3>
          <p className='text-[15px] font-medium text-gray-400'>
            Don’t have an account?{' '}
            <span className='text-dark-green'>Get started</span>
          </p>

          <AlertBox />

          <InputField
            label='Email'
            type='email'
            name='email'
            placeholder='Email Address ..'
            value={values.email}
            onChange={handleChange}
          />

          <div className='pass-wrapper flex w-full flex-col gap-2'>
            <p className='mt-4 w-full text-end text-xs text-gray-500 lg:text-sm'>
              Forgot Password?
            </p>

            <InputField
              label='Password'
              type={isShow ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              icon={
                <button
                  type='button'
                  className='absolute top-1/4 right-3 rounded-full p-1 text-lg text-gray-500 hover:bg-gray-100'
                  onClick={() => setIsShow((prev) => !prev)}
                >
                  {isShow ? <PiEyesBold /> : <PiEyeClosedBold />}
                </button>
              }
            />
          </div>
          <button
            type='submit'
            className='mt-4 w-full rounded-lg bg-slate-950 py-2 text-white'
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}
