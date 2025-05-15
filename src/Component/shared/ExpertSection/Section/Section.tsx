import React from 'react'
import { Box } from '@mui/material'
import img from "../../../../assets/Section_img/Screenshot_2024-06-29_184355-removebg-preview 1.png"
import "./Section.css"

function Section() {
  return (
    <>
    <Box>
        <img src={img} className='Section_img' alt="" />
    </Box>
    </>
  )
}

export default Section