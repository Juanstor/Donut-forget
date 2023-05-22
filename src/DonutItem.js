import { CheckIcon } from './CheckIcon'
import { DeleteIcon } from './DeleteIcon'
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