import { PanInfo, motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import {
  CodeIcon,
  CubeIcon,
  FileIcon,
  GearIcon,
  BoxIcon,
} from '@radix-ui/react-icons';

const ITEMS = [
  {
    title: 'UI Design',
    description: 'Design intuitive user interfaces and experiences.',
    icon: (
      <CubeIcon className="h-4 w-4 text-primary-light-11 dark:text-primary-dark-11" />
    ),
    id: 1,
  },
  {
    title: 'Frontend Development',
    description: 'Build interactive, visually compelling web pages.',
    icon: (
      <CodeIcon className="h-4 w-4 text-primary-light-11 dark:text-primary-dark-11" />
    ),
    id: 2,
  },
  {
    title: 'Motion Design',
    description: 'Create engaging animations and transitions.',
    icon: (
      <FileIcon className="h-4 w-4 text-primary-light-11 dark:text-primary-dark-11" />
    ),
    id: 3,
  },
  {
    title: 'Design Engineer',
    description: 'Focusing on details, design systems, and code.',
    icon: (
      <GearIcon className="h-4 w-4 text-primary-light-11 dark:text-primary-dark-11" />
    ),
    id: 4,
  },
  {
    title: 'Product Management',
    description: 'Manage product lifecycle, from conception to launch.',
    icon: (
      <BoxIcon className="h-4 w-4 text-primary-light-11 dark:text-primary-dark-11" />
    ),
    id: 5,
  },
];

const ITEM_WIDTH = 200;
const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const CONTAINER_WIDTH = ITEM_WIDTH + GAP;

const SPRING_OPTIONS = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export default function Subtle3DCarousel() {
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, ITEMS.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const leftConstraint = -((ITEM_WIDTH + GAP) * (ITEMS.length - 1));

  return (
    <div className="relative overflow-hidden rounded-[var(--outer-r)] border border-primary-light-6/40 p-[var(--p-distance)] [--outer-r:24px] [--p-distance:16px] dark:border-primary-dark-6/60">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{
          left: leftConstraint,
          right: 0,
        }}
        style={{
          width: ITEM_WIDTH,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: currentIndex * ITEM_WIDTH + ITEM_WIDTH / 2,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * (ITEM_WIDTH + GAP)) }}
        transition={SPRING_OPTIONS}
      >
        {ITEMS.map((item, index) => {
          const range = [
            (-100 * (index + 1) * CONTAINER_WIDTH) / 100,
            (-100 * index * CONTAINER_WIDTH) / 100,
            (-100 * (index - 1) * CONTAINER_WIDTH) / 100,
          ];
          const nextIndex = Math.min(index + 1, ITEMS.length - 1);
          const prevIndex = Math.max(index - 1, 0);
          const outputRange = [nextIndex ? 90 : 90, 0, prevIndex ? -90 : -90];
          const rotateY = useTransform(x, range, outputRange, {
            clamp: false,
          });

          return (
            <motion.div
              key={index}
              className="relative flex shrink-0 flex-col items-start justify-between rounded-[calc(var(--outer-r)-var(--p-distance))] border border-primary-light-6/40 bg-primary-light-1 dark:border-primary-dark-6/60 dark:bg-primary-dark-1"
              style={{
                width: ITEM_WIDTH,
                height: '100%',
                rotateY: rotateY,
              }}
              transition={SPRING_OPTIONS}
            >
              <div className="mb-4 px-5 pt-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light-3 dark:bg-primary-dark-3">
                  {item.icon}
                </span>
              </div>
              <div className="px-5 pb-5">
                <div className="mb-1 text-sm font-medium text-primary-light-12 dark:text-primary-dark-12">
                  {item.title}
                </div>
                <p className="text-sm text-primary-light-11 dark:text-primary-dark-11">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="flex w-full justify-center">
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {ITEMS.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150  ${
                currentIndex === index
                  ? 'bg-primary-light-9 dark:bg-primary-dark-9'
                  : 'bg-primary-light-9/40 dark:bg-primary-dark-9/40'
              }`}
              animate={{ scale: currentIndex === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{
                duration: 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
