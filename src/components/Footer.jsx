import React from 'react';
import footerLogo from '../assets/footer-logo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";




const Footer = () => {
    return (
        <div className='py-12 bg-gray-100 px-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
                <div className='space-y-6 mr-14'>
                    <div className='flex items-center space-x-2'>
                        <img src={footerLogo} alt="imagelogo" className='w-32 h-auto' />
                    </div>
                    <p className='text-para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi molestiae odio, accusantium impedit in expedita corporis dolore dicta nulla.
                    </p>
                    <div className='flex gap-3'>
                        <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'>Quik Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#home" className='hover:underline text-gray-700'>Home</a>
                        </li>
                        <li>
                            <a href="#about" className='hover:underline text-gray-700'>About Us</a>
                        </li>
                        <li>
                            <a href="#services" className='hover:underline text-gray-700'>Services</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:underline text-gray-700'>Contace Us</a>
                        </li>
                    </ul>

                </div>
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'>Support</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#home" className='hover:underline text-gray-700'>FAQ</a>
                        </li>
                        <li>
                            <a href="#about" className='hover:underline text-gray-700'>Teme of Service</a>
                        </li>
                        <li>
                            <a href="#services" className='hover:underline text-gray-700'>Privocy Policy</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:underline text-gray-700'>Support Center</a>
                        </li>
                    </ul>

                </div>
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
                    <ul className="space-y-3">
                        <li className='flex items-center gap-1'>
                            <CiLocationOn className='text-primary' />
                            <a href="#home" className='hover:underline text-gray-700'>123 Street,city,Country</a>
                        </li>
                        <li className='flex items-center gap-1'>
                            <IoMdCall className='text-primary' />
                            <a href="#about" className='hover:underline text-gray-700'>+546543216374</a>
                        </li>
                        <li className='flex items-center gap-1'>
                            <CiMail className='text-primary' />
                            <a href="#services" className='hover:underline text-gray-700'>info@compony.com</a>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Footer