import { useState } from "react"


export function TellUs(){

    const [formStatus, setForm] = useState(false);



    return <div className="w-full h-fit lg:p-[60px] bg-white border-2 flex justify-center items-center">

        {/* initial prompt safe here */}

            <div className="bg-black rounded-[40px] md:rounded-[30px] justify-evenly w-full lg:w-[60vw] h-[55vh] p-[50px] lg:p-[150px] flex flex-col items-center gap-[40px] lg:items-start md:gap-[30px]">


                <h1 className="text-white text-4xl">
                    Tell us about your project
                </h1>

                <button className="bg-white text-black p-[10px] w-[200px] lg:w-[130px] rounded-[25px] hover:bg-gray-100 duration-[.1s]">
                    Say Hi
                </button>

                <hr className="text-gray-700 lg:w-[70%] w-[85%]"/>

                </div>

            


        {/* form here  */}



    </div>


}