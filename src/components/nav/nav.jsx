import './nav.css'
import { Link } from 'react-router-dom'

const Nav = ({toggleNav}) => {

    return (
        <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">
                <a href="index.html">
                    <img src="./mikejane.png" alt="Mike jane Schools Logo" />
                </a>
            </div>
            
            <span className="hamburger justify-center items-center" src="blackBurger.png" onClick={toggleNav}> ☰ </span>
            
            <ul class="nav-menu gap-4" id="nav-menu">
                <li class="nav-item font-bold">
                    <Link to='/' class="nav-link">HOME</Link>
                </li>
                <li class="nav-item font-bold">
                    <Link to='/aboutUs' class="nav-link">ABOUT</Link>
                </li>
                <li class="nav-item font-bold has-dropdown">
                    <Link to='/admissions' class="nav-link dropdown-toggle">ADMISSION</Link>
                </li>
            
                <li class="nav-item font-bold">
                    <Link to='/articles' class="nav-link">BLOG</Link>
                </li>
                <li class="nav-item font-bold">
                    <Link to='/contactUs' class="nav-link">CONTACT</Link>
                </li>
                <li class="nav-item font-bold">
                    <Link to='/gallery' class="nav-link">Gallery</Link>
                </li>
            </ul>
            
            <div class="ncontact-info">
                <div>For More Inquiry</div>
                <div class="phone">+2348146366539</div>
            </div>
        </div>
    </nav>

    )
}

export default Nav     