import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";




function SimpsonsApi() {
    const handleClick = () => {
        window.open('https://github.com/Raquelcb24/API-simpsons-Back-end/tree/main', '_blank')
      };
      
  return (
    <>
    <div className="project">
          <h3 className="project__title">The Simpsons Characters API</h3>
          <img className="project__img" src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" alt="The Simpsons" />
          <p className="project__description">This project is a backend API for retrieving and managing data related to characters from the famous TV show The Simpsons. It provides endpoints to perform CRUD operations on character data.</p>
          <p className="project__technologies">Technologies used: Node.js and Express.js, with MySQL as the database management system.</p>
        <div className='container__button'>
            <button onClick={handleClick} className="project__button" >
              <FontAwesomeIcon icon={faGithub} /> Check my repository
            </button>
          

        </div> 
        </div>
    
    </>
  )
}

export default SimpsonsApi