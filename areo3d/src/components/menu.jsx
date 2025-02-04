import React from 'react'
import baseLogo from '../images/baseLogo.png'
import invertedLogo from '../images/invertedLogo.png'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';

export default function Menu({menuStatus, menuToggle}) {

  return (
    
    <div className='w-full h-[100vh] flex flex-col bg-[#0c0d0d] z-0 absolute'> 

      {/* rows with nav options */}

    <div className="mt-[20vh] flex-wrap">
        <div className="w-full h-fit flex flex-wrap ">
            <div className=" w-full md:w-[50%] h-[25vh] border-[.01px] border-[#1f1e1e] flex items-center 
            justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s] ">
                <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] '>Home</h1>
            </div>

            <div className=" w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center 
            justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]">
              <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] ' >About</h1>
            </div>
        </div>

        <div className="w-full h-fit flex flex-wrap ">
            <div className="w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center 
            justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]">
                <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] ' >Services</h1>
            </div>

            <div className="  bg-[#0c0d0d]  w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center justify-start 
            pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]">
              <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] ' >Contact</h1>
            </div>
        </div>

        {/* footer */}
        <div className=" w-full h-[25vh] border-[.1px] border-[#1f1e1e]  bg-[#0c0d0d] flex pl-[20px] flex-wrap md:justify-start">

            <div className=" w-full md:w-[30vw] h-[10vh] md:h-full flex-col flex justify-center gap-[15px] p-[20px]">
                  <p className='text-gray-300 md:text-[13px] text-[13px] md:mb-[20px]'>
                    Copyright ©2025 ÆRO3D. All rights reserved.
                  </p>
            </div>

            <div className="  w-full md:w-[30vw] h-[10vh] md:h-full flex-col flex justify-center gap-[15px] p-[20px]">
                <p className='text-gray-300 md:text-[13px] text-[13px] md:mb-[20px]'>
                Term of Services  Privacy Policy  Cookie Policy
                </p>
            </div>

            <div className=" w-full md:w-[30vw] h-fit md:h-full flex-col bg-[#0c0d0d] flex justify-center gap-[15px] p-[20px]">

                <h3 className='text-white'>Follow us</h3>
                <div className="w-full h-fit  flex justify-start gap-[15px] items-center">

                  <a href="">
                    <FaFacebook className='text-white size-[30px]' />
                  </a>

                  <a href="">
                    <FaInstagram className='text-white size-[30px]' />
                  </a>

                  <a href="">
                    <FaLinkedin className='text-white size-[30px]' />
                  </a>

                  <a href="">
                    <FaYoutube className='text-white size-[30px]' />
                  </a>


                </div>
            </div>


        </div>

            
        </div>
    </div>
  )
}
