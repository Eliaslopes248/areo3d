import React, { useEffect, useRef, useState } from 'react';

export function InDepthServices() {
  const [inView, setInView] = useState(false);
  const mainConRef = useRef(null);

  // in depth services arrays
  const leftServices = [
    { name: "Email & SMS Marketing", desc: "Build relationships with targeted email and SMS campaigns that drive engagement and conversions." },
    { name: "Analytics & Reporting", desc: "Understand your performance with in-depth analytics and actionable insights." },
    { name: "Social Media Management", desc: "Grow your presence on platforms like Facebook, Instagram, and LinkedIn with expert strategies." },
  ];
  const rightServices = [
    { name: "eCommerce Solutions", desc: "Launch or enhance your online store with robust eCommerce solutions, including platform setup, payment integration, and custom features for a seamless shopping experience." },
    { name: "Paid Advertising (PPC)", desc: "Maximize your ROI with data-driven Google Ads, Facebook Ads, and more." },
    { name: "Branding", desc: "Build a memorable brand identity with cohesive visuals, messaging, and design. From logos to full brand guidelines, we help your business stand out." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mainConRef.current) {
      observer.observe(mainConRef.current);
    }

    return () => {
      if (mainConRef.current) {
        observer.unobserve(mainConRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log('In view:', inView);
  }, [inView]);

  return (
    <div ref={mainConRef} className="p-[10px] pt-[35px] size-fit flex flex-col main-con">
      <style>
        {`
          .l-card, .r-card {
            opacity: 0;
            transition: opacity 0.8s, transform 0.8s;
          }

          .fade-in {
            animation: fade-in 0.8s forwards;
          }

          .l-card:nth-child(1).fade-in, .r-card:nth-child(1).fade-in {
            animation-delay: 0.3s;
          }

          .l-card:nth-child(2).fade-in, .r-card:nth-child(2).fade-in {
            animation-delay: 0.6s;
          }

          .l-card:nth-child(3).fade-in, .r-card:nth-child(3).fade-in {
            animation-delay: 0.9s;
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(5vh);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <h1 className="text-4xl translate-x-[12vw] md:translate-x-[5vw] lg:translate-x-[12vw]">
        We Offer
      </h1>

      <div className="w-full h-fit bg-white z-20 flex flex-col lg:flex-row flex-wrap p-[10px] lg:translate-x-[10vw] items-start">
        <div className="w-full lg:w-[40vw] border-0 h-full p-[20px]">
          {leftServices.map((s, index) => (
            <div key={index} className={`h-fit w-full border-b-[.5px] border-gray-400 p-[20px] l-card ${inView ? 'fade-in' : ''}`}>
              <p className="font-bold">{s.name}. </p>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[40vw] border-0 h-full p-[20px] translate-y-[-5vh] md:translate-y-[0vh]">
          {rightServices.map((s, index) => (
            <div key={index} className={`h-fit w-full border-b-[.5px] border-gray-400 p-[20px] r-card ${inView ? 'fade-in' : ''}`}>
              <p className="font-bold">{s.name}. </p>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}