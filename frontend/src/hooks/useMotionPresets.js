const useMotionPresets = () => {
  const viewport = { once: true, amount: 0.2 };

  const easing = [0.22, 1, 0.36, 1];

  const fadeInUp = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.7, ease: easing },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -42 },
    whileInView: { opacity: 1, x: 0 },
    viewport,
    transition: { duration: 0.7, ease: easing },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 42 },
    whileInView: { opacity: 1, x: 0 },
    viewport,
    transition: { duration: 0.7, ease: easing },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easing },
    },
  };

  const cardHover = {
    y: -8,
    scale: 1.015,
    transition: { duration: 0.25, ease: 'easeOut' },
  };

  const chipHover = {
    y: -3,
    scale: 1.04,
    transition: { duration: 0.22, ease: 'easeOut' },
  };

  const modalOverlay = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };

  const modalContent = {
    initial: { opacity: 0, scale: 0.92, y: 12 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 6 },
    transition: { duration: 0.26, ease: easing },
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    cardHover,
    chipHover,
    modalOverlay,
    modalContent,
  };
};

export default useMotionPresets;
