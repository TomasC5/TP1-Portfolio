import styles from "./Button.module.css"

const cardColor = ["green", "blue", "yellow"]

function Button(props) {

    const handleClick = () => {
        const currentIndex = cardColor.indexOf(props.currentColor);
        const nextIndex = (currentIndex + 1) % cardColor.length;
        
        props.currentColor1(cardColor[nextIndex])
    }

    
    
    return(
        <button className={styles.button} onClick={handleClick}>Click</button>
    );
}

export default Button