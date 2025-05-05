import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  direction: 'left' | 'right';
}

export const Animation: FC<AnimationProps> = ({ children, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
