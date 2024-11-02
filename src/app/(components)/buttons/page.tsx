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
                <div className="bg-black h-80 flex justify-center">
                    <button className="text-white">
                        Join Waitlist
                    </button>
                </div>
                <div className="bg-black h-80 flex justify-center">
                    <button className="text-white">
                        Hello
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