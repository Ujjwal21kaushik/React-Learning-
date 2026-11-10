import React from 'react'
import Cards from './Cards'

const Rightsidecontent = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[57px] border-b border-zinc-100 mb-4 fixed top-0 bg-zinc-200 z-2'></div>

      <div className='absolute top-15 w-[85%] h-full z-1'>
        <div className='w-[95%] h-fit m-auto mt-6 flex items-center justify-center gap-2 flex-wrap '>
            <Cards />
        </div>
      </div>
    </div>
  )
}

export default Rightsidecontent
