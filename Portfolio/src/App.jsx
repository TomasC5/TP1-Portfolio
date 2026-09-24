import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Skills from "./Skills.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import classesTaken from "./ClassesTaken.jsx"
import {useState} from "react"
import progimg from "../src/assets/progimg.jpg"
import progimg2 from "../src/assets/progimg2.jpg"
import Projects from "./Projects.jsx"

function App() {

    const [cardColor, setCardColor] = useState(null)

    return(
      <>
        <Header/>
        <h1>Portfolio</h1>
        <UserGreeting isLoggedIn={true} username = "Tomás" />
        <Card cardColor = {cardColor}/>
        <Button currentColor = {cardColor} currentColor1 = {setCardColor}/>
        <h2 id="about-me">ABOUT ME</h2>
        <p>I am a 23 year old programmer that works with React to create stunning webpages. I study at UTN and I am starting this career path hoping to assist people in making their webpages come to life through coding!</p>
        <h2 id="my-skills">SKILLS</h2>
        <Skills/>
        <List classes={classesTaken} category="Programming"/>
        <img src={progimg} alt="" className="progimg"/>
        <h2 id="my-projects">PROJECTS</h2>
        <Projects/>
        <img src={progimg2} alt="" className="progimg"/>
        <Footer/>
      </>
    );
}

export default App
