import React from 'react';
import { DonutIcon } from './DonutIcon';

function DeleteIcon({ onDelete }) {
    return (
        <DonutIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };