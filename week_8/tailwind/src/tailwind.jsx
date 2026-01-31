import { useState } from 'react'

function Tailwind() {

  return (
      <>
      {/* flex */}
      {/* <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{backgroundColor:"red"}}>Hi</div>
        <div style={{backgroundColor:"green"}}>Hi</div>
        <div style={{backgroundColor:"blue"}}>Hi</div>
      </div> */}

      {/* flex in tailwind */}
      {/* <div className='flex justify-center' >
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>
      </div> */}


      {/* grid */}
      {/* <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>
        <div className='bg-yellow-500 col-span-4'>Hi</div>
      </div> */}

      {/* mobile-first
      unprefixed utilities take effect on all screen sizes, while prefixed utilities (md:uppercase) only take effect at the specific breakpoint and above
      */}
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-500 '>Hi</div>
        <div className='bg-green-500'>Hi</div> 
        <div className='bg-blue-500'>Hi</div>
      </div>
      </>

  )
}

export default Tailwind
