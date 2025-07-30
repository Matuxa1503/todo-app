export const animations = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 2 },
    },
  },

  shift: {
    initial: (custom: 'left' | 'right') => ({
      opacity: 0,
      x: custom === 'left' ? 100 : -100,
    }),

    animate: {
      opacity: 1,
      x: 0,
    },

    exit: (custom: 'left' | 'right') => ({
      opacity: 0,
      x: custom === 'left' ? 100 : -100,
    }),
  },
};
