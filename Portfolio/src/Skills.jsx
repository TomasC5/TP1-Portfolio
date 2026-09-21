function Skills() {
    
    const language1 = "JavaScript";
    const language2 = "CSS";
    
    return(
        <ul>
            <li>HTML</li>
            <li>{language2}</li>
            <li>{language1.toUpperCase()}</li>
        </ul>
    );
}

export default Skills