import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Skills from "./Skills.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import UserGreeting from "./UserGreeting.jsx"

function App() {

    return(
      <>
        <Header/>
        <h1>Portfolio</h1>
        <UserGreeting isLoggedIn={true} username = "Tomás" />
        <Card/>
        <Button/>
        <Skills/>
        <Footer/>
      </>
    );
}

export default App
