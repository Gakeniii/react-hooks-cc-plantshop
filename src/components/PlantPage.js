import React, { useEffect, useState }  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantAPI = 'http://localhost:6001/plants'

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => fetch(plantAPI)
    .then(res => res.json())
    .then(setPlants), []
  )



  return (
    <main>
      <NewPlantForm />
      <Search handleSearch={setSearchTerm}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
// plants={plants.filter(plant => plant.name.includes(searchTerm))}