import Nav from "../../components/nav/nav"
import NavMobile from "../../components/navMobile/navMobile"
import Footer from "../../components/footer/footer"
import HeroSlider from "../../components/heroSlider/hero"
import { facilities } from "../../data/facilities"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import './home.css'

const Home = () => {
    const [isNavActive, setIsNavActive] = useState(false)

    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

  const textControls = useAnimation();
  const [textRef, textInView] = useInView({
    triggerOnce:false,
    threshold: 0.2,
  });

  // Controls for image
  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Start animations when elements come into view
  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
    if (imageInView) {
      imageControls.start('visible');
    }
  }, [textControls, textInView, imageControls, imageInView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

    return (
        <>
         {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
        <div id="home">
           
            <Nav toggleNav={toggleNav}/>
            <HeroSlider />

            <section class="about-us">
            <motion.div class="about-content" ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={textVariants} 
            >
                <span class="asection-subtitle">About Us</span>
                <h2 class="asection-title">
                Let's share the story of our journey at mike jane academy.
                </h2>
                <div class="about-icons">
                <div class="icon-item">
                    <img src="mikejane.png" alt="School Icon" />
                    <span>Mikejaneschools</span>
                </div>
              
                </div>
                <p class="about-description">
                We, at Mike-Jane School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. 
                Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education 
                that is truly relevant to their future.
                We are an early learning academy focused on social-emotional development and early literacy and numeracy.
                 Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that 
                 take them way ahead in the industry they may serve.
                </p>
                <Link to='/aboutUs' class="aboutcta-button">Read more</Link>
                <div class="about-stats">
                <strong>1,000+</strong> <small>Students</small>
                </div>
            </motion.div>

            <motion.div class="about-image" ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}>
                <img src="https://bloffvilleschools.org/assets/img/girl.jpg" alt="Student Image" />
            </motion.div>
           </section>

           <section class="why-bloffville">
            <motion.div class="why-content" 
        ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}>
                <span class="wsection-subtitle">Our Services</span>
                <h2 class="wsection-title">Why Mike Jane School?</h2>
                <p class="why-description">
                Mikejane School is a dynamic and thriving educational institution
                renowned for its strong educational programs in Nigeria. Our dedicated
                support team ensures...
                </p>
                <ul class="why-features">
                <li>Student Support</li>
                <li>Our Campus</li>
                <li>Equality & Diversity</li>
                <li>Facilities & Technology</li>
                <li>Extra-Curricular Activities</li>
                <li>Leadership & Mentoring</li>
                </ul>
            </motion.div>
            <motion.div class="why-image"
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}>
                <img src="/why.jpg" alt="Students at Bloffville" />
            </motion.div>
            </section>

            <section className="facilities-container flex flex-col items-center">

                <h2>Top Facilities</h2>

                <div className="facilities-grid">
                    {facilities.map((facility, index) => (
                    <div className="facility-card flex flex-col" key={index}>
                        <img src={facility.img}/>
                        <h3>{facility.title}</h3>
                        <p>{facility.description}</p>
                    </div>
                    ))}
                </div>
                </section>

                <section class="takeatour">
                
                <h1 class="tourheading">Some of Our Profound Memories</h1>
                
                <div class="hgallery-grid">
                    
                    <div class="hgallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal1.jpg" alt="Student with decorated frame" />
                    </div>
                    
                    <div class="hgallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal.jpg" alt="Students in science lab experiment" />
                    </div>
                    
                    <div class="hgallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/outdoor.jpg" alt="Students playing in classroom" />
                    </div>
                    
                    <div class="hgallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/art.jpg" alt="Students in chemistry lab" />
                    </div>
                    
                    <div class="hgallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>
                    
                    <div class="tourcta-section">
                        <h2 class="tourcta-heading">Want to share in our moments</h2>
                        <Link to='/gallery' class="cta-button">Gallery</Link>
                    </div>
                </div>
            </section>

        <section class="eventsContainer">
        
        <h1 class="eheading">Take a Look at Our Past Events</h1>
        
        <div class="events-grid">
          
            <div class="event-card">
                <div class="event-image">
                    <img src="https://bloffvilleschools.org/assets/img/art.jpg" alt="World Water Day" />
                    <div class="event-time">12:00AM - 11:00PM</div>
                    <div class="event-location">
                        <span class="location-icon"></span>
                        AUDITORIUM + FIRST FLOOR
                    </div>
                </div>
                <div class="event-content">
                    <h2 class="event-title">WORLD WATER DAY</h2>
                    <p class="event-description">World Water Day is a global celebration of water and raises awareness of the 2.2 billion people living...</p>
                    <hr />
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
            
          
            <div class="event-card">
                <div class="event-image">
                    <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Common Wealth Day" />
                    <div class="event-time">12:00AM - 11:00PM</div>
                    <div class="event-location">
                        <span class="location-icon"></span>
                        MAIN HALL + FIRST FLOOR
                    </div>
                </div>
                <div class="event-content">
                    <h2 class="event-title">COMMON WEALTH DAY</h2>
                    <p class="event-description">Commonwealth Day is a global celebration in honor of the Commonwealth of Nations, a political association of 56...</p>
                    <hr />
                    <Link to='/articles' class="read-more">Read more</Link>
                </div>
            </div>
            
        
            <div class="event-card">
                <div class="event-image">
                    <img src="https://bloffvilleschools.org/assets/img/gal1.jpg" alt="Language & Art Day" />
                    <div class="event-time">12:00AM - 11:00PM</div>
                    <div class="event-location">
                        <span class="location-icon"></span>
                        AUDITORIUM + GROUND FLOOR
                    </div>
                </div>
                <div class="event-content">
                    <h2 class="event-title">LANGUAGE & ART DAY</h2>
                    <p class="event-description">At Blofville students study the language & arts in order to function in their communities and cultures: to...</p>
                    <hr />
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        </div>
    </section>

    <section class="enrollment-cta">
        <div class="cta-container">
            <h2 class="cta-text">Do you want to enroll at Mike jane schools?</h2>
            <Link to='/admissions' class="cta-button">Apply here</Link>
        </div>
    </section>


            <Footer />

        </div>
        </>
    )
}

export default Home