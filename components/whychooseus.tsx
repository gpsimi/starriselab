"use client"


import Image from 'next/image'
import React from 'react'
import SlideIn from './motion/SlideIn'
import { motion, AnimatePresence } from 'framer-motion';
import { whychoose } from '../constants';


const WhyChooseUS = () => {
    return (
        <section className=' py-12 md:py-24'>
            <div className='structure'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-18 items-center'>
                    <div className="w-full md:w-1/2">
                        <SlideIn direction="bottom">
                            <Image
                                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                                width={550}
                                height={300}
                                alt="Why Choose Us"
                                className='w-full rounded-xl'
                            />
                        </SlideIn>
                    </div>

                    <div className="w-full md:w-1/2 md:space-y-4 max-w-xl">
                        <SlideIn direction="right">
                            <h1 className='text-2xl md:text-3xl font-semibold text-primary  md:font-bold'>
                                Why Choose Us?
                            </h1>
                            <p className='mb-4'>
                                We offer hands-on, real-world cybersecurity training designed to get you job-ready.
                                <br />
                                Our expert-led programs focus on practical skills, industry-relevant scenarios, and guided career support—helping you break into cybersecurity with confidence.
                            </p>

                            <AnimatePresence mode="wait">

                                {whychoose.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="rounded-lg flex items-start space-y-6 md:space-y-9"
                                        
                                    >
                                        <div className='mr-3 rounded-full p-3 bg-gradient-to-b from-secondary-1 to-secondary-2'>
                                            <item.icon className='text-3xl text-white' />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold w-64 leading-tight text-primary">
                                                {item.text}
                                            </h3>
                                            <p className="text-sm font-light">
                                                {item.description}
                                            </p>
                                        </div>

                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </SlideIn>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default WhyChooseUS