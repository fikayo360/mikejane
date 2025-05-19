import './admission.css'
import Nav from '../../components/nav/nav'
import NavMobile from '../../components/navMobile/navMobile'
import Footer from '../../components/footer/footer'
import { useState } from 'react'

const Admission = () => {
    const [isNavActive, setIsNavActive] = useState(false)
    const [showSuccess, setShowSuccess] = useState(true);
    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

    const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    class: '',
    address: '',
    phone: '',
    why: '',
    email: '',
    date: ''
  });

    const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    // Map the HTML id to the corresponding state property
    const fieldMapping = {
      'first-name': 'firstName',
      'middle-name': 'middleName',
      'last-name': 'lastName',
      'dob': 'dob',
      'class': 'class',
      'address': 'address',
      'phone': 'phone',
      'why': 'why',
      'email': 'email',
      'date': 'date'
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
    *New Admission Inquiry for Mikejane School*

    *Student Information:*
    - Name: ${formData.firstName} ${formData.middleName ? formData.middleName + ' ' : ''}${formData.lastName}
    - Date of Birth: ${formData.dob}
    - Class Seeking: ${formData.class}

    *Contact Information:*
    - Address: ${formData.address}
    - Phone: ${formData.phone}
    - Email: ${formData.email}

    *Additional Information:*
    - Reason for Interest: ${formData.why}
    - Submission Date: ${formData.date}
    `.trim();
    
    const phoneNumber = "2349131786864";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    setShowSuccess(true);

    setTimeout(()=>{
        setShowSuccess(false)
        setFormData({
             firstName: '',
            middleName: '',
            lastName: '',
            dob: '',
            class: '',
            address: '',
            phone: '',
            why: '',
            email: '',
            date: ''
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
            <div id='admission' >
            <section class="admission-section">
               
                <h1 class="adsection-title">ADMISSION PROCEDURE</h1>
                
                <div class="adsubsection">
                    <p>Admission is strictly by merit, without bias of sex, religion, ethnic or cultural background. 
                        Entry age into our early years is 18 months, Elementary (year 1) is from 5 years and High School (year 7) at
                         least 10 years old as at December 31st of the admission year. The procedure is as follow:
                    </p>
                </div>
                
                <div class="adsubsection">
                    <h3 class="adsubsection-title">Elementary</h3>
                    <p>A qualifying test may be given to the child to determine their proper placement. The child will undergo both written and oral tests of subjects offered in the class in which admission is sought.</p>
                </div>
                
                <div class="adsubsection">
                    <h3 class="adsubsection-title">High School</h3>
                    <p>All prospective pupils must write an entrance examination into the mikejane High School. Once the exam has been passed, parents will be notified.</p>
                    <ul>
                        <li>An interview is conducted for successful candidates and their parents.</li>
                        <li>A letter of offer of admission is issued and acceptance of offer is communicated through the payment of acceptance fees.</li>
                    </ul>
                </div>
                
                <div class="adsubsection">
                    <h3 class="adsubsection-title">Registration</h3>
                    <p>Admission form and prospectus can be obtained from the school's administrative office for a fee.</p>
                </div>

                <div class="adsubsection">
                    <h3 class="adsubsection-title">High School</h3>
                    <p>All prospective pupils must write an entrance examination into the mikejane High School. Once the exam has been passed, parents will be notified.</p>
                    <ul>
                        <li>An interview is conducted for successful candidates and their parents.</li>
                        <li>A letter of offer of admission is issued and acceptance of offer is communicated through the payment of acceptance fees.</li>
                    </ul>
                </div>
            </section> 


            <section class="application-form-container">
            <h2 class="form-title">APPLICATION FORM</h2>
            
            <form action="#" method="post" onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" >First Name</label>
                        <input type="text" class="form-control" id="first-name" placeholder="First name..."   value={formData.firstName}  onChange={handleInputChange} />
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" >Middle Name (Optional)</label>
                        <input type="text" class="form-control" id="middle-name" placeholder="Middle Name..." required  value={formData.middleName}  onChange={handleInputChange}/>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" >Last Name</label>
                        <input type="text" class="form-control" id="last-name" placeholder="Last Name" required  value={formData.lastName} onChange={handleInputChange} />
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Date of Birth</label>
                        <div class="date-input">
                            <input type="date" class="form-control" id="dob" placeholder="mm/dd/yyyy" required value={formData.dob} onChange={handleInputChange}/>
                            <div class="date-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" >Class Seeking Admission</label>
                        <div class="select-control">
                            <select class="form-control" id="class" required   value={formData.class} onChange={handleInputChange}>
                                <option value="" disabled selected>select preferable class</option>
                                <option value="nursery">Nursery</option>
                                <option value="kindergarten">Kindergarten</option>
                                <option value="elementary1">Elementary 1</option>
                                <option value="elementary2">Elementary 2</option>
                                <option value="elementary3">Elementary 3</option>
                                <option value="elementary4">Elementary 4</option>
                                <option value="elementary5">Elementary 5</option>
                                <option value="elementary6">Elementary 6</option>
                                <option value="jss1">JSS 1</option>
                                <option value="jss2">JSS 2</option>
                                <option value="jss3">JSS 3</option>
                                <option value="ss1">SS 1</option>
                                <option value="ss2">SS 2</option>
                                <option value="ss3">SS 3</option>
                            </select>
                            <div class="select-arrow"></div>
                        </div>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" >Residential Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Residence..." required value={formData.address} onChange={handleInputChange} />
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" >Phone</label>
                        <input type="tel" class="form-control" id="phone" placeholder="Phone Number (WhatsApp enabled)..." required value={formData.phone} onChange={handleInputChange}/>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" >Why are you considering Mikejane School as an option</label>
                        <textarea class="form-control" id="why" placeholder="What's on your mind" required value={formData.why} onChange={handleInputChange}></textarea>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" >Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email address..." required   value={formData.email} onChange={handleInputChange}/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" >Date</label>
                        <div class="date-input">
                            <input type="date" class="form-control" id="date" placeholder="mm/dd/yyyy" required  value={formData.date} onChange={handleInputChange} />
                            <div class="date-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="submit-btn" >{showSuccess?'done':'submit'}</button>
            </form>
            </section>
        </div>

        
            <Footer />
        </>
    )
}

export default Admission