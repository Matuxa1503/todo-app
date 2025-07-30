import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  typeAnimation: any;
  custom?: any;
}

export const Animation: FC<AnimationProps> = ({ children, typeAnimation, custom }) => {
  return (
    <motion.div custom={custom} variants={typeAnimation} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};
