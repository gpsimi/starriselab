import React from 'react'

const RegisterHero = () => {
  return (
    <section className="flex h-[40vh] bg-[url(/images/hero.jpg)] bg-cover w-full bg-center relative">
      <div className="absolute inset-0  bg-gradient-to-r from-secondary-2 max-md:to-black/40 ">
        <div className="structure flex flex-row h-full justify-between items-center z-30">
          <h4 className='text-white text-3xl font-bold text-center'>Apply Now</h4>
        </div>
      </div>
    </section>
  )
}

export default RegisterHero