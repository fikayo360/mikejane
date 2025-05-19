
import Home from './pages/home/home'
import About from './pages/about/about'
import Admission from './pages/admissions/admission'
import Blogs from './pages/blogs/blog'
import Contact from './pages/contact/contact'
import Gallery from './pages/gallery/gallery'
import Download from './pages/download/download'
import EmploymentForm from './pages/employment/employment'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'

function App() {
  const [isNavActive, setIsNavActive] = useState(false)

  const toggleNav = () => {
      setIsNavActive((prev) => !prev)
  }
  
  return (
    <>
      <Routes>
          <Route path='/' Component={Home} isNavActive={isNavActive} toggleNav={toggleNav}/>
          <Route path='/aboutUs' Component={About}/>
          <Route path='/admissions' Component={Admission} />
          <Route path='/articles' Component={Blogs}/>
          <Route path='/contactUs' Component={Contact} />
          <Route path='/gallery' Component={Gallery} />
          <Route path='/download' Component={Download} />
          <Route path='/employment' Component={EmploymentForm} />
      </Routes>
    </>
  )
}

export default App
