import React from 'react'
import { heroImg } from '../data/data'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        {/*overlay*/}
       <div className='max-h-[500px] relative'> 
        <div className='absolute w-full h-full text-gray-200 max-h-[540px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-orange-500'>Foods <span className='text-gray-200'>Delivered</span></h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src={heroImg} alt="HeroImage" />
       </div>
    </div>
  )
}

export default Hero