import satData from "./satData";
import styles from './styling.css';

// three props created in app.js
const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className="flex-container">
    {/* go through displaySats array by orbit type(sat) and id number and return new filtered array based on button clicked by passing sat as argument  */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
    })}
        {/* Resets orbit type to entire satdata */}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;