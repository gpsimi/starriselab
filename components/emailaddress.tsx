import React from 'react'
import { Input } from './ui/input'

const EmailAddress = () => {
    return (
        <div className='bg-[#E9E9E9]/80 py-8'>
            <div className='structure'>
                <div className=' '>
                    <Input type="email" placeholder='Email Address' className='py-6  focus:border-none' />
                    <p className='text-sm mt-2'>To Recieve Our Updates Via E-mail</p>
                </div>
            </div>

        </div>
    )
}

export default EmailAddress