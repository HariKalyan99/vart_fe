import React from 'react'

const SignupPage = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg_wallpaper'>
       <div className='h-[600px] w-[500px] border-2 rounded-xl bg-primary2 border-white shadow-2xl'>
        <form className='w-full h-full flex justify-evenly items-center flex-col'>
            <span className='text-2xl font-bold'>Register</span>
            <input type="text" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your name'/>
            <input type="email" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your email'/>
            <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your password'/>
            <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Confirm your password'/>
            <input type="phonenumber" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your phone? (optional)'/>
            <select name="roles" id="roles" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2'>
                <option value="Desired role" selected disabled>Desired role? (optional)</option>
                <option value="kingofjungle">KING OF JUNGLE</option>
                <option value="queenofjungle">QUEEN OF JUNGLE</option>
            </select>
            <p>Already have an account! <span className='text-base font-bold underline hover:cursor-pointer hover:text-chestnut'>Login</span></p>
        </form>
        </div>     
    </div>
  )
}

export default SignupPage