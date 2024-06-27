import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faDice } from '@fortawesome/free-solid-svg-icons'
import groguImage from '/images/grogu.png'

function GroguGame() {
    const handleClick = () => {
        window.open('https://github.com/elena-alcaraz/promo-X-module-3-pair-2-grogu-game', '_blank')
      };
      const handlePlay = () => {
         window.open('https://elena-alcaraz.github.io/promo-X-module-3-pair-2-grogu-game/', '_blank')
       };
  return (
    <>
        <div className="project">
          <h3 className="project__title">Grogu game</h3>
          <img className="project__img" src={groguImage} alt="grogu game" />
          <p className="project__description">In this game, as Mando you have the mission to bring all the supplies to the spaceship before Grogu reaches the last position and reaches the spaceship.
          Roll the dice and, depending on the random number you get, Grogu will advance positions or Mando will be able to deliver eggs, cookies and some frogs to the spaceship.</p>
          <p className="project__technologies">Technologies used: HTML, CSS, React</p>
        <div className='container__button'>
            <button onClick={handleClick} className="project__button" >
              <FontAwesomeIcon icon={faGithub} /> Check my repository
            </button>
            <button onClick={handlePlay} className="project__button" >
              <FontAwesomeIcon icon={faDice} /> Play this game! 
            </button>

        </div> 
        </div>
    
    
    </>
    
       
  )
}

export default GroguGame