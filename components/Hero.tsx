
import React from 'react'
import SlideIn from './motion/SlideIn'
import { herotags } from '../constants'
import { Button } from './ui/button'
import Link from 'next/link'


const Hero = () => {
    return (
        <section className="flex h-[90vh] bg-[url(/images/hero.jpg)] bg-cover w-full bg-center relative">
            <div className="absolute inset-0  bg-gradient-to-r from-primary max-md:to-black/40 ">
                <div className="structure flex flex-row h-full justify-between items-center z-30">
                    <div>
                        <SlideIn direction='top'>
                            <div className='flex space-x-3 mb-3'>
                                {herotags.map((item, index) => (
                                    <p key={index} className="text-sm text-black bg-yellow-400 px-3 rounded-xl">
                                        {item.tags}
                                    </p>
                                ))}
                            </div>
                        </SlideIn>
                        <SlideIn direction='bottom'>
                            <div className='max-w-xl space-y-2 md:space-y-4 '>
                                <h2 className='text-white text-4xl font-medium lg:text-5xl'>
                                Launch Your Cybersecurity Career with Job-Ready Skills Training
                                </h2>
                                <h5 className='text-white max-w-lg'>
                                Hands-on learning, and expert guidance to help you break into cybersecurity—no experience needed, just the drive to learn and succeed!
                                </h5>
                            </div>
                        </SlideIn>
                        <SlideIn direction='left'>
                            <div className='flex gap-5 mt-7'>
                                <Button asChild className='bg-secondary-2 hover:bg-secondary-2/80'>
                                    <Link href="/register">
                                        Apply Now
                                    </Link>
                                </Button>
                                <Button asChild className='bg-secondary-1 hover:bg-secondary-1/90'>
                                    <Link href="/images/StarRise.pdf" target="_blank" download="StarRise Labs Information Pack">
                                        Download Curriculum
                                    </Link>
                                </Button>
                            </div>
                        </SlideIn>
                    </div>



                </div>
            </div>
        </section>

    )
}

export default Hero