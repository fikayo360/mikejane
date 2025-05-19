import { motion, AnimatePresence,useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import './hero.css'

const slides = [
    {
      title: "Welcome to Mike Jane Academy",
      subtitle: "A school where the next generaion of leaders are made",
      image: "./heromj1.jpg",
    },
    {
      title: "Our mission",
      subtitle: "Our mission at Mike-Jane school is to impact positive in the young minds in their formative years the orientation for academic excellence and aspirations for self-worth with moral values in achieving generation and global relevance",
      image: "./heromj3.jpg",
    }
  ]

  const HeroSlider = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 7000);
      return () => clearInterval(interval);
    }, []);
  
    const slide = slides[index];

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
  };

    return (
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity:1 }}
            transition={{ duration: 3 }}
          >
            <div className="slide-content flex flex-col justify-center items-center" ref={ref}>
              <motion.h1 variants={headingVariants} initial="hidden" animate={controls}>{slide.title}</motion.h1>
              <motion.p  variants={subheadingVariants} initial="hidden" animate={controls}>{slide.subtitle}</motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }


export default HeroSlider