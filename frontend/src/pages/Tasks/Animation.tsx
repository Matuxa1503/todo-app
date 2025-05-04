import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  direction: 'left' | 'right';
}

export const Animation: FC<AnimationProps> = ({ children, direction }) => {
  return (
    <motion.div
      key={direction}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
