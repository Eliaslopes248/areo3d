import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="relative w-full h-fit p-[5%] border-0 flex flex-wrap justify-start gap-[20px]">

        <div className=" border-0">Copyright ©2025 ÆRO3D. All rights reserved.</div>
        <div className="border-0">Term of Services Privacy Policy Cookie Policy</div>
        
        <div className="size-fit flex flex-col gap-[10px] lg:ml-auto lg:mr-14">
            <h3 className='text-[17px] text-black'>Follow Us</h3>
            <div className="border-0 flex gap-6">
                <FaFacebook className='size-10'/>
                <FaInstagram className='size-10'/>
                <FaLinkedin className='size-10'/>
                <FaYoutube className='size-10'/>
            </div>
        </div>
      
    </div>
  );
}