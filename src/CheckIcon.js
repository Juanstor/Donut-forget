import React from 'react';
import { DonutIcon } from './DonutIcon'

function CheckIcon({ completed, onComplete }) {
    return (
        <DonutIcon
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { CheckIcon };