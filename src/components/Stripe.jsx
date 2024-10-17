import React from 'react'

function Stripe({val}) {
  return (
    <div className='px-4 py-3 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>
        <span className='text-lg font-medium'>{val.name}</span>
        <span className='font-medium'>{val.number}</span>
    </div>
  )
}

export default Stripe