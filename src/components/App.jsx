import "../styles/App.scss";
import Header from "./Header";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Contact from "./Contact";
import Portfolio from "./Portfolio";



function App() {
  return (
    <>
      <Header/>
      <main>
        <Aboutme/>
        <Skills/>
        <Portfolio/>
      </main>
      <footer>
        <Contact />
      </footer>
      
     
  
      
    </>
  )
}

export default App
