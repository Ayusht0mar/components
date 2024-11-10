"use client"
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ZoomParallax = () => {

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset : ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])

    const pictures = [
        {
            src: "/image-1.jpg",
            scale: scale4,
            className: ""
        },
        {
            src: "/image-1.jpg",
            scale: scale5,
            className: "top-[-30vh] left-[5vw] w-[35vw] h-[30vh]"
        },
        {
            src: "/image-1.jpg",
            scale: scale6,
            className: "top-[-10vh] left-[-25vw] w-[20vw] h-[25vh]"
        },
        {
            src: "/image-1.jpg",
            scale: scale7
        },
        {
            src: "/image-1.jpg",
            scale: scale8
        },
    ]

    return ( 
        <div className="">
            <div ref={container} className="h-[300vh] relative">
                <div className="sticky overflow-hidden top-0 h-screen bg-orange-400">
                    {
                        pictures.map(({src,scale, className}, index) => {
                            return  <motion.div style={{scale}} key={index} className={cn( "h-full w-full absolute top-0 flex items-center justify-center", className)}>
                                        <div className="w-[25vw] h-[25vw] relative">
                                            <Image
                                                src={src}
                                                alt="Img"
                                                fill
                                            />
                                        </div>
                                    </motion.div>
                                })
                    }
                </div>
            </div>

        </div>
     );
}
 
export default ZoomParallax;