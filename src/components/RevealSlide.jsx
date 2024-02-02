import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const RevealSlide = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className="position:relative overflow:hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {children}
      </motion.div>

    </div>
  );
};

export default RevealSlide;
