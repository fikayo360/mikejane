import './gallery.css'
import Nav from "../../components/nav/nav"
import NavMobile from '../../components/navMobile/navMobile'
import Footer from "../../components/footer/footer"
import { useState } from 'react'

const Gallery = () => {
    const [isNavActive, setIsNavActive] = useState(false)
            
    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }
    return (
        <>
        {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
        <Nav toggleNav={toggleNav}/>
        
        <section class="galleryContainer flex justify-center items-center gap-1 flex-col">
                
                <h1 class="heading">Some of Our Profound Memories</h1>
                
                <div class="gallery-grid">
                    
                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal1.jpg" alt="Student with decorated frame" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://media.premiumtimesng.com/wp-content/files/2020/07/A-Public-School.jpg" alt="Students in science lab experiment" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2023/10/51C8E44A-6F0C-4E41-98A8-A0BBDAF2AD11.webp" alt="Students playing in classroom" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/art.jpg" alt="Students in chemistry lab" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://cdn.legit.ng/images/1120/vllkyt1t2okf5240k.jpeg?v=1" alt="Students playing in schoolyard" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2023/10/01A1F940-CAD2-42D8-89E6-020F2223ABDF.jpeg" alt="Students playing in schoolyard" />
                    </div>

                    <div class="gallery-item">
                        <img src="https://www.nairaland.com/attachments/9765898_nigerianstudents2_jpeg2b3e3099f6aca8a644e1bf373a0e268f" alt="Students playing in schoolyard" />
                    </div>

                    <div class="gallery-item">
                        <img src="https://s7d1.scene7.com/is/image/wbcollab/Students-participate-in-an-AI-after-school-program-in-Edo-Nigeria-2?qlt=90&fmt=webp&resMode=sharp2" alt="Students playing in schoolyard" />
                    </div>

                   
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Gallery