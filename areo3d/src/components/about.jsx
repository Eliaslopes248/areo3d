
import { FaLaptop } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";

export function AboutUs(){


    return <div className="w-full h-[60vh] flex  mt-[10vh]  ">

            <div className='flex flex-col gap-[25px] items-center justify-center w-full md:h-full h-fit 
              bg-black pb-[40px] pt-[40px] rounded-[40px]  '>
                <h1 className='text-5xl md:text-5xl lg:text-7xl text-white'>About Us</h1>

                <h2 className='text-white text-[14px] w-[90%] md:w-fit md:text-[15px] ml-[0vw]'>
                    Building Your Online Presence in Three Dimensions
                </h2>

                <p className='md:w-[55%] w-[90%]  text-gray-400 text-[15px] md:text-[16px] lg:text-[17px]'>
                    I founded AERO3D to help businesses succeed in today’s online world. With 15 years of experience in hospitality management and 
                    four years in 
                    online sales during the COVID-19 pandemic, I learned how to connect with people and adapt to challenges.
                    AERO3D Marketing bridges the gap between strategy and execution, providing businesses with high-quality web design, digital marketing,
                    and optimization. My mission is to empower businesses with cutting-edge digital tools and strategies tailored to their needs.
                    When I’m not working, I enjoy exploring new technology trends and spending time with my family. I look forward to helping your business grow.
                </p>
                
                <p  className='text-white text-[15px] hidden md:text-[15px]'>
                    Your vision. Our expertise. Let’s build something great together.
                </p>

            </div>  

        
    </div>


}