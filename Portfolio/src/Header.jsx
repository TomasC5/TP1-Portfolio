function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <button className="header-buttons"><a href="#">Home</a></button>
                    <a className="header-buttons" href="#about-me">About</a>
                    <button className="header-buttons"><a href="#my-skills">Skills</a></button>
                    <button className="header-buttons"><a href="#my-projects">Projects</a></button>
                </ul>
            </nav>
        </header>
    );
}

export default Header