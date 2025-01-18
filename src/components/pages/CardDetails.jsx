import React from 'react'
import NavigationBar from '../common-templates/NavigationBar'
import FooterBar from '../common-templates/FooterBar'

const CardDetails = () => {
  return (
    <>
    <div className='bg-nostalgicblue w-full min-h-[100vh] h-auto flex justify-center flex-col'>
        <NavigationBar details/>
        <div className='w-full h-full mt-4 flex justify-center'>
        <div className='min-h-[80vh] container mt-[2rem] w-full flex justify-center items-center gap-4'>
          <div className='w-[50%] border h-[100%]'></div>
        </div>
        </div>
        <FooterBar details/>
    </div>
    </>
  )
}

export default CardDetails