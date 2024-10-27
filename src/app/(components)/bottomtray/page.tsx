"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

const BottomTray = () => {

    const [trayOpen, setTrayOpen] = useState(false);

    return ( 
        <>
        <button onClick={() => setTrayOpen(true)} className="h-screen w-full m-auto">Open Tray</button>
        <AnimatePresence>
            {
                trayOpen &&
                <Tray closeTray={() => setTrayOpen(false)}/>
            }
        </AnimatePresence>
        </>
     );
}
 
export default BottomTray;

interface TrayProps {
    closeTray: () => void;
}

const Tray = ({closeTray} : TrayProps) => {
    return(
        <>
            <motion.div 
                className="absolute inset-0 bg-black/20" 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                exit={{opacity:0}}
                onClick={closeTray}
            />
            <motion.div 
                className="absolute bottom-4 inset-x-0 mx-auto w-[22rem] min-h-10 bg-white px-8 py-3 overflow-hidden rounded-xl"
                initial={{y:336}}
                animate={{y:0}}
                exit={{y:500}}
                transition={{duration: 0.2, ease: "easeIn"}}
                >
                    <button onClick={closeTray} className="absolute right-2 top-2">Close</button>
                    Options
            </motion.div>
        </>
    )
}
