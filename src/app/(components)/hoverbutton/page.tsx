"use client"

import { motion } from "framer-motion"

const HoverButton = () => {
    return ( 
        <div className="flex justify-center my-40">
            <motion.button
                className="bg-black text-white px-4 py-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                    Hover me
            </motion.button>
        </div>
     );
}
 
export default HoverButton;