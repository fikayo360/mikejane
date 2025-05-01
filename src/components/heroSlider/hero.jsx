import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  
    return (
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})`,backgroundColor:'rgb(8, 33, 85)',backgroundBlendMode:'luminosity' }}
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 4 }}
          >
            <div className="slide-content flex flex-col justify-center items-center">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }


export default HeroSlider