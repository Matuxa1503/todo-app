import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  typeAnimation: any;
  custom?: any;
  tag?: string;
}

export const Animation: FC<AnimationProps> = ({ children, typeAnimation, custom, tag = 'div' }) => {
  const MotionTag = motion.create(tag);

  return (
    <MotionTag custom={custom} variants={typeAnimation} initial="initial" animate="animate" exit="exit">
      {children}
    </MotionTag>
  );
};
