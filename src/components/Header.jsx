import { useEffect } from "react";
import { useState } from "react"


function Header() {
  const [activeSection, setActiveSection] = useState('aboutme');

  useEffect(()=>{
    const handleScroll =()=>{
      const aboutmeSection = document.getElementById('aboutme');
      const portfolioSection = document.getElementById('portfolio');
      const skillsSection = document.getElementById('skills');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + 200;

      if (scrollPosition < portfolioSection.offsetTop) {
        setActiveSection('aboutme');
    } else if (scrollPosition < skillsSection.offsetTop) {
        setActiveSection('portfolio');
    } else if (scrollPosition < contactSection.offsetTop) {
        setActiveSection('skills');
    } else {
        setActiveSection('contact');
    }
};

window.addEventListener('scroll', handleScroll);
return () => {
    window.removeEventListener('scroll', handleScroll);
};
}, []);

    

 
     return (
        <>
       <header className="header">
          <nav className="header__nav">
            <ul className="header__nav--ul">
              <li><a className={activeSection === 'aboutme' ? 'active' : ''} href="#aboutme">About me</a></li>
              <li><a className={activeSection === 'portfolio' ? 'active2' : ''} href="#portfolio" >Portfolio</a></li>
              <li><a className={activeSection === 'skills' ? 'active2' : ''} href="#skills">My skills</a></li>
              <li><a className={ activeSection === 'contact' ? 'active2' : ''} href="#contact">Contact</a></li>
            </ul>
            <div className="header__nav--brand">
              <h2> Hi there! My name is <span className="span">Raquel Castro</span> and I'm a <span className="span">web developer</span></h2>
              </div>
              <a className="header__cv" href="https://drive.google.com/file/d/1vHUhwmWSF5viiTCJ5iY7c6XE7r1pyBjW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" > 
              <button className="header__cv--button">Download CV</button></a>
          </nav>
        </header>
        </>
  )
}

export default Header