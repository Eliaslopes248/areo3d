import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import baseLogo from '../images/baseLogo.png'

export function Footer() {
  return (
    <div className="relative w-full h-fit p-[5%] border-0 flex flex-wrap items-center justify-start gap-[30px]">
         <div className=" size-fit">
              <img src={baseLogo} alt="" className='object-contain size-[100px]' />
        </div>
        <div className=" text-gray-500 border-0">Copyright ©2025 ÆRO3D. All rights reserved.</div>
        <div className="text-gray-500 border-0">Term of Services Privacy Policy Cookie Policy</div>
        
       

        <div className="size-fit flex flex-col justify-center gap-[20px] lg:ml-auto lg:mr-14">

            <h3 className='text-[17px] text-black '>Follow Us</h3>
            <div className="border-0 flex gap-6">
                <a href="https://www.facebook.com/AERO3DSocial/"><FaFacebook className='size-[30px]  hover:text-gray-500 duration-[.2s]'/></a>
                <a href="https://www.instagram.com/aero3d.co/"><FaInstagram className='size-[30px] hover:text-gray-500 duration-[.2s]'/></a>
                <a href="https://www.linkedin.com/company/aero3dmarketing/"><FaLinkedin className='size-[30px] hover:text-gray-500 duration-[.2s]'/></a>
                <a href="https://www.youtube.com/@Aero3DMarketing">  <FaYoutube className='size-[30px] hover:text-gray-500 duration-[.2s]'/></a>   
            </div>

        </div>
      
    </div>
  );
}