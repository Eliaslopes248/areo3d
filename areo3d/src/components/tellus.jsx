import { useEffect, useRef, useState } from "react";

export function TellUs() {
  const [formStatus, setForm] = useState(false);
  const [inView, setInView] = useState(false);
  const mainRef = useRef(null);

  const handleClick = () => {
    setForm((prev) => !prev);
    setInView(false); // Reset inView to re-trigger the animation
    setTimeout(() => {
      setInView(true); // Set inView to true after a short delay to trigger the animation
    }, 5);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <div ref={mainRef} className="w-full h-fit lg:p-[60px] bg-white border-0 flex justify-center items-center main">
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

      {/* initial prompt safe here... */}
      {!formStatus ? (
        <div className="bg-black rounded-[40px] md:rounded-[30px] justify-evenly w-full lg:w-[60vw] h-[55vh] p-[50px] lg:p-[150px] flex flex-col items-center gap-[40px] lg:items-start md:gap-[30px] prompt">
          <h1 className={`text-white text-4xl text-center ${inView ? 'fade-in' : ''}`}>Tell us about your project</h1>
          <button onClick={handleClick} className={`bg-white text-black p-[10px] w-[200px] lg:w-[130px] rounded-[25px] hover:bg-gray-100 duration-[.1s] ${inView ? 'fade-in' : ''}`}>
            Say Hi
          </button>
          <hr className={`text-gray-700 lg:w-[70%] w-[85%] ${inView ? 'fade-in' : ''}`} />
        </div>
      ) : (
        <div className="bg-red-300 rounded-[40px] md:rounded-[30px] justify-evenly w-full lg:w-[60vw] h-[55vh] p-[50px] lg:p-[150px] flex flex-col items-center gap-[40px] lg:items-start md:gap-[30px] form-con">
          <h1 className={`text-white text-4xl text-center ${inView ? 'fade-in' : ''}`}>Project Details</h1>
          <button onClick={handleClick} className={`bg-white text-black p-[10px] w-[200px] lg:w-[130px] rounded-[25px] hover:bg-gray-100 duration-[.1s] ${inView ? 'fade-in' : ''}`}>
            Exit
          </button>
          <hr className={`text-gray-700 lg:w-[70%] w-[85%] ${inView ? 'fade-in' : ''}`} />
          {/* Add your form fields here */}
        </div>
      )}
    </div>
  );
}