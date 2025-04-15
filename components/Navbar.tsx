import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <header className="inset-x-0 top-0 z-50">
            <nav className="bg-white dark: structure py-6 flex items-center justify-between border-b border-b-white/10">
                <div className="flex lg:flex-1">
                    <Link href="/">
                        <Image
                            src="/images/starrise-logo.png"
                            alt="Logo"
                            width={120}
                            height={100}
                            className=''
                        />
                    </Link>
                </div>
                <div className='flex space-x-5 items-center'>
                    <Button asChild  className='bg-primary hover:bg-secondary-2/90 text-white px-8'>
                        <Link href="/register">Apply Now</Link>
                    </Button>
                    
                </div>
            </nav>
        </header>

    )
}

export default Navbar