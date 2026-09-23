import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Skills from "./Skills.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import classesTaken from "./ClassesTaken.jsx"

function App() {

    return(
      <>
        <Header/>
        <h1>Portfolio</h1>
        <UserGreeting isLoggedIn={true} username = "Tomás" />
        <Card/>
        <Button/>
        <Skills/>
        <List classes={classesTaken} category="Programming"/>
        <Footer/>
      </>
    );
}

export default App
