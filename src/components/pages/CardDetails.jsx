import React from 'react'
import NavigationBar from '../common-templates/NavigationBar'
import FooterBar from '../common-templates/FooterBar'
import { Box } from '@mui/material'
import DetailsCard from '../DetailsCard'

const CardDetails = () => {
  return (
    <>
    <Box className='bg-nostalgicblue w-full min-h-[100vh] h-auto flex justify-center flex-col'>
        <NavigationBar navStyle={"details"}/>
        <Box className='w-full h-full mt-4 flex justify-center'>
        <Box className='min-h-[80vh] container mt-[2rem] w-full flex justify-center items-center gap-4'>
          <Box className='w-[50%] border h-[100%]'>
            <DetailsCard />
          </Box>
        </Box>
        </Box>
        <FooterBar details/>
    </Box>
    </>
  )
}

export default CardDetails