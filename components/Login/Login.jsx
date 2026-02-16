import { Code2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaGoogle, FaLock } from 'react-icons/fa'

const Login = () => (
  <div className='w-full h-screen flex justify-center items-center'>


    {/* main box */}

    <div className='w-[500px] px-2 min-md:w-[400px] h-fit  flex items-center  '>

      <div className=' flex justify-center flex-col items-center w-full'>
        <Code2Icon className='text-cyan-600' />
        <h1 className='text-3xl font-bold'>sudo<span className='text-cyan-600 '>wear</span></h1>
        <p className='text-sm mb-3'>Code in style. Wear your passion.</p>


        {/* sign in box */}
        <div className='w-full px-8 py-3 min-md:w-[450px] bg-[#ffffff] h-fit flex justify-center items-center min-md:px-8 min-md:py-4 border-[1px] border-gray-100 rounded-lg flex-col shadow'>

          <div className='w-full justify-center flex flex-col items-start'>
            <h1 className='flex gap-1 justify-center items-center  text-xl font-semibold'><Code2Icon className='text-cyan-600' /> Sign In</h1>
            <p className='text-sm text-gray-900'>Welcome back, developer!</p>


            <div className='flex flex-col gap-2 w-full my-3'>
              <span className='flex gap-2 justify-center items-center w-full h-[50px] text-md text-gray-600 border-gray-300 border-[1px] rounded-lg cursor-pointer hover:bg-cyan-50 duration-150'>
                <FaGoogle className='text-cyan-600' />
                Continue with Google
              </span>

              <span className='flex gap-2 justify-center items-center w-full h-[50px] text-md text-gray-600 border-gray-300 border-[1px] rounded-lg cursor-pointer hover:bg-cyan-50 duration-150'>
                <FaGithub className='text-cyan-600' />
                Continue with Github
              </span>
            </div>


            <div className='w-full flex justify-center items-center gap-1'>
              <hr className='w-[20%]  border-gray-300' />
              <span className='text-gray-500 font-extralight text-sm '>OR CONTINUE WITH EMAIL</span>
              <hr className='w-[20%]  border-gray-300' />
            </div>



            {/* email section */}
            <form className='w-full '>

           
            <div className='flex flex-col w-full justify-center items-start gap-1 mb-4'>

              <label htmlFor="email" className='flex gap-2 justify-center items-center text-gray-600 text-[14px]'>
                <FaEnvelope  className='text-cyan-600'/> Email
              </label>

              <input type="email" name='email' placeholder='developer@email.com' className='border-[1px] border-gray-300 px-3 py-1 h-[45px] rounded-lg w-full focus:border-cyan-600 outline-gray-100 outline-[1px]' />
            
            
            </div>

             <div className='flex flex-col w-full justify-center items-start gap-1  mb-4'>

              <label htmlFor="email" className='flex gap-2 justify-center items-center text-gray-600 text-[14px]'>
                <FaLock  className='text-cyan-600'/> Password
              </label>

              <input type="password" name='password' placeholder="password" className='border-[1px] border-gray-300 px-3 py-1 h-[45px] rounded-lg w-full focus:border-cyan-600 outline-gray-100 outline-[1px]' />
            
            
            </div>


              <div className='flex w-full justify-end py-2'>
                <span className='text-cyan-700 cursor-pointer  text-cyan-600 text-[15px]'>   Forgot password?</span>
              </div>
              <input type='submit' value='Sign In' className='w-full bg-cyan-600 h-[46px]  text-sm text-white rounded-lg cursor-pointer hover:bg-cyan-700'/>
             </form>
          </div>
                  <p className='py-2 text-sm text-gray-700'>Don't have an account? <Link href={'/register'} className='text-cyan-700'>Create one now</Link></p>

        </div>
      
      </div>
    </div>
  </div>
)

export default Login