import './about.css'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/footer'
import NavMobile from '../../components/navMobile/navMobile'
import { useState } from 'react'
const About = () => {
     const [isNavActive, setIsNavActive] = useState(false)
    
        const toggleNav = () => {
            setIsNavActive((prev) => !prev)
        }
    return (
        <>
         {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
        <Nav toggleNav={toggleNav}/>
        <div id='aboutUs'>
        <section class="about-section">
            <div class="about-text">
            <h3>~ About Us ~</h3>
            <h2>Let's know About Our Journey In Mikejane</h2>
            <p>We, at Mike-Jane School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. 
            Our passion for learning means we achieve more than outstanding results.</p>
            <p>
            We strive to build confident and creative thinkers and aim at delivering an education 
            that is truly relevant to their future.
            </p>
             <p>
             We are an early learning academy focused on social-emotional development and early literacy and numeracy.
                 Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that 
                 take them way ahead in the industry they may serve.
             </p>

             <p>
             We firmly believe in providing a progressive educational experience that offers both parents and pupils stability and continuity,
            eliminating the need for frequent school changes. From our humble beginnings in the heart of Ikorodu, Agunfoye, 
             MikeJane Schools has expanded significantly and proudly established a state-of-the-art secondary school campus in the same area.
             </p>
         
            </div>
            <div class="about-image">
            <img src="https://schoolscompass.com.ng/blog/wp-content/uploads/2021/03/charis.png" alt="mikejane Building" />
            <div class="badge">12 Years of operation</div>
            </div>
        </section>

        <section class="heads-section">
        <h3>~ Board ~</h3>
        <h2>Meet Our Heads</h2>
        <div class="heads-grid">

        <div class="head-card">
        <img src="https://resilienteducator.com/wp-content/uploads/2012/10/educational-supervisor.jpg" alt="Mr. Peter O. Agesse" />
        <div class="head-content">
          <div class="head-name">Mr. Peter O. Agesse</div>
          <div class="head-title">Head Of Elementary</div>
          <p class="head-description">Mr. Peter O. Agesse serves as the Head of Elementary School at Bloffville. He is a dedicated and qualified educator, holding a degree in Business Administration from the prestigious Tai Solarin University of Education, with a B.Sc. in Education. With extensive experience in primary education, Mr. Agesse advocates for a student-centered approach, emphasizing inquiry-based learning and discovery.<br/><br/>Known for his innovative teaching methods, Mr. Agesse fosters an environment of continuous improvement and growth. He is a visionary leader with a keen ability for strategic planning and implementation. Committed to professional development, he actively participates in various training programs, workshops, and...</p>
        </div>
      </div>

      <div class="head-card">
        <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/media/images/Blog/teaching-school-administration/femaleschooladministrator.jpg" alt="Mrs. Ijeoma A. Okenwa-Fadele" />
        <div class="head-content">
          <div class="head-name">Mrs. Ijeoma A. Okenwa-Fadele</div>
          <div class="head-title">Head Of Secondary</div>
          <p class="head-description">
            Mrs. Ijeoma A. Okenwa-Fadele, BSc, PGDE, M.Ed (UNILAG), CIPM, serves as the Principal of Bloffville High School. With over 15 years of experience spanning secondary and tertiary education, Mrs. Okenwa-Fadele is a seasoned and highly qualified educator.<br/><br/>
            Her expertise lies in subjects such as Computer Studies and Data Processing, complemented by her proficiency in Data Analysis, Educational Measurement and Evaluation, Educational Psychology, and Research Methodologies.<br/><br/>
            An eloquent speaker and proficient trainer, Mrs. Okenwa-Fadele brings a wealth of knowledge and experience to her role. She has served as an examiner for external examination bodies, further enhancing her understanding of educational standards and...</p>
        </div>
      </div>
    </div>
    </section>

    <section class="principles-section">
    <h3>~ Our Principles ~</h3>
    <h2>Our Mission, Vision and Core Values</h2>

    <div class="principles-grid">
      
      <div class="principle-box">
        <div class="principle-label">Mission</div>
        <div class="principle-title">Our Mission</div>
        <div class="principle-text">
        Our mission at Mike-Jane school is to impact positive in the young minds in their formative years the orientation for academic excellence 
        and aspirations for self-worth with moral values in achieving generation and global relevance
        </div>
      </div>

     
      <div class="principle-box">
        <div class="principle-label">Vision</div>
        <div class="principle-title">Our Vision</div>
        <div class="principle-text">
        Achieve excellence through effective learning process with integrity
        Become independent and responsible global citizen
        </div>
      </div>

     
      <div class="principle-box">
        <div class="principle-label">Values</div>
        <div class="principle-title">Our Core Values</div>
        <div class="principle-text">
        Achieve excellence through effective learning process with integrity
        Become independent and responsible global citizen
        </div>
        <div class="principle-text">
          Mike-Jane Academy is a private school founded on a sound and consistent Godly and moral value. It is born out of the visions to provide an opportunity that will introduce children to the physical, social and the spiritual world of knowledge 
          for dignity and power to fulfill destiny. The school curriculum is also designed to effect the total development of each child.
          <strong>Character:</strong> We uphold the importance of integrity, responsibility, and ethical behavior in all aspects of education and personal development.
          <strong>Knowledge:</strong> We are committed to promoting a culture of continuous learning, curiosity, and intellectual exploration among our students and staff.
          <strong>Integrity:</strong> We prioritize honesty, transparency, and accountability in our interactions and decision-making processes.
          <strong>Discipline:</strong> We instill discipline as a fundamental principle for personal growth, achievement, and success, fostering a culture of self-control and responsibility.
        </div>
      </div>
    </div>
  </section>

        </div>
        <Footer />
        </>
    )
}

export default About