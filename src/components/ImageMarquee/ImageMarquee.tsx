"use client"
import useMeasure from "react-use-measure";
import Card from "./Card";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import {motion} from "framer-motion";


const ImageMarquee = () => {

    const images = [
        "/image-1.jpg",
        "/image-2.jpg",
        "/image-3.jpg",
        "/image-4.jpg",
        "/image-5.jpg",
        "/image-6.jpg",
        "/image-7.jpg",
        "/image-8.jpg",
    ]

    let [ref, {width}] = useMeasure();

    const xTraslation = useMotionValue(0);
    
    useEffect(() => {
        let controls;
        let FinalPosition = -width/2 -6;

        controls = animate(xTraslation, [0,FinalPosition], {
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay:0
        });

        return controls.stop
    }, [xTraslation, width])

    return ( 
        <div className="relative py-2 w-[50vw] mx-auto h-60 overflow-hidden">
            <motion.div className="absolute left-0 top-4 flex gap-4" ref={ref} style={{x: xTraslation}}>
                {[...images, ...images].map((item, idx) => (
                    <Card key={idx} image={item} />
                ))}

            </motion.div>

        </div>
     );
}
 
export default ImageMarquee;