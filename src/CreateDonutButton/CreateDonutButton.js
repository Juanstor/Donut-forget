import './CreateDonutButton.css';

function CreateDonutButton({ setOpenModal }) {
    return (
        <button 
            className="CreateDonutButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
        }
        >
            +
        </button>
    );
}

export { CreateDonutButton };