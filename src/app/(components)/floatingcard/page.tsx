"use client"
import { useMotionValue, useTransform, motion } from "framer-motion";
import { MouseEventHandler } from "react";

const cardRotation = 15;

const FloatingCard = () => {

    const xPcnt = useMotionValue(0)
    const yPcnt = useMotionValue(0)

    const rotateX = useTransform(yPcnt, [-0.5, 0.5], [`-${cardRotation}15deg`, `${cardRotation}15deg`]);
    const rotateY = useTransform(xPcnt, [-0.5, 0.5], [`-${cardRotation}15deg`, `${cardRotation}15deg`]);

    const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
        const {width, height, left, top} = 
        e.currentTarget.getBoundingClientRect(); 

        const currentMouseX = e.clientX - left;
        const currentMouseY = e.clientY - top;

        return {
            currentMouseX,
            currentMouseY,
            containerWidth: width,
            containerHeight: height,
        }
    }

    const handleMouseMove: MouseEventHandler = (e) => {
        const {currentMouseX, currentMouseY, containerWidth, containerHeight} = getMousePosition(e);

        xPcnt.set(currentMouseX / containerWidth - 0.5)
        yPcnt.set(currentMouseY / containerHeight - 0.5)
    }

    return ( 
        <div className="flex justify-center items-center h-screen">
            <motion.div
            onMouseMove={handleMouseMove}
            className="h-96 w-64 bg-purple-400"
            style={{
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
            }}
            >
                Floating Card
            </motion.div>
        </div>
     );
}
 
export default FloatingCard;