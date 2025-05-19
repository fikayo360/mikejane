import React, { useState } from 'react';
import './employment.css';
import Nav from '../../components/nav/nav';
import NavMobile from '../../components/navMobile/navMobile';
import Footer from '../../components/footer/footer';
const EmploymentForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    othernames: '',
    gender: '',
    yearOfBirth: '2007',
    email: '',
    phoneNumber: '',
    jobtype: 'Any job',
    discipline: '',
    highestDegree: '',
    classOfDegree: '',
    completedNYSC: 'Yes',
    certifications: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['surname', 'gender', 'yearOfBirth', 'email', 'phoneNumber', 'jobtype', 'discipline', 'highestDegree', 'classOfDegree', 'completedNYSC'];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone number validation
    if (formData.phoneNumber && !/^\d{11}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Prepare WhatsApp message
      const whatsappNumber = '2349131786864'; // From the header
      const message = encodeURIComponent(`
        Job Application Details :
        Surname: ${formData.surname}
        Other Names: ${formData.othernames}
        Gender: ${formData.gender}
        Year of Birth: ${formData.yearOfBirth}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Job Type: ${formData.jobtype}
        Discipline: ${formData.discipline}
        Highest Degree: ${formData.highestDegree}
        Class of Degree: ${formData.classOfDegree}
        NYSC Completed: ${formData.completedNYSC}
        Certifications: ${formData.certifications}
        `);
      
      // For demonstration purposes, create WhatsApp link
      // In a real implementation, you would typically send this data to a server
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

      setShowSuccess(true);
      setTimeout(()=>{
        setShowSuccess(false)
        setFormData({
            surname: '',
            othernames: '',
            gender: '',
            yearOfBirth: '2007',
            email: '',
            phoneNumber: '',
            jobtype: 'Any job',
            discipline: '',
            highestDegree: '',
            classOfDegree: '',
            completedNYSC: 'Yes',
            certifications: '',
        })
    },1000)

     setTimeout(() => {
      // Open WhatsApp link in a new tab
      window.open(whatsappLink, '_blank');
    }, 1500);

    }
  };

  const birthYears = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 60; year <= currentYear - 15; year++) {
    birthYears.push(year);
  }

const [isNavActive, setIsNavActive] = useState(false)
    
const toggleNav = () => {
    setIsNavActive((prev) => !prev)
}
  return (
    <>
     {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
     <Nav toggleNav={toggleNav}/>
    <div className="employment-form-container">
      <div className="form-header">
        <h1>COMPLETE forms below to apply yo mike jane:</h1>
        <p className="form-note">NOTE: FIELDS MARKED WITH AN ASTERISK <span className="required">*</span> ARE REQUIRED. On submit your details will be submitted
         through whatsapp. Once in whatsapp pls attach your cv to the message.</p>
        <div className="divider"></div>
      </div>

      <form onSubmit={handleSubmit} className="employment-form">
        <div className="form-group">
          <label htmlFor="surname">
            <span className="required">*</span>Surname
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            className={formErrors.surname ? 'error' : ''}
          />
          {formErrors.surname && <div className="error-message">{formErrors.surname}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="othernames">Othernames</label>
          <input
            type="text"
            id="othernames"
            name="othernames"
            value={formData.othernames}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">
            <span className="required">*</span>Gender
          </label>
          <div className="gender-options">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
              />
              Female
            </label>
          </div>
          {formErrors.gender && <div className="error-message">{formErrors.gender}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="yearOfBirth">
            <span className="required">*</span>Year of Birth
          </label>
          <select
            id="yearOfBirth"
            name="yearOfBirth"
            value={formData.yearOfBirth}
            onChange={handleInputChange}
            className={formErrors.yearOfBirth ? 'error' : ''}
          >
            {birthYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {formErrors.yearOfBirth && <div className="error-message">{formErrors.yearOfBirth}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <span className="required">*</span>Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={formErrors.email ? 'error' : ''}
          />
          {formErrors.email && <div className="error-message">{formErrors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">
            <span className="required">*</span>Phone number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={formErrors.phoneNumber ? 'error' : ''}
          />
          {formErrors.phoneNumber && <div className="error-message">{formErrors.phoneNumber}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="jobtype">
            <span className="required">*</span>Jobtype
          </label>
          <select
            id="jobtype"
            name="jobtype"
            value={formData.jobtype}
            onChange={handleInputChange}
            className={formErrors.jobtype ? 'error' : ''}
          >
            <option value="Any job">Any job</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          {formErrors.jobtype && <div className="error-message">{formErrors.jobtype}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="discipline">
            <span className="required">*</span>Discipline
          </label>
          <input
            type="text"
            id="discipline"
            name="discipline"
            value={formData.discipline}
            onChange={handleInputChange}
            className={formErrors.discipline ? 'error' : ''}
          />
          {formErrors.discipline && <div className="error-message">{formErrors.discipline}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="highestDegree">
            <span className="required">*</span>Highest degree obtained
          </label>
          <select
            id="highestDegree"
            name="highestDegree"
            value={formData.highestDegree}
            onChange={handleInputChange}
            className={formErrors.highestDegree ? 'error' : ''}
          >
            <option value="">Choose Degree</option>
            <option value="Secondary School">Secondary School</option>
            <option value="OND">OND</option>
            <option value="HND">HND</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
          {formErrors.highestDegree && <div className="error-message">{formErrors.highestDegree}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="classOfDegree">
            <span className="required">*</span>Class of degree
          </label>
          <select
            id="classOfDegree"
            name="classOfDegree"
            value={formData.classOfDegree}
            onChange={handleInputChange}
            className={formErrors.classOfDegree ? 'error' : ''}
          >
            <option value="">Choose Class</option>
            <option value="First Class">First Class</option>
            <option value="Second Class Upper">Second Class Upper</option>
            <option value="Second Class Lower">Second Class Lower</option>
            <option value="Third Class">Third Class</option>
            <option value="Pass">Pass</option>
            <option value="N/A">Not Applicable</option>
          </select>
          {formErrors.classOfDegree && <div className="error-message">{formErrors.classOfDegree}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="completedNYSC">
            <span className="required">*</span>Have you completed NYSC
          </label>
          <select
            id="completedNYSC"
            name="completedNYSC"
            value={formData.completedNYSC}
            onChange={handleInputChange}
            className={formErrors.completedNYSC ? 'error' : ''}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Exempted">Exempted</option>
            <option value="In Progress">In Progress</option>
          </select>
          {formErrors.completedNYSC && <div className="error-message">{formErrors.completedNYSC}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="certifications">Professional Certification(s)</label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">{showSuccess?'done':'submit'}</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default EmploymentForm