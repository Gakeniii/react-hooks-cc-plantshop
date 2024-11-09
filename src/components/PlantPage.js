import React, { useEffect, useState }  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage({plants, addNewPlant}) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleSearch={setSearchTerm} />
      <PlantList plants={plants.filter(plant => plant.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase()))}/>
    </main>
  );
}

export default PlantPage;