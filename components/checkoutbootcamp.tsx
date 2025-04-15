import React from 'react'
import { CheckBootcamps } from './constants'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const CheckoutBootcamp = () => {
    return (
        <section className=' py-12 md:py-24 bg-[#E9E9E9]/80'>
            <div className='structure'>
                <h1 className='text-2xl md:text-3xl font-semibold text-primary md:text-center md:font-bold md:mb-6'>
                    Check Out Our Bootcamps
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 md:px-12'>
                    {CheckBootcamps.map((items, index) => (
                        <div key={index} className='bg-white p-3 flex flex-col rounded-md'>
                            <Image 
                                src={items.image}
                                alt={items.text}
                                width={200}
                                height={200}
                                className='w-full bg-cover rounded-md mb-3'
                            />
                            
                            <h2 className='text-secondary-2 text-xl font-bold'>{items.title}</h2>
                            <p className='text-primary font-semibold'>{items.text}</p>
                            <p className='text-primary text-xl mb-2 font-semibold'>{items.weeks}</p>
                            <p className='text-primary line-clamp-3 mb-5'>{items.description}</p>

                            <Button asChild className='items-start'>
                                <Link href="/register" className='text-secondary-2 bg-primary'>
                                    Apply Here
                                </Link>
                            </Button>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CheckoutBootcamp