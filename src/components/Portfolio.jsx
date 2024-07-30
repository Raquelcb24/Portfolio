import GroguGame from "./GroguGame"
import MysticalCoders from "./MysticalCoders"
import RickAndMorty from "./RickAndMorty"
import SimpsonsApi from "./SimpsonsApi"


function Portfolio() {
 

  return (
    <>
     <h2 id="portfolio" className="title">My Portfolio</h2>
     <div className="wrapper-portfolio">
        <GroguGame/>
        <MysticalCoders/>
        <RickAndMorty/>
        <SimpsonsApi/>    
     </div>
  
    
    </>
  )
}

export default Portfolio