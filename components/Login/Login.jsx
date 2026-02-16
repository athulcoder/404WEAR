import { Code2Icon } from 'lucide-react'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      

      {/* main box */}

      <div className='w-full px-2 min-md:w-[400px] h-fit  flex items-center  '>

        <div className=' flex justify-center flex-col items-center w-full'>
            <Code2Icon/> 
            <h1 className='text-3xl font-bold'>sudo<span className='text-cyan-600 '>wear</span></h1>
            <p>Code in style. Wear your passion.</p>
        </div>
      </div>
    </div>
  )
}

export default Login