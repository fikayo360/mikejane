import './navMobile.css'
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import { Link } from 'react-router-dom'
const NavMobile = ({toggleNav}) => {
     const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div id='mobileWrap'>
     
        <div className={`sidebar flex flex-col items-center ${theme === 'dark'?'drkSide':''}`}>
        <div className="sideHeader flex justify-between items-center">
            <img src="mikejane.png" alt="mike jane School Logo" id='sideLogo' />
            <img src="xblack.png" className="mobile-toggle" id="sideClose" onClick={toggleNav} />
        </div>
        
        <ul className="mnav-menu flex flex-col justify-start">
            <li className="mnav-item">
                <Link to='/' className="mnav-link">HOME</Link>
            </li>
            <li className="mnav-item">
                <Link to='/aboutUs' className="mnav-link">ABOUT</Link>
            </li>
            <li className="mnav-item">
                <Link to='/admissions' className="mnav-link">ADMISSION
                </Link>
            </li>
            <li className="mnav-item">
                <Link to='/articles' className="mnav-link">ARTICLES
                </Link>
            </li>

              <li className="mnav-item">
                <Link to='/employment' className="mnav-link">Hiring
                </Link>
            </li>

              <li className="mnav-item">
                <Link to='/download' className="mnav-link">Documents
                </Link>
            </li>
           
            <li className="mnav-item">
                <Link to='/contactUs' className="mnav-link">contact</Link>
            </li>
            <li className="mnav-item">
                <Link to='/gallery' className="mnav-link">gallery</Link>
            </li>
        </ul>

        <button className='nmToggleBtn' onClick={toggleTheme}>
                 {
                    theme === 'dark'? <img src='day.png' className='mtoggleImages' onClick={toggleTheme} />:<img src='night.png' className='mtoggleImages' onClick={toggleTheme}/>
                }  toggletheme</button>
        
        <div className="nMcontact-info">
            <p>For More Inquiry</p>
            <div className="phone">
                <span>+234 8083425296</span>
            </div>
        </div>
    </div>
           
    </div>
    )
}

export default NavMobile