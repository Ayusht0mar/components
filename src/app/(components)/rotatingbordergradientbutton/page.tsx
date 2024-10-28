"use client"

import { motion } from "framer-motion"
import { useTime, useTransform } from "framer-motion";

const RotatingBorderGradientButton = () => {
    const time = useTime();

    const rotate = useTransform(time, [0,3000], [0, 360], {
        clamp: false,
    });
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545`
    })

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
                <button className="relative px-3 py-2 bg-white text-black rounded-md z-10">
                    Rotating Border Gradient
                </button>
                <motion.div 
                    className="absolute -inset-[2px] rounded-md"
                    style={{
                        background: rotatingBg
                    }}
                />
            </div>
        </div>
     );
}
 
export default RotatingBorderGradientButton;