import myImage from '/images/photo-noBackground.png';


function Aboutme() {
  return (
    <>
        <div id="aboutme" className="main">
            <img className="main__img" src={myImage} alt="Foto Raquel Castro"/>
            <div className="main__content">
                <h2 className="main__content--title">About me</h2>
                <p className="main__content--text">Coming from a social background,  I bring strong communication, conflict resolution, and teamwork skills. My passion for challenges led me to reinvent myself as a web developer, finding great motivation and enthusiasm in continuous learning. Proficient in HTML, CSS, JavaScript, and React, I excel at working both independently and in teams. Highly organized and detail-oriented, I am committed to improving my technical skills and delivering effective solutions.</p>
                
            </div>
    
        </div>
    </>
  )
}

export default Aboutme