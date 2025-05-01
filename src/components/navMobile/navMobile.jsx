import './navMobile.css'
import { Link } from 'react-router-dom'
const NavMobile = ({toggleNav}) => {
    return (
        <div id='mobileWrap'>
     
        <div className="sidebar flex flex-col items-center">
        <div className="sideHeader flex justify-between items-center">
            <img src="mikejane.png" alt="mike jane School Logo" id='sideLogo' />
            <img src="xblack.png" className="mobile-toggle" id="sideClose" onClick={toggleNav} />
        </div>
        
        <ul className="mnav-menu flex flex-col">
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
                <Link to='/contactUs' className="mnav-link">contact</Link>
            </li>
            <li className="mnav-item">
                <Link to='/gallery' className="mnav-link">gallery</Link>
            </li>
        </ul>
        
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