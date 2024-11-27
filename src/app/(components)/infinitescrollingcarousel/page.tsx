"use client"
import { animate, useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const InfiniteScrollingCarousel = () => {

    const logos = [
        "/image-1.jpg",
        "/image-2.jpg",
        "/image-3.jpg",
        "/image-4.jpg",
        "/image-5.jpg",
        "/image-6.jpg",
        "/image-7.jpg",
        "/image-8.jpg",
    ]

    let [ ref, {width}] = useMeasure()

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 4;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });
        
        return controls.stop;
    }, [xTranslation, width]);

    return ( 
        <div className="py-8 overflow-clip">
            <motion.div className="flex gap-2 inset-0" ref={ref} style={{x: xTranslation}}>
                {[...logos, ...logos, ...logos].map((item, idx) => (
                    <Card image={item} key={idx}/>
                ))}
            </motion.div>
        </div>
     );
}

const Card = ({image} : {
    image : string;
}) => {
    return <div className="relative overflow-hidden h-[160px] min-w-[160px] bg-slate-400 rounded-lg flex justify-center items-center">
        <Image
            src={image}
            alt={image}
            fill
        />
    </div>
}
 
export default InfiniteScrollingCarousel;