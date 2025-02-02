import React from 'react';



export const Bg_snip1 = () => {
  const dotColor = "#e5e7eb"; // Change this color as needed

  return (
    <div className=" h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-white"
          style={{
            background: `radial-gradient(${dotColor} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <div className="flex flex-wrap justify-center gap-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};



