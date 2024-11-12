"use client"
import {motion} from "framer-motion";
import { useState } from "react";

let tabs = [
    { 
        id: "world", 
        label: "World",
        content: (
            <div>This is World</div>
        )
    },
    { 
        id: "ny", 
        label: "N.Y.",
        content: (
            <div>This is New York</div>
        ) 
    },
    { 
        id: "business", 
        label: "Business",
        content: (
            <div>This is Business</div>
        ) 
     },
    { 
        id: "arts", 
        label: "Arts",
        content: (
            <div>This is Arts</div>
        ) 
    },
    { 
        id: "science",
        label: "Science",
        content: (
            <div>This is Science</div>
        ) 
    },
]

const Accordion = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
        <div className="bg-black grid place-content-center h-screen">
            <div className="flex flex-col space-y-2">
                {tabs.map((tab) => (
                    <div className="bg-yellow-600">
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                            activeTab === tab.id ? "" : "hover:opacity-50"
                        } relative rounded-full px-3 py-1.5 text-sm md:text-base font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
                    >
                        {activeTab === tab.id && (
                            <motion.div 
                                layoutId="active"
                                className="absolute inset-0 bg-white"
                                style={{
                                    borderRadius: 9999,
                                }}
                                transition={{type: "spring", duration: 0.6}}
                            />
                        )}
                        <span className="relative z-10 mix-blend-exclusion">{tab.label}</span>
                    </button>
                    <div className={`${activeTab === tab.id ? "block" : "hidden"} text-white mt-4`} 
                       >
                            {tab.content}
                        </div>
                        </div>
                ))}

            </div>
            {tabs.map((tab) => (
                <div>
                        <div className={`${activeTab === tab.id ? "block" : "hidden"} text-white mt-4`} 
                       >
                            {tab.content}
                        </div>
                </div>
            ))}
        </div>
     );
}
 
export default Accordion;