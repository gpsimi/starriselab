import Image from 'next/image'
import React from 'react'

const AboutBody = () => {
    return (
        <section className="py-12 md:py-24">
            <div className='structure'>
                <div className='flex item-center justify-center flex-col md:flex-row gap-12'>
                    <div className='w-full md:w-1/2'>
                        <Image
                            src="/images/cybersecurity-analyst.jpg"
                            height={500}
                            width={600}
                            alt='About-Image'
                            className='w-full object-cover rounded-xl'
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-3xl font-bold text-primary mb-3'>
                            About Us
                        </h3>
                        <p className='text-primary'>
                            We are passionate about empowering aspiring cybersecurity professionals
                            with hands-on training and real-world skills. Our mission is to bridge the gap
                            between theory and practice, providing expert-led instruction, interactive labs,
                            and career-focused guidance. Whether you are starting from scratch or looking to
                            advance your skills, we are here to help you succeed in the fast-growing world of
                            cybersecurity.
                        </p>
                        <br />
                        <p className='text-primary'>
                            <span className='font-semibold'>Training designed to get you job-ready</span> <br />
                            Our courses are designed to equip students with critical cybersecurity
                            skills through hands-on training and expert- led instruction, providing
                            them with real-world experience. Our curriculum is aligned with industry
                            demands, ensuring that graduates are prepared to step into high-paying
                            roles and meet the growing needs of the cybersecurity workforce.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBody