import React from 'react'
import { cardsData } from '../data/data'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}

      {
        cardsData.map((item) =>{
            return(<div className='rounded-xl relative' key={item.id}>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
          <p className='font-bold text-2xl px-2 pt-4'>{item.name}</p>
          <p className='px-2'>{item.type}</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>{item.order}</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={item.src}
          alt='/'
        />
      </div>)
        })
      }
    </div>
  )
}

export default Cards