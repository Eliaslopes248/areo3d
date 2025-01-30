import Malki_law from '../assets/law.png'
import Bobby_sells from '../assets/bobby.png'
import First_med from '../assets/med.png'
import Play_house from '../assets/playhouse.png'


export function Partners(){

    // partnters
    const partners = [
        {img:Malki_law},
        {img:Bobby_sells},
        {img:First_med},
        {img:Play_house}
    ]


    return <div className="w-[100vw] h-[40vh] border-0 bg-black flex flex-col mt-[20vh] pt-[25px] justify-evenly ">

            <div className="text-gray-100 flex items-center justify-center gap-[50px] w-full border-0 border-white pl-[30px] ">
                <h1 className="text-[17px] size-fit">
                    Trusted by businesses, and ready to earn yours!
                </h1>
                <div className="w-[60%] h-[.01px] border-[.01px] border-gray-600"></div>
            </div>
            <div className="border-0 border-white flex flex-wrap justify-center md:items-center w-full h-[25%] gap-[45px] overflow-hidden ">
                {
                    partners.map(p =>{
                        return <img src={p.img} className='size-[40px] md:w-[15%] border-0 border-white' />
                    })
                }
            </div>
        

    </div>


}