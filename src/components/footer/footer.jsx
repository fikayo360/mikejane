import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="footer">
        <div class="footer-container">
        <div class="footer-about">
        <img src="mikejane.png" alt="Seaba Logo" class="footer-logo" />
        <p>
        We, at Mike-Jane School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our passion for
        learning means we achieve more than outstanding results. We strive to build confident and creative 
        thinkers and aim at delivering an education that is truly relevant to their future.
        </p>
        <a href="#" class="see-more-btn">See More</a>
        </div>

        <div class="footer-links">
        <h3>QUICK LINKS</h3>
        <ul>
        <li class="">
                    <Link to='/'>HOME</Link>
                </li>
                <li class="">
                    <Link to='/aboutUs'>ABOUT</Link>
                </li>
                <li class="">
                    <Link to='/admissions'>ADMISSION</Link>
                </li>
            
                <li class="">
                    <Link to='/articles'>BLOG</Link>
                </li>
                <li class="">
                    <Link to='/contactUs' >CONTACT</Link>
                </li>
                <li class="">
                    <Link to='/gallery' >Gallery</Link>
                </li>
       </ul>
       </div>

       <div class="footer-contact">
      <h3>CONTACT</h3>
      <p>31, derufe rd, Agunfoye <br/>Igbogbo, Ikorodu Lagos. Nigeria.</p>
      <p>+2348083425296</p>
      <p><a href="mailto:myseabaschool@gmail.com">mikejaneacademy@gmail.com
      </a><br/>
      </p>
      </div>

      <div class="footer-links">
        <h3>SOCIAL LINKS</h3>
        <ul>
        <li><a href="#">FACEBOOK</a></li>
        <li><a href="#">TWITTER</a></li>
        <li><a href="#">INSTAGRAM</a></li>
        <li><a href="#">WHATSAPPP</a></li>
        <li><a href="#">LINKEDIN</a></li>
       </ul>
       </div>

        
      </div>
        <div class="footer-bottom">
            <p>Copyright © 2025 www.mikejaneschools.com All rights reserved | krafted by <a href='https://krafters.netlify.app/'>the Krafters</a></p>
        </div>
        </div>
    )
}

export default Footer