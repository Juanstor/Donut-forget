import './DonutItem.css';

function DonutItem({text, completed}) {
    return (
        <li className="DonutItem">

            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
                ✔
            </span>

            <p className={`DonutItem-p ${completed &&"DonutItem-p--complete"}`}>
                {text}
            </p>

            <span className="Icon Icon-delete">
                ❌
            </span>

        </li>
    );
}

export { DonutItem };