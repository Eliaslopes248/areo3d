
import { FaLaptop } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Laptop from "../3D Models/laptop";
import { AmbientLight } from "three";
export function AboutUs(){


    return <div className="w-[100vw] h-[60vh] flex items-start mt-[10vh] justify-start text-left flex-wrap ">

            <div className='flex flex-col gap-[25px] items-center justify-center w-full md:h-full h-fit md:p-[0px] 
             lg:w-[50%]  bg-black p-[10px] pb-[20px] pt-[20px]  '>
                <h1 className='text-5xl md:text-5xl lg:text-7xl text-white'>About Us</h1>

                <h2 className='text-white text-[13px] md:text-[15px]'>
                    Building Your Online Presence in Three Dimensions
                </h2>

                <p className='md:w-[85%] w-[90%] text-gray-400 text-[14px] md:text-[16px] lg:text-[17px]'>
                    I founded AERO3D to help businesses succeed in today’s online world. With 15 years of experience in hospitality management and 
                    four years in 
                    online sales during the COVID-19 pandemic, I learned how to connect with people and adapt to challenges.
                    AERO3D Marketing bridges the gap between strategy and execution, providing businesses with high-quality web design, digital marketing,
                    and optimization. My mission is to empower businesses with cutting-edge digital tools and strategies tailored to their needs.
                    When I’m not working, I enjoy exploring new technology trends and spending time with my family. I look forward to helping your business grow.
                </p>
                
                <p  className='text-white text-[13px] md:text-[15px]'>
                    Your vision. Our expertise. Let’s build something great together.
                </p>

            </div>  

            <div className=" w-full h-fit lg:w-[50%] lg:h-full ">

                   <Canvas className="w-full h-full">
                    <PerspectiveCamera position={[0,0,0]}/>
                    <ambientLight intensity={2}/>
                    <Float floatIntensity={1} rotationIntensity={1} speed={3}>

                   
                    <Laptop position={[0,-10,-25]}  />
                    </Float>
                   </Canvas>



            </div>


    </div>


}