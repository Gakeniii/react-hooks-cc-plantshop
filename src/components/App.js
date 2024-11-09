import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const plantAPI = 'http://localhost:6001/plants'

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => fetch(plantAPI)
    .then(res => res.json())
    .then(setPlants), 
    []);


    function addNewPlant(plant){
      fetch(plantAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON' 
        },
        body: JSON.stringify(plant),
      })
      .then(res => res.json())
      .then(json => setPlants([...plants, json]))
    }

    // function handleDelete(plant){
    //   fetch(`http://localhost:6001/plants/${plants.id}`, {
    //     method: "DELETE",
    //   })
    //     .then((r) => r.json())
    //     .then(() => setPlants(plant));
    // }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant}/>
    </div>
  );
}

export default App;
