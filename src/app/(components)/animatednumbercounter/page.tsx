"use client"
import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const number = 60;

const AnimatedNumberCounter = () => {

    const [displayNumber, setDisplayNumber] = useState(0);

    const springNumberCount = useSpring(0, {
        bounce: 0,
        duration: 10000,
    });

    springNumberCount.on('change', (value) => {
        setDisplayNumber(Math.round(value));
    })

    useEffect(() => {
        springNumberCount.set(number)
    }, []);

    return ( 
        <div className="flex items-center justify-center h-screen text-6xl font-bold ">
            {displayNumber}
        </div>
     );
}
 
export default AnimatedNumberCounter;