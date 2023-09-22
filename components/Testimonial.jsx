import React from 'react'

export default function Testimonial({description, userName, userPhoto, organization, position}) {
  return (
    <div className='flex flex-col justify-center items-center text-center p-10 '>
      <div className='font-bold'>
        &quot;{description}&quot;
      </div> 
      <div className=' w-1/6 md:w-1/6 mt-4'>
        <img src={userPhoto} className='rounded-full'></img>
      </div>
      <div>
        {userName}
      </div>
      <div className='text-xs'>
        {position}, {organization}
      </div>

    </div>
  )
}
