import { div } from "framer-motion/client";

const Buttons = () => {
    return ( 
        <div className="bg-black h-screen pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 w-[80vw] mt-5 mx-auto gap-4">
                <div className="bg-black h-80 flex items-center justify-center">
                    <button className="text-white border border-purple-500 py-2 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                        Join Waitlist
                    </button>
                </div>
                <div className="bg-black h-80 flex justify-center items-center">
                    <button className="border border-[#1BFD9C] py-2 px-4 rounded-lg font-medium text-[#1BFD9C] text-sm bg-[#0a0a0a] shadow-[0px_0px_12px_#1BFD9C]">
                        Get Premium
                    </button>
                </div>
                <div className="bg-[#F5F5F7] h-80 flex justify-center items-center">
                    <button className="text-[#0073e6] border border-[#0073e6] px-4 py-2 leading-none hover:bg-[#0073e6] hover:text-white rounded-md">
                        Hover Button
                    </button>
                </div>
                <div className="bg-black h-80 flex justify-center">
                    <button className="text-white">
                        Hello
                    </button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Buttons;