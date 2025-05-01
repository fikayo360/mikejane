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
                        <img src="https://bloffvilleschools.org/assets/img/gal.jpg" alt="Students in science lab experiment" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/outdoor.jpg" alt="Students playing in classroom" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/art.jpg" alt="Students in chemistry lab" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>
                    
                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>

                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>

                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>

                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>

                    <div class="gallery-item">
                        <img src="https://bloffvilleschools.org/assets/img/gal2.jpg" alt="Students playing in schoolyard" />
                    </div>
                   
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Gallery