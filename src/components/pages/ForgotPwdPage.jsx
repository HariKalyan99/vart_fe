import React, { useState } from 'react'

const ForgotPwdPage = () => {
    const [mailSent, setMailSent] = useState(false);
    
  return (
    <div className={`w-full h-[100vh] flex justify-center items-center ${!mailSent ? "bg-nostalgicblue" : "bg_wallpaper5"}`}>
       <div className={`${mailSent ? "h-[400px]" : "h-[200px]"} w-[500px] border-2 rounded-xl bg-primary2 border-white shadow-2xl`}>
        {mailSent ? <form className='w-full h-full flex justify-evenly items-center flex-col'>
            <span className='text-2xl font-bold'>Reset password</span>
            <input type="text" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter the password sent to your mail'/>
            <input type="text" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='New password'/>
            <input type="password" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Confirm New password'/>
            <p>Skip to login? <span className='text-base font-bold underline hover:cursor-pointer hover:text-chestnut'>Login</span></p>
        </form> :  <form className='w-full h-full flex justify-evenly items-center flex-col'>
            <span className='text-2xl font-bold'>Enter your mail</span>
            <input type="email" className='w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2' placeholder='Enter your mail to receive the OTP'/>
        </form>}
        </div>     
    </div>
  )
}

export default ForgotPwdPage