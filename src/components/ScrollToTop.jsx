import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > 250);
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{
            y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.88 }}
          aria-label="Scroll to top"
        >
          <svg className="scroll-progress-circle" width="52" height="52" viewBox="0 0 52 52">
            <circle
              className="scroll-circle-bg"
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              strokeWidth="2.5"
            />
            <circle
              className="scroll-circle-fill"
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              strokeWidth="2.8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="scroll-icon-wrap">
            <ChevronUp size={22} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
