import React, { useRef } from 'react';
import Menu from '../components/menu';
import { HeroCard } from '../components/herocard';
import { Partners } from '../components/partners';
import { Services } from '../components/services';
import { Promise } from '../components/ourpromise';
import { InDepthServices } from '../components/in-depth-services';
import { TellUs } from '../components/tellus';
import { AboutUs } from '../components/about';
import { Footer } from '../components/footer';
import baseLogo from '../images/baseLogo.png';
import invertedLogo from '../images/invertedLogo.png';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Home({ menuStatus, menuToggle }) {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='h-fit'>
      <Menu 
        menuStatus={menuStatus} 
        menuToggle={menuToggle} 
        heroRef={heroRef} 
        aboutRef={aboutRef} 
        servicesRef={servicesRef} 
        contactRef={contactRef} 
      />

      <div className={`w-full h-[20vh] border-[.01px]  ${!menuStatus ? "border-[#1c1c1c]" : "border-none"} items-center flex absolute duration-[.3s] z-20 `}>
        <img src={menuStatus ? baseLogo : invertedLogo} alt="" className='w-[35%] md:w-[25%] lg:w-[13%] ml-[25px] lg:ml-[10vw]' />
        <button className={`ml-auto p-[6px] ${menuStatus ? "bg-black text-white hover:bg-gray-700 mr-[2vw]" : " text-black mr-[2vw] bg-white  hover:bg-gray-200"} w-[100px] h-fit rounded-2xl duration-[.1s] lg:mr-[1vw]`}>
          Contact us
        </button>
        <HiOutlineMenuAlt4 onClick={menuToggle} className={`size-[45px] mr-[20px] p-[5px] hover:bg-gray-200 duration-[.2s] text-black rounded-[50%] lg:mr-[8vw] ${menuStatus ? "block" : "hidden"}`} />
        <IoMdClose onClick={menuToggle} className={`text-white size-[45px] mr-[20px] p-[5px] hover:bg-gray-500 duration-[.2s] rounded-[50%] lg:mr-[8vw] ${!menuStatus ? "block" : "hidden"}`} />
      </div>

      <div className={`bg-white w-[98vw] flex flex-col pb-[35px] gap-[30vh] translate-x-[1vw] rounded-[20px] h-fit absolute z-1 mt-[10px] ${!menuStatus ? "md:translate-y-[100vh] translate-y-[155vh]" : "translate-y-[0vh]"} duration-[.3s] pt-[25vh] overflow-x-hidden overflow-y-scroll`}>
        <div ref={heroRef}><HeroCard /></div>
        <div><Partners /></div>
        <div ref={servicesRef}><Services /></div>
        <div><Promise /></div>
        <div><InDepthServices /></div>
        <div ref={contactRef}><TellUs /></div>
        <div ref={aboutRef}><AboutUs /></div>
        <div><Footer /></div>
      </div>
    </div>
  );
}