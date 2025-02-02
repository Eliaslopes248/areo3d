
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


            <h1 id="hero-h1" className="text-black ml-[5vw] text-6xl p-[15px] md:text-[100px]
            md:ml-[10vw] md:text-9xl lg:ml-[15vw]" >
                Design. <br />
                Market. <br />
                Optimize.
            </h1>

            <p id="hero-subtext" className="text-gray-500 p-[15px] text-left ml-[5vw] 
            md:w-[60vw] w-[90vw] max-w-[600px] md:text-[20px] md:ml-[10vw] lg:ml-[15vw] lg:w-[35vw]">
                We build your online presence in 3 dimensions: Web Design, Digital Marketing, and Optimization. We create stunning websites, drive traffic with targeted marketing, and boost SEO for better conversions.
            </p>

        </div>
    )

}