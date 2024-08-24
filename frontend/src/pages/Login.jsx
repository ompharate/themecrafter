import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex justify-center my-10'>
       <SignIn/>
    </div>
  )
}

export default Login