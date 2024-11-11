"use client"
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
    const [cards, setCards] = useState<Card[]>(cardData);

  return (
    <div
        className="inset-0 -z-10 h-full min-h-screen w-full bg-neutral-100 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:32px_32px] grid place-items-center">
            {cards.map((card) => {
                return (
                    <Card key={card.id} cards={cards} setCards={setCards} {...card} />
                );
            })}
    </div>
  );
};

const Card = ({
  id,
  src,
  setCards,
  cards,
}: {
    id: number,
     src: string,
     setCards: Dispatch<SetStateAction<Card[]>>;
     cards: Card[];
}) => {
    const x = useMotionValue(0);

        const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
        const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
    
        const isFront = id === cards[cards.length - 1].id;
    
        const rotate = useTransform(() => {
            const offset = isFront ? 0 : id % 2 ? 6 : -6;
        
            return `${rotateRaw.get() + offset}deg`;
          });
        
    
        const handleDragEnd = () => {
            if (Math.abs(x.get()) > 100) {
                setCards((pv) => pv.filter((v) => v.id !== id));
            }
        };

  return (
    <motion.img
    src={src} 
                alt="Placeholder" 
                height={400} 
                width={400} 
                className="rounded-lg hover:cursor-grab active:cursor-grabbing origin-bottom"
                style={{
                    gridRow: 1, 
                    gridColumn: 1, 
                    x, 
                    opacity, 
                    rotate,
                    transition: "0.125s transform",
                    boxShadow: isFront
                        ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
                        : undefined,
                    }}
                    animate={{
                        scale: isFront ? 1 : 0.98,
                      }}
                    drag={isFront ? "x" : false}
                    dragConstraints={{
                    left: 0,
                    right: 0,
                    }}
                    onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

// const SwipeCards = () => {
//     const [cards, setCards] = useState<Card[]>(cardData);

//     return ( 
//         <div 
//             className="inset-0 -z-10 h-full min-h-screen w-full bg-neutral-100 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:32px_32px] grid place-items-center">
//                 {cardData.map((card) => {
//                     return (
//                         <Card key={card.id} cards={cards} setCards={setCards} {...card} />
//                     );
//                 })}
//         </div>
//      );
// }

// const Card = ({
//     id,
//     src,
//     setCards,
//     cards,
// } : {
//     }) => {
//     return (
//
//         )
//     }

// export default SwipeCards;


type Card = { 
    id: number;
    src: string;
}

const cardData: Card[] = [
    {
        id: 1,
        src:"/image-1.jpg"
    },
    {
        id: 2,
        src:"/image-2.jpg"
    },
    {
        id: 3,
        src:"/image-3.jpg"
    },
    {
        id: 4,
        src:"/image-4.jpg"
    },
    {
        id: 5,
        src:"/image-5.jpg"
    },
    {
        id: 6,
        src:"/image-6.jpg"
    },
]