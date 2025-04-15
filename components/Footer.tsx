import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { contactBox } from '../constants'

const Footer = () => {
  return (
    <footer id='/contact' className='bg-primary py-12 md:py-24'>
      <div className='structure'>

        <div className='flex flex-col'>
          <Link href="/" className='mb-5'>
            <Image
              src="/images/starrise-logo-2.png"
              alt="Logo"
              width={150}
              height={100}
              className=''
            />
          </Link>
          <div className='flex flex-col md:flex-row gap-8 md:gap-24'>
            <div className='w-full md:w-1/2 max-w-lg'>
              <h3 className='text-2xl text-white '>About us</h3>
              <p className='text-white'>
                We are passionate about empowering aspiring cybersecurity professionals with hands-on training and real-world skills. Our mission is to bridge the gap between theory and practice, providing expert-led instruction, interactive labs, and career-focused guidance. Whether you are starting from scratch or looking to advance your skills, we are here to help you succeed in the fast-growing world of cybersecurity.
              </p>
            </div>
            <div className='w-full md:w-1/2 max-w-lg'>
              <h3 className='text-2xl text-white mb-2'>Contact Us us</h3>
              {contactBox.map((item, index) => (
                <div
                  key={item.id}
                  className='flex gap-3 items-center'

                >
                  <Link key={index} href={item.link} target="_blank" className="">
                    <item.icon className='text-white text-xl md:text-md' />
                  </Link>
                  <div>
                    <Link href={item.link}>
                      <p className='text-xl text-white'>{item.contact}</p>
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer