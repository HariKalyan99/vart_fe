import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg_wallpaper2'>
       <div className='h-[400px] w-[500px] border-2 rounded-xl bg-primary2 border-white shadow-2xl'>
        <form className='w-full h-full flex justify-evenly items-center flex-col'>
            <span className='text-2xl font-bold'>Login</span>
            <input type="email" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your email'/>
            <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your password'/>
            <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Confirm your password'/>
            <p>Not registered? <span className='text-base font-bold underline hover:cursor-pointer hover:text-chestnut'>Signup</span></p>
        </form>
        </div>     
    </div>
  )
}

export default LoginPage