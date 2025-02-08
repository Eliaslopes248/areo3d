import { useEffect, useRef, useState } from "react";

export function TellUs() {
  

  return (
    <div  className="w-full h-fit size-fit lg:p-[60px] bg-white border-0 flex justify-center items-center">
      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fade-in .5s forwards;
          }

          .fade-in:nth-child(1) {
            animation-delay: .3s;
          }

          .fade-in:nth-child(2) {
            animation-delay: .4s;
          }

          .fade-in:nth-child(3) {
            animation-delay: .6s;
          }

          @keyframes fade-in {
            0% {
              transform: translateY(5vh);
              opacity: 0;
            }
            100% {
              transform: translateY(0vh);
              opacity: 1;
            }
          }
        `}
      </style>

          <div className="w-full md:w-[70%] lg:w-[60%] bg-black rounded-[40px] h-fit min-w-fit min-h-fit flex flex-col flex-wrap text-white p-[3%] gap-[25px]">

  
              
              </div>

       


      </div>
      
  );
}