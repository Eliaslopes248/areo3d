
export function HeroCard(){

    return(

        <div className="w-full h-[60vh]  text-left">

            <style>
                {`
                
                   
                #hero-h1 {
                    animation: fade-in 1s ease forwards;
                }

                #hero-subtext {
                    opacity: 0; /* Ensures it starts hidden */
                    animation: fade-in 1s ease forwards;
                    animation-delay: 0.3s;
                }

                @keyframes fade-in {
                    0% {
                        margin-top: 4vh;
                        opacity: 0;
                    }
                    100% {
                        margin-top: 0vh;
                        opacity: 1;
                    }
                }
 
            
                
                `}
            </style>


            <h1 id="hero-h1" className="text-black text-7xl p-[15px] md:text-[100px] md:ml-[3vw]" >
                Design. <br />
                Market. <br />
                Optimize.
            </h1>

            <p id="hero-subtext" className="text-gray-500 p-[15px] text-lef ml-[3vw] 
            md:w-[40vw] w-[90vw] md:text-[20px]">
                We build your online presence in 3 dimensions: Web Design, Digital Marketing and Optimization.
            </p>

        </div>
    )

}