import ClassesTaken from "./ClassesTaken.jsx"

function List(props) {

    const category = props.category;
    const classList = props.classes;

    const listClasses = classList.map(progClass => <li key ={progClass.id}>
                                                <b>{progClass.nameOfClass}:</b> &nbsp;
                                                {progClass.amount}</li>);

    return(<>
    <h3>{category}</h3>
    <ul>{listClasses}</ul>
    </>);
}

export default List