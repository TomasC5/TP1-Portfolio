import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Skills from "./Skills.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"

function App() {

  const classesTaken = [{id: 1, nameOfClass: "programming IV", amount: 12},
                        {id: 2, nameOfClass: "programming III", amount: 24},
                        {id: 3, nameOfClass: "programming II", amount: 27},
                        {id: 4, nameOfClass: "programming I", amount: 8}];

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
