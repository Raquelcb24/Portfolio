import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const email = "raquelcastrobermudo@gmail.com";
    const phone = "+34634205221";
  return (
    <>
    <h2 id="contact" className="contact__title">Contact me</h2>
    <ul className="contact__container">
        
        <li> <a href={`mailto:${email}`} target="_blank">Email <FontAwesomeIcon icon={faEnvelope} /></a> </li>
        
        <li> <a href={`tel:${phone}`} target="_blank">Phone <FontAwesomeIcon icon={faMobileScreen} /></a> </li>
       
        <li><a href="https://github.com/Raquelcb24" target="_blank">Github <FontAwesomeIcon icon={faGithub} /> </a></li>
        <li><a href="https://www.linkedin.com/in/raquelcb24/" target="_blank">Linkedin <FontAwesomeIcon icon={faLinkedin} /> </a></li>
            
            
      
        
    </ul>
    
    </>
  )
}

export default Contact