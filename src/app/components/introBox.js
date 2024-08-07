import { MdOutlinePerson } from "react-icons/md";
import { LuPackageSearch } from "react-icons/lu";
import { BsBackpack2 } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiWatch } from "react-icons/pi";
import { FaRegSmileBeam } from "react-icons/fa";


const IntroBox = () => {
    return (
    <div className="flex flex-col pt-20 px-20">
        <div className="flex flex-col items-center text-center">
            <h1 className="text-[#1F5434] text-[64px] font-Playfair font-bold">
                Find what you need to age at home safely
            </h1>
            <h2 className="pt-2 text-[#808080] text-[20px] font-Montserrat pb-40">
                Providing you with a centralized place to shop for and find accessibility devices, aids, and equipment. With the goal of helping create an environment that will reduce the likelihood of injuries.
            </h2>
        </div>
       
        
        <div className="bg-white rounded-lg max-w-l border-2 border-[#f0f0f0] -mt-12 flex flex-col">
            <div className="justify-start pl-2 pr-2 pt-2">
                <h1 className="text-[#101827] font-Montserrat p-5 font-bold text-[25px]">Get started with Vita Home</h1>
            </div>

        <div className="flex pl-5 pr-5 pb-10 space-x-4">
            <div className="bg-white rounded-lg p-4 border-2 border-[#f0f0f0] flex-1">
                <FaMagnifyingGlass className="text-[#1F5434] text-4xl"/>
                <div className="flex flex-col py-5">
                    <h1 className="font-Montserrat text-[#101827] font-bold">Make informed decisions</h1>
                    <h2 className="text-black font-Montserrat">Understand the landscape for the essential items you need</h2>
                </div>
             </div>
        <div className="bg-white rounded-lg p-2 border-2 border-[#f0f0f0] flex-1">
                <PiWatch className="text-[#1F5434] text-5xl"/>
                <div className="flex flex-col py-4">
                    <h1 className="font-Montserrat text-[#101827] font-bold">Simplify the Process</h1>
                    <h2 className="text-black font-Montserrat">Find what you need seamlessly, making aging at home easy</h2>
                </div>
        </div>
            <div className="bg-white rounded-lg p-4 border-2 border-[#f0f0f0] flex-1">              
                <FaRegSmileBeam className="text-[#1F5434] text-4xl"/>
                <div className="flex flex-col pt-3">
                    <h1 className="font-Montserrat text-[#101827] font-bold">Feel Safer</h1>
                    <h2 className="text-black font-Montserrat">Access the equipment you need to feel safer aging in place</h2>
                </div>
            </div>
        </div>
        </div>
    </div>
);
};

export default IntroBox;