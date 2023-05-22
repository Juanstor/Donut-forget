import './DonutList.css'

function DonutList({ children }) {
    return (
      <ul className="DonutList">
        {children}
      </ul>
    );
  }

export { DonutList };