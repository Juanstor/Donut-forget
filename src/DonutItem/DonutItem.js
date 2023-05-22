import { CheckIcon } from '../DonutIcon/CheckIcon'
import { DeleteIcon } from '../DonutIcon/DeleteIcon'
import './DonutItem.css';

function DonutItem(props) {
    return (
        <li className="DonutItem">
            <CheckIcon
                completed={props.completed}
                onComplete={props.onCompleted}
            />

            <p className={`DonutItem-p ${props.completed &&"DonutItem-p--complete"}`}>
                {props.text}
            </p>

            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { DonutItem };