import Menu from '../components/menu'
import { HeroCard } from '../components/herocard';
import baseLogo from '../images/baseLogo.png'
import invertedLogo from '../images/invertedLogo.png'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Partners } from '../components/partners';
import { Services } from '../components/services';
import React from 'react'


export default function Home({menuStatus, menuToggle}) {
  return (
    <div className='h-fit'>
        <Menu menuStatus={menuStatus} menuToggle={menuToggle} />

        <div className={`w-full h-[20vh] border-[.01px]  ${!menuStatus?"border-[#1c1c1c]": "border-none"} items-center flex absolute duration-[.3s] z-20 `}>
          
                        <img src={menuStatus? baseLogo: invertedLogo} alt="" srcSet="" className='w-[35%] md:w-[25%] lg:w-[13%] ml-[25px]' />
          
                        <button className={`ml-auto p-[6px] ${menuStatus?"bg-black text-white hover:bg-gray-700 mr-[2vw]":" text-black mr-[2vw] bg-white  hover:bg-gray-200"}  
                          w-[100px]  h-fit rounded-2xl duration-[.1s] lg:mr-[1vw]`}>
                          Contact us
                        </button>
          
                        {/* menu status open or close conditional rendering */}
          
                        <HiOutlineMenuAlt4 onClick={menuToggle} className={`size-[45px] mr-[20px] p-[5px]  hover:bg-gray-200 duration-[.2s] text-black rounded-[50%] lg:mr-[3vw] ${menuStatus ? "block ":"hidden"}`}/>
                        <IoMdClose onClick={menuToggle} className={`text-white size-[45px] mr-[20px] p-[5px]  hover:bg-gray-500 duration-[.2s] rounded-[50%] lg:mr-[3vw] ${!menuStatus ? "block":"hidden"}`}/>
          
                  </div>

        <div className={`bg-white w-[98vw] translate-x-[1vw] rounded-[20px] h-fit absolute z-1 mt-[10px] ${!menuStatus?"md:translate-y-[100vh] translate-y-[155vh]":"translate-y-[0vh]"} duration-[.3s] pt-[25vh]` }>
             
          {/* all website body components here */}
          <HeroCard/>
         
          <Partners/>

          <Services/>


        </div>


    
    
    
    </div>
  )
}
