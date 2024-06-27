import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import mystiCards from '/images/mysticards.png';

function MysticalCoders() {
    const handleClick = () => {
        window.open('https://github.com/Raquelcb24/Mystical-coders-cards', '_blank')
      };
      const handlePlay = () => {
         window.open('https://raquelcb24.github.io/Mystical-coders-cards/', '_blank')
       };
  return (
    <>
        <div className="project">
          <h3 className="project__title">Mystical Coders</h3>
          <img className="project__img" src={mystiCards} alt="MystiCards Logo" />
          <p className="project__description">Create your own personalized cards with a few simple steps.
            Just choose the color you like, a photo of your choice and fill in the form with all your details. 
            You will generate a card that you will be able to share in all your social and contact networks.</p>
          <p className="project__technologies">Technologies used: HTML, CSS, JavaScript</p>
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

export default MysticalCoders