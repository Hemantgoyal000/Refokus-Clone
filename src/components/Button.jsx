import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function Button({title = "Get Started"}) {
  return (
    <div className='w-36 px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <HiOutlineArrowLongRight/>
    </div>
  )
}

export default Button