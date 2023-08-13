import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData"

function App() {
  // function to update state. sat and satData are equal in beginning. setSat function updates value of sat.
  const [sat, setSat] = useState(satData);
  // creates new array from satData and filters for orbitType and gets rid of duplicates.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  // filters satData by currentType of orbit (low,medium,high). Creates a new array(displaySats). newSatDisplay.orbitType is being compared to currentType and matching selections are added to displaySats array which is then being put into setSat to set the satData information.
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
  // updates sat with this array
    setSat(displaySats);
 };
  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;
