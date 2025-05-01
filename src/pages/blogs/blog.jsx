import './blog.css'
import { useState } from 'react'
import Nav from '../../components/nav/nav'
import NavMobile from '../../components/navMobile/navMobile'

const Blogs = () => {
    const [isNavActive, setIsNavActive] = useState(false)
            
    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

    return (
        <>
         {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
         <Nav toggleNav={toggleNav}/>
            <div id="blogs" className="flex justify-center items-center">
                <h1>
                    Articles coming soon 
                </h1>
            </div>  
        </>
    )
}

export default Blogs