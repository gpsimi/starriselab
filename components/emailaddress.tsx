import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'

const EmailAddress = () => {
    return (
        <div className='bg-[#E9E9E9]/80 py-8'>
            <div className='structure max-w-4xl'>
                <div className='flex gap-2'>
                    <div className='relative flex-1'>
                        <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={20} />
                        <Input type="email" placeholder='Email Address' className='py-6 pl-10 focus:border-none' />
                    </div>
                    <Button className='bg-secondary-2 hover:bg-secondary-2/90 text-white px-8 py-6'>Subscribe</Button>
                </div>
                <p className='text-sm mt-2'>To Recieve Our Updates Via E-mail</p>
            </div>
        </div>
    )
}

export default EmailAddress