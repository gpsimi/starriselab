import React from 'react'
import SlideIn from './motion/SlideIn'
import { Button } from './ui/button'
import Link from 'next/link'

const RegisterHero = () => {
  return (
    <section className="flex h-[40vh] bg-[url(/images/hero.jpg)] bg-cover w-full bg-center relative">
            <div className="absolute inset-0  bg-gradient-to-r from-primary max-md:to-black/40 ">
                <div className="structure flex flex-row h-full justify-between items-center z-30">
                    <div>
                       <h5>Application Form</h5>
                    </div>



                </div>
            </div>
        </section>
  )
}

export default RegisterHero