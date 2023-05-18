import './DonutItem.css';

function DonutItem({text, completed}) {
    return (
        <li>
            <span>✔</span>
            <p>{text}</p>
            <span className="Icon Icon-delete">❌</span>
        </li>
    );
}

export { DonutItem };