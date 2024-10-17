import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='w-full bg-zinc-900'>
        <div className='max-w-screen-lg mx-auto py-20 flex gap-1'>
            <Card/>
        </div>
    </div>
  )
}

export default Cards