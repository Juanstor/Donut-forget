import './DonutList.css'

function DonutList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
}

export { DonutList };