import React, { useEffect, useRef, useState } from 'react';
import { HiLightBulb } from "react-icons/hi2";
import { GiLaptop } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export function Services() {
  const [inView, setInView] = useState(false);
  const servicesRef = useRef(null);

  // card objects
  const serviceCards = [
    {
      name: "Website Design",
      icon: <GiLaptop className="size-14" />,
      desc: "Creating user-centric websites blends design, functionality, and content. It captivates visitors while ensuring a smooth experience. Optimizing for speed and responsiveness boosts usability across devices.",
    },
    {
      name: "Digital Marketing",
      icon: <HiLightBulb className="size-14" />,
      desc: "Digital marketing drives brand awareness and engagement through targeted online channels. It maximizes reach, conversions, and ROI with data-driven strategies and creative campaigns.",
    },
    {
      name: "SEO Optimization",
      icon: <FaMoneyBillTrendUp className="size-14" />,
      desc: "SEO optimization improves website visibility and search rankings through strategic keyword use, content, and on-page adjustments. It attracts organic traffic and improves overall user experience.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div ref={servicesRef} className="w-full h-fit border-0 bg-white translate-x-[0vw] flex flex-col md:mt-[0vh] pt-[55px] justify-evenly p-[20px] lg:pt-[200px] pb-[150px] services-con">
      <h1 className="text-5xl ml-[5vw] md:ml-[10vw] lg:text-7xl lg:ml-[16.5vw]">
        Marketing Services
      </h1>

      <p className="text-gray-500 p-[10px] text-left md:w-[50vw] w-[90vw] md:ml-[10vw] md:text-[20px] ml-[3vw] lg:ml-[16.5vw] mt-[20px] lg:max-w-[40%]">
        We provide innovative digital solutions to help brands grow, engage audiences, and stay ahead in an ever-evolving online world.
      </p>

      <div className="w-[80vw] h-[30%] translate-x-[5vw] md:translate-x-[10vw] mt-[50px] flex-col lg:flex-row flex-wrap gap-[15px] flex border-0 justify-center items-center">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className={`border-[.5px] w-full h-96 min-h-fit rounded-[20px] card lg:w-[30%] md:aspect-square border-gray-300 hover:bg-gray-100 duration-[.1s] flex flex-col pb-[30px] pt-[35px] gap-[20px] ${
              inView ? 'fade-in' : ''
            }`}
          >
            <div className="w-full pl-[25px]">{card.icon}</div>

            <div className="w-full pl-[25px] pr-[10px] translate-y-[10px] md:translate-y-[30px]">
              <h2 className="text-3xl">{card.name}</h2>
            </div>

            <div className="w-full p-[25px]">
              <p className="text-gray-500 text-[15px] translate-y-[-20px] md:translate-y-[10px]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .card {
            opacity: 0;
            transition: .5s;
          }

          .fade-in {
            animation: fade-in .8s forwards;
          }

          .fade-in:nth-child(1) {
            animation-delay: .3s;
          }

          .fade-in:nth-child(2) {
            animation-delay: .6s;
          }

          .fade-in:nth-child(3) {
            animation-delay: .9s;
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
    </div>
  );
}