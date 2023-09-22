import React from 'react'

export default function Prize({prizeName, prizeAmount}) {
  return (
    <>
    <div className='flex flex-col items-center w-36 justify-center mt-8'>
      
      {/* Symbol */}
      <div>
        <img src='checkMark.svg' alt='checkMarSymbol'></img>
      </div>
      
      {/* Vertical Line */}
      <div className='border-l-2 h-16 border-white md:border-black'>
      </div>

      {/* Amount */}
      <div className='font-bold'>
        {prizeAmount}$
      </div>

      {/* Prize */}
      <div >
      {prizeName}
      </div>


    </div>
      
    
    </>
  )
}
