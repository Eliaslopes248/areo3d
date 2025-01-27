import React from 'react'

export default function Menu() {
  return (
    <div className='w-full h-[100vh] flex flex-col bg-[#0c0d0d]'>

        {/* top option, with home, contact us, exit */}

        <div className="w-full h-[20vh] border-[.01px] bg-[#0c0d0d] border-[#1c1c1c] items-center flex absolute ">

              <h1 className='text-white text-3xl ml-[3vw] '>
                Areo3D
              </h1>

              <button className='ml-auto text-black mr-[2vw] bg-white p-[6px] w-[100px] h-fit rounded-2xl hover:bg-gray-200 duration-[.1s]'>
                Contact us
              </button>

        </div>

        {/* rows with nav options */}

    <div className="mt-[20vh] flex-wrap">
        <div className="w-full h-fit flex flex-wrap ">
            <div className=" w-full md:w-[50%] h-[25vh] border-[.01px] border-[#1f1e1e] flex items-center 
            justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s] ">
                <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] '>Services</h1>
            </div>

            <div className=" w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center 
            justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]">
              <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] ' >About</h1>
            </div>
        </div>

        <div className="w-full h-fit flex flex-wrap ">
            <div className="w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center 
            justify-start pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]">
                <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] ' >Website Audit</h1>
            </div>

            <div className="  bg-[#0c0d0d]  w-full md:w-[50%] h-[25vh] border-[.1px] border-[#1f1e1e] flex items-center justify-start 
            pl-[48px] hover:bg-[#1c1c1c] duration-[.1s]">
              <h1 className='text-gray-200 text-[40px] font-[500]  tracking-[-2px] ' >Partners</h1>
            </div>
        </div>

        {/* footer */}
        <div className=" w-full h-[25vh] border-[.1px] border-[#1f1e1e]  bg-[#0c0d0d]  flex justify-start  "></div>

            <div className=""></div>

            <div className=""></div>

            <div className=""></div>

        </div>
    </div>
  )
}
