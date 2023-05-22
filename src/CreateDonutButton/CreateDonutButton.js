import './CreateDonutButton.css';

function CreateDonutButton() {
    return (
        <button 
        className="CreateDonutButton"
        onClick={
            () => console.log('Le diste click al bot[on agregar')
        }
        >
            +
        </button>
    );
}

export { CreateDonutButton };