import React, { useState } from "react";

const plantAPI = 'http://localhost:6001/plants'

function NewPlantForm() {
  const [newPlant, setNewPlant] = useState({});
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);


  // const [formData, setFormData] = useState({
  //   name: "",
  //   image: "",
  //   price: 0
  // });

  // function handleChange(e){
  //   const {name, image, price} = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //     [image]: value,
  //     [price]:value,
  //   }))
  // }


  function addNewPlant(newPlant){
    newPlant = {name, image, price:parseInt(price)}
    fetch(plantAPI, {
      method: 'POST',
      headers: {
        'Context-type': 'Application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(plant => {
        setPlants([...plants,  newPlant]);   
      });
  }

  // function handleChange(e){
  //   const newValue = e.target.value;
  //   const inputName = e.target.value;
  //   const updatedPlant = {...newPlant};
  //   updatedPlant[inputName] = newValue;
  //   setNewPlant(updatedPlant);
  // }

  function submitForm(e){
    e.preventDefault();
    addNewPlant(newPlant);
    setNewPlant({});
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitForm}>
        <input type="text" name="name" placeholder="Plant name" 
          value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" 
          value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" 
          value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;