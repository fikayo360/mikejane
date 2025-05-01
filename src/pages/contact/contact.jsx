import Nav from "../../components/nav/nav"
import NavMobile from "../../components/navMobile/navMobile"
import Footer from "../../components/footer/footer"
import './contact.css'
import { useState } from "react"
const Contact = () => {
    const [isNavActive, setIsNavActive] = useState(false)
        
    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }
    return (
        <>
        {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
        <Nav toggleNav={toggleNav}/>
        <div id="contactUs" className="flex justify-center">
        <section class="contact-page">
            <div class="contact-info">
                <div class="location-info">
                    <p>Wish to enquire about admissions, syllabus, or anything else?
                    You can walk in during office hours, give us a call or simply submit the form here.
                    We are located on a large expanse of land in a serene and conducive area in Agunfoye located in baiyeku ikorodu Lagos State.</p>
                </div>
                
                <div class="college-info">
                    <h2 class="college-name">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3L19.7 8.5 12 12.7 4.3 8.5 12 4.3zm-7 6.7l6 3v6.7l-6-3V11zm14 0v6.7l-6 3V14l6-3z"/>
                        </svg>
                        Mike jane academy
                    </h2>
                    <p class="college-address">Address: 31, derufe rd, Agunfoye Igbogbo, Ikorodu Lagos. Nigeria.</p>
                </div>
                
                <div class="contact-detail">
                    <div class="contact-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                    </div>
                    <div class="contact-text">
                        <h3>+234 8083425296</h3>
                        <p>Mon to Fri 8am to 4pm</p>
                    </div>
                </div>
                
                <div class="contact-detail">
                    <div class="contact-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <div class="contact-text">
                        <h3>mikejaneacademy@gmail.com</h3>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
{/*                 
                <p class="contact-website">www.lead-fortegatecollege.com</p> */}
            </div>
            
            <div class="divider"></div>
            
            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your name" required />
                    </div>
                    
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Enter your email address" required />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your subject" required />
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Message</label>
                        <textarea class="form-control" placeholder="Enter your message..." maxlength="180" id="message-input" required></textarea>
                        <div class="char-count">
                            <span id="current-chars">0</span> / <span>180</span>
                        </div>
                    </div>
                    
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </section>
        </div>
       
        <Footer />
        </>
    )
}

export default Contact