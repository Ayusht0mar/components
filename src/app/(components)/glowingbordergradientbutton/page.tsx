"use client"

import { motion, useSpring } from "framer-motion"
import { useTransform } from "framer-motion";
import { useEffect } from "react";

const RotatingBorderGradientButton = () => {
    
    const pulse = useSpring(0, {damping: 0, mass:5, stiffness:10})
    const pulsingBg = useTransform(pulse, (r) => {
        return `blur(${r}px)`;
    });

    useEffect(() => {
        pulse.set(10);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
                <button className="relative px-3 py-2 bg-white text-black rounded-md z-10">
                    Rotating Border Gradient
                </button>
                <div 
                    className="absolute -inset-[2px] rounded-md"
                    style={{
                        background: 
                        "conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545"
                    }}
                />
                <motion.div 
                    className="absolute -inset-[2px] rounded-md opacity-50"
                    style={{
                        background: 
                        "conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545",
                        filter: pulsingBg
                    }}
                />
            </div>
        </div>
     );
}
 
export default RotatingBorderGradientButton;