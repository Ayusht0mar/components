"use client"
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";


interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({image}) => {
    return ( 
        <motion.div className="relative overflow-hidden size-12 rounded-xl flex justify-center items-center">
            <Image
                src={image}
                alt={image}
                fill 
                style={{objectFit:'cover'}}
            />
        </motion.div>
     );
}
 
export default Card;