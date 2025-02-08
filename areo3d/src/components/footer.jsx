import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';




export function Footer(){
    return <div className="w-full items-center md:pl-[20px] h-fit mt-[0vh] border-0 md:h-[250px] p-[15px] pb-[30px] flex flex-wrap gap-[10px]">
            
                <div className=" w-[80%] md:w-fit h-fit p-[10px]  ">
                        <p className='text-gray-400 md:text-lg text-[13px] md:mb-[20px]'>
                            Copyright ©2025 ÆRO3D. All rights reserved.
                        </p>
                </div>

                <div className=" w-[80%] md:w-fit h-fit p-[10px]">
                    <p className='text-gray-400 md:text-lg text-[13px] md:mb-[20px]'>
                    Term of Services  Privacy Policy  Cookie Policy
                    </p>
                </div>

                <div className=" w-[85%] md:w-fit md:ml-auto md:mr-[2vw] h-fit p-[10px] flex flex-wrap gap-[15px] md:gap-[40px] ">
                        <a href="">
                            <FaFacebook className='text-black size-8' />
                        </a>

                        <a href="">
                            <FaInstagram className='text-black size-8' />
                        </a>

                        <a href="">
                            <FaLinkedin className='text-black size-8' />
                        </a>

                        <a href="">
                            <FaYoutube className='text-black size-8' />
                        </a>
                </div>
                


        </div>
}