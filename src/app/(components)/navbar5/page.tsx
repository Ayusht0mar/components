"use client"
import {motion} from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

let tabs = [
    { 
        id: "/me", 
        label: "Home",
        content: (
            <div>This is World</div>
        )
    },
    { 
        id: "/me/about", 
        label: "About",
        content: (
            <div>This is New York</div>
        ) 
    },
    { 
        id: "lab", 
        label: "Lab",
        content: (
            <div>This is Business</div>
        ) 
     },
    { 
        id: "/", 
        label: "Resume",
        content: (
            <div>This is Arts</div>
        ) 
    }
]

const Navbar = () => {
    
    const pathname = usePathname()

    return (
        <div className="bg-whiteadmin fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex px-6">
            <div className=" relative p-1 mx-auto flex h-full items-center overflow-y-scroll rounded-[12px] shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] sm:overflow-y-visible">
            {tabs.map((tab) => (
                    <button 
                        key={tab.id}
                        className={`${
                            pathname === tab.id ? "" : "hover:opacity-50"
                        } relative px-3 py-1.5 text-sm md:text-base text-[#202020] font-medium  outline-2 outline-sky-400 focus-visible:outline`}
                    >
                        {pathname === tab.id && (
                            <motion.div
                                layoutId="active"
                                className="absolute inset-0 bg-[#f0f0f0]"
                                style={{
                                    borderRadius: 8,
                                }}
                                transition={{type: "spring", duration: 0.6}}
                            />
                        )}
                        <a className="relative z-50" href={tab.id}>{tab.label}</a>
                    </button>
                ))}
            </div>
        </div>
    );
}
 
export default Navbar;