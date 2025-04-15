"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { mobileNav, navLinks } from "@/constants";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import { ChevronDown } from 'lucide-react';


export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close dropdown when clicking outside
            if (dropdownOpen) {
                setDropdownOpen(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownOpen]);

    if (!mounted) {
        return null;
    }

    const handleDropdown = (label: string) => {
        setDropdownOpen(dropdownOpen === label ? null : label);
    };


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

                <div className='hidden lg:flex items-center gap-4'>
                    <div className="flex items-baseline">
                        <ul className="flex gap-x-4">
                            {navLinks.map((item, index) => {
                                const isActive =
                                    pathname === item.href ||
                                    pathname.startsWith(`${item.href}/`);

                                return (
                                    <li
                                        key={index}
                                        className="group relative"
                                    >
                                        <Link href={item.href}
                                            className={cn("flex items-center justify-center gap-1 text-sm px-5 uppercase text-primary hover:text-secondary-2", {
                                                "text-secondary-2": isActive,
                                            })}
                                            onClick={() => handleDropdown(item.label)}
                                        >
                                            {item.label}
                                            {item.subItems && (
                                                <ChevronDown className={cn("h-4 w-4 transition-transform", {
                                                    "rotate-180": dropdownOpen === item.label
                                                })} />
                                            )}
                                        </Link>
                                        {item.subItems && dropdownOpen === item.label && (
                                            <div 
                                                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
                                                onClick={(e) => e.stopPropagation()} // Prevent clicks inside dropdown from closing it
                                            >
                                                <div className="py-2">
                                                    {item.subItems.map((subItem, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={`/bootcamp/${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 uppercase"
                                                            onClick={() => setDropdownOpen(null)}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:flex space-x-5 items-center'>
                    <Button asChild className='bg-primary hover:bg-secondary-2/90 text-white px-8'>
                        <Link href="/register">Apply Now</Link>
                    </Button>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MdMenu aria-hidden="true" className="h-8 w-8 text-secondary" />
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-primary/70 z-40"
                    onClick={toggleMenu}
                />
            )}
            <ul
                className={`fixed inset-y-0 right-0 bg-white text-primary flex flex-col w-[75%] space-y-6 h-screen z-50 transition-transform duration-700 ease-in-out ${mobileMenuOpen ? "-translate-x-0" : "translate-x-full"
                    } md:hidden py-20 px-6`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-5 left-4 focus:outline-none"
                >
                    <MdOutlineClose className="text-xl" />
                </button>

                {mobileNav.map((item, index) => (
                    <li key={index} className="w-full">
                        {item.subItems ? (
                            <div className="w-full">
                                <button
                                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-secondary-2 font-medium"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    {item.label}
                                    <ChevronDown className={cn("h-5 w-5 transition-transform", {
                                        "rotate-180": openIndex === index
                                    })} />
                                </button>
                                {openIndex === index && (
                                    <div className="mt-2 space-y-2 bg-gray-50/50 py-3 px-4 rounded-lg">
                                        {item.subItems.map((subItem, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/bootcamp/${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="flex flex-col w-full py-3 px-4 text-gray-700 hover:text-secondary-2 border-b border-gray-100 last:border-0"
                                                onClick={toggleMenu}
                                            >
                                                <span className="font-medium text-sm">{subItem.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:text-secondary-2"
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}

                <div className="mt-auto px-4 pb-8">
                    <Button asChild className="w-full text-secondary-2" onClick={toggleMenu}>
                        <Link href="/register">
                            Apply Now
                        </Link>
                    </Button>
                </div>
            </ul>


            {/* {mobileNav.map((item, index) => (
            <div key={index} className="shadow rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium"
                onClick={() => item.subItems ? setOpenIndex(openIndex === index ? null : index) : item.route && window.location.assign(item.route)}
              >
                {item.label}
                {item.subItems && (
                  <ChevronDown className={cn("h-5 w-5 transition-transform", { "rotate-180": openIndex === index })} />
                )}
              </button>
              {item.subItems && openIndex === index && (
                <div className="bg-white px-8 py-2 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="w-full text-left  text-gray-700 text-sm border-b last:border-b-0 py-2"
                      onClick={() => window.location.assign(`/how-tos/${subItem.label.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))} */}
        </header>

    )
}




// export const MobileNav = () => {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//     const [openIndex, setOpenIndex] = useState<number | null>(null);
//     const pathname = usePathname();

//     return (
//         <div>
//             <div
//                 onClick={() => setMobileMenuOpen(true)}
//                 className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//                 <span className="sr-only">Open main menu</span>
//                 <MdOutlineMenu className='h-7 w-7 cursor-pointer' />
//             </div>

//             {mobileMenuOpen && (
//                 <div
//                     className="fixed inset-0 bg-dark-1 bg-opacity-70 z-40"
//                     onClick={toggleMenu}
//                 />
//             )}

//             <ul
//                 className={`fixed inset-y-0 left-0 bg-white text-dark-1 flex flex-col w-[75%] space-y-16 h-screen items-center z-50 transition-transform duration-700 ease-in-out
//             ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden py-32 px-12`}
//             >
//                 <div
//                     onClick={toggleMenu}
//                     className="absolute top-5 right-4 focus:outline-none"
//                 >
//                     <MdOutlineClose className="h-5 w-8 cursor-pointer" />
//                 </div>
//                 <div className="w-80 space-y-2 p-4">
//                     {mobileNav.map((item, index) => (
//                         <div key={index} className="shadow rounded-lg overflow-hidden">
//                             <button
//                                 className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium"
//                                 onClick={() => item.subItems ? setOpenIndex(openIndex === index ? null : index) : item.href && window.location.assign(item.href)}
//                             >
//                                 {item.label}
//                                 {item.subItems && (
//                                     <ChevronDown className={cn("h-5 w-5 transition-transform", { "rotate-180": openIndex === index })} />
//                                 )}
//                             </button>
//                             {item.subItems && openIndex === index && (
//                                 <div className="bg-white px-8 py-2 space-y-2">
//                                     {item.subItems.map((subItem, subIndex) => (
//                                         <button
//                                             key={subIndex}
//                                             className="w-full text-left  text-gray-700 text-sm border-b last:border-b-0 py-2"
//                                             onClick={() => window.location.assign(`/bootcamp/${subItem.label.toLowerCase().replace(/\s+/g, "-")}`)}
//                                         >
//                                             {subItem.label}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </ul>
//         </div>
//     )
// }