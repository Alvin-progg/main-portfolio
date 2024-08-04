
import React , {useRef} from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import Projects from './components/Projects'

const App = () => {

  const homeRef = useRef(null);
  const aboutRef= useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <Navbar       
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
    />
    <Home ref={homeRef} />
    <About  ref={aboutRef}/>
    <Projects ref={projectsRef} />
    <Contacts ref={contactsRef} />

    </>
  )
}

export default App