function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <button className="header-buttons"><a href="#">Home</a></button>
                    <button className="header-buttons"><a href="#">About</a></button>
                    <button className="header-buttons"><a href="#">Skills</a></button>
                    <button className="header-buttons"><a href="#">Projects</a></button>
                    <button className="header-buttons"><a href="#">Contact</a></button>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header