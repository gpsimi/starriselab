import { functions } from '@/constants'
import React from 'react'

const Function = () => {
  return (
    <section className=' py-12 md:py-24 bg-primary'>
      <div className='structure'>
        <h1 className='text-2xl md:text-3xl font-semibold text-white md:text-center md:font-bold'>WHAT DO CYBERSECURITY PROFESSIONALS DO?</h1>
        <p className=' text-yellow-400 font-semibold md:text-center'>The world of cybersecurity includes a whole range of specializations. Here are a few of them.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 md:px-12'>
          {functions.map((items, index) => (
            <div key={index} className=''>
              <h2 className='text-blue-400 text-xl font-bold md:text-center'>{items.title}</h2>
              <p className='text-white md:text-center'>{items.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Function