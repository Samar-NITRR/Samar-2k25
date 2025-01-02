import React from 'react';
import SamarLogo from '../../../assets/logo/samarLogoWhite.png';
import ShauryaLogo from '../../../assets/logo/shauryaLogo.png';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <div id='contactus' className="w-full h-[calc(100vh-80px)] text-white py-5 px-5">
            <footer className="w-full h-full bg-black bg-opacity-75 backdrop-blur-lg text-white py-12 rounded-[60px]">
                <div className="mx-auto px-8 lg:px-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='w-full h-full flex flex-row justify-center items-center mr-28'>
                            <div className="h-full flex flex-col justify-evenly w-[600px]">
                                <div className="flex items-center gap-4">
                                    <img src={SamarLogo} alt="Samar Logo" className="w-20 md:w-36" />
                                    <div>
                                        <h2 className="text-2xl font-crossFly text-rose-500 italic mt-4 text-center md:text-left">
                                            SAMAR
                                        </h2>
                                        <p className="text-center md:text-left mt-2 font-speedPixel text-gray-200">
                                            The Annual Sports Festival of NIT Raipur, Samar, is a four-day mega event held in winter. It attracts over l2,000 students from more than 35 colleges and schools, providing a platform to showcase their talent in sports and games.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <img src={ShauryaLogo} alt="Shaurya Logo" className="w-20 md:w-36" />
                                    <div>
                                        <h2 className="text-2xl font-crossFly text-rose-500 italic mt-4 text-center md:text-left">
                                            SHAURYA
                                        </h2>
                                        <p className="text-center md:text-left mt-2 font-speedPixel text-gray-200">
                                            Shaurya oversees all sports activities at NIT Raipur, including Samar, inter-branch tournaments, and national-level events such as the Inter-NIT Sports meet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-center md:justify-end space-x-6 text-2xl">
                                <a href="#" className="text-gray-400 hover:text-blue-500">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-pink-500">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-600">
                                    <FaLinkedin />
                                </a>
                            </div>

                            <div>
                                <h3 className="text-xl font-crossFly italic mb-4 text-center md:text-right uppercase mt-8">
                                    Contact Us
                                </h3>

                                <p className="font-speedPixelItalic text-gray-200 mb-4 text-center md:text-right">
                                    Companies or individuals looking to collaborate or sponsor Samar can reach out using the form below.
                                </p>

                                <form className="grid gap-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full font-speedPixelItalic p-3 px-7 rounded-xl border border-gray-600  text-black focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company / Organization Name"
                                        className="w-full font-speedPixelItalic p-3 px-7 rounded-xl border border-gray-600  text-black focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full font-speedPixelItalic p-3 px-7 rounded-xl border border-gray-600  text-black focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full font-speedPixelItalic p-3 px-7 rounded-xl border border-gray-600  text-black focus:outline-none focus:border-blue-500"
                                    />
                                    <textarea
                                        placeholder="Message or Proposal"
                                        className="w-full font-speedPixelItalic p-3 px-7 rounded-xl border border-gray-600  text-black focus:outline-none focus:border-blue-500"
                                        rows="4"
                                        required
                                    ></textarea>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" id="agree" required />
                                        <label htmlFor="agree" className="text-gray-400 text-sm">
                                            I agree with{' '}
                                            <a href="#" className="text-orange-500 underline">
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="text-orange-500 underline">
                                                Terms & Conditions
                                            </a>.
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md w-full"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-gray-400 text-sm">
                        <p>
                            Copyright © 2025 Shaurya Sports Committee, NIT Raipur.
                            Designed by{' '}
                            <a href="#" className="text-orange-500">
                                Dev Team - Samar
                            </a>.
                        </p>

                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Terms & Conditions
                            </a>
                            <span>|</span>
                            <a href="#" className="text-gray-400 hover:text-white">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;