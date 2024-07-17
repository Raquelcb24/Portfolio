import rickandmorty from '/images/rick_and_morty.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

function RickAndMorty() {
    const handleClick = () => {
        window.open('https://github.com/Raquelcb24/modulo-3-evaluacion-final-Raquelcb24', '_blank')
      };
      const handlePlay = () => {
         window.open('https://raquelcb24.github.io/modulo-3-evaluacion-final-Raquelcb24/', '_blank')
       };
  return (
   <>
   <div className="project">
          <h3 className="project__title">Rick and Morty</h3>
          <img className="project__img" src={rickandmorty} alt="RickAndMorty picture" />
          <p className="project__description">In this project, I performed a fetch request to an external API based on Rick and Morty characters and used React to display the data in different cards.
          Find your favourite Rick & Morty characters here! You can filter by name, status and species</p>
          <p className="project__technologies">Technologies used: HTML, CSS, React, JavaScript, Fetch API, </p>
        <div className='container__button'>
            <button onClick={handleClick} className="project__button" >
              <FontAwesomeIcon icon={faGithub} /> Check my repository
            </button>
            <button onClick={handlePlay} className="project__button" >
            <FontAwesomeIcon icon={faIdCard} /> Try to make your own card!
            </button>

        </div> 
        </div>
    
   </>
  )
}

export default RickAndMorty