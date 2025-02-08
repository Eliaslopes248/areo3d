import baseLogo from '../images/baseLogo.png';
import invertedLogo from '../images/invertedLogo.png';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Menu({ menuStatus, menuToggle, heroRef, aboutRef, servicesRef, contactRef }) {

  const scrollToSection = (ref, offset = 0) => {
    if (ref === heroRef) {
      menuToggle(); // Close the menu if "Home" is chosen
      return;
    }

    const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - (window.innerHeight / 2) + (ref.current.offsetHeight / 2) + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    menuToggle(); // Close the menu after clicking
  };

  return (
    <div className='w-full h-[100vh] flex flex-col bg-[#0c0d0d] z-0 absolute'>
      <div className="mt-[20vh] flex-wrap">
        <div className="w-full h-fit flex flex-wrap ">
          <div className="w-full md:w-[50%] h-[25vh] border-[.01px] border-[#1f1e1e] flex items-center justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]" onClick={() => scrollToSection(heroRef)}>
            <h1 className='text-gray-200 text-[40px] font-[500] tracking-[-2px]'>Home</h1>
          </div>
          <div className="w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]" onClick={() => scrollToSection(aboutRef, -900)}>
            <h1 className='text-gray-200 text-[40px] font-[500] tracking-[-2px]'>About</h1>
          </div>
        </div>
        <div className="w-full h-fit flex flex-wrap ">
          <div className="w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]" onClick={() => scrollToSection(servicesRef, -900)}>
            <h1 className='text-gray-200 text-[40px] font-[500] tracking-[-2px]'>Services</h1>
          </div>
          <div className="bg-[#0c0d0d] w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]" onClick={() => scrollToSection(contactRef, -900)}>
            <h1 className='text-gray-200 text-[40px] font-[500] tracking-[-2px]'>Contact</h1>
          </div>
        </div>
        <div className="w-full h-[25vh] border-[.1px] border-[#1f1e1e] bg-[#0c0d0d] flex pl-[20px] flex-wrap md:justify-start">
          <div className="w-full md:w-[30vw] h-[10vh] md:h-full flex-col flex justify-center gap-[15px] p-[20px]">
            <p className='text-gray-300 md:text-[13px] text-[13px] md:mb-[20px]'>
              Copyright ©2025 ÆRO3D. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-[30vw] h-[10vh] md:h-full flex-col flex justify-center gap-[15px] p-[20px]">
            <p className='text-gray-300 md:text-[13px] text-[13px] md:mb-[20px]'>
              Term of Services Privacy Policy Cookie Policy
            </p>
          </div>
          <div className="w-full md:w-[30vw] h-fit md:h-full flex-col bg-[#0c0d0d] flex justify-center gap-[15px] p-[20px]">
            <h3 className='text-white'>Follow us</h3>
            <div className="w-full h-fit flex justify-start gap-[15px] items-center">
              <a href="https://www.facebook.com/AERO3DSocial/">
                <FaFacebook className='text-white size-[30px] hover:text-gray-500 duration-[.2s]' />
              </a>
              <a href="https://www.instagram.com/aero3d.co/">
                <FaInstagram className='text-white size-[30px] hover:text-gray-500 duration-[.2s]' />
              </a>
              <a href="https://www.linkedin.com/company/aero3dmarketing/">
                <FaLinkedin className='text-white size-[30px] hover:text-gray-500 duration-[.2s]' />
              </a>
              <a href="https://www.youtube.com/@Aero3DMarketing">
                <FaYoutube className='text-white size-[30px] hover:text-gray-500 duration-[.2s]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}