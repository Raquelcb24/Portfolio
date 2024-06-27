

function Header() {
 
     return (
        <>
       <header className="header">
          <nav className="header__nav">
            <ul className="header__nav--ul">
              <li><a className="active" href="#aboutme">About me</a></li>
              <li><a className="active2" href="#portfolio">Portfolio</a></li>
              <li><a className="active2"  href="#skills">My skills</a></li>
              <li><a className="active2" href="#contact">Contact</a></li>
            </ul>
            <div className="header__nav--brand">
              <h2> Hi there! My name is <span className="span">Raquel Castro</span> and I'm a <span className="span">web developer</span></h2>
              </div>
              <a className="header__cv" href="https://drive.google.com/file/d/1HIXNYPl0yIZKMWhONg9UfzA6Tj_Z1q9m/view?usp=sharing" download="CV_Raquel_Castro" > 
              <button className="header__cv--button">Download CV</button></a>
          </nav>
        </header>
        </>
  )
}

export default Header