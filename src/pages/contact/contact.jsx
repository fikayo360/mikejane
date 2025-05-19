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
      const [showSuccess, setShowSuccess] = useState(true);

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

    const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    // Map the HTML id to the corresponding state property
    const fieldMapping = {
      'name': 'name',
      'email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateKey = fieldMapping[id];
    
    setFormData({
      ...formData,
      [stateKey]: value
    });
  };

// Function to log all form values to console
const logFormData = () => {
console.log('Form Data:', formData);
};

 // Function to send data to WhatsApp
  const sendToWhatsApp = () => {
    const message = `
    *New contact inquiry for Mikejane School*

    *Student Information:*
    - Name: ${formData.name}
    - email: ${formData.email}
    - subject: ${formData.subject}
    - message:${formData.message}
    `.trim();
    
    const phoneNumber = "2349131786864";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    setShowSuccess(true);

    setTimeout(()=>{
        setShowSuccess(false)
        setFormData({
             name: '',
            email: '',
            subject: '',
            message: ''
        })
    },1000)

    setTimeout(() => {
    window.open(whatsappURL, '_blank');
    }, 1500);
  };

    const handleSubmit = (e) => {
    e.preventDefault(); 
    sendToWhatsApp();
    };

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
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" required value={formData.name}  onChange={handleInputChange} />
                    </div>
                    
                    <div class="form-group">
                        <input type="email" class="form-control" id='email' placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" class="form-control" id='subject' placeholder="Enter your subject" required value={formData.subject} onChange={handleInputChange}  />
                    </div>
                    
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Enter your message..." id='message' maxlength="180" required value={formData.message} onChange={handleInputChange} ></textarea>
                        <div class="char-count">
                            <span id="current-chars">0</span> / <span>180</span>
                        </div>
                    </div>
                    
                    <button type="submit" class="submit-btn">{showSuccess?'done':'submit'}</button>
                </form>
            </div>
        </section>
        </div>
       
        <Footer />
        </>
    )
}

export default Contact