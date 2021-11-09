import React, { useState } from "react";
import Listofnames from "./Listofnames";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Captain",
    lastName: "Kirk",
    admin: false,
  })
  const [namesArray, setNamesArray] = useState([])

  function handleChange(e){
    const name = e.target.name;
    let value = e.target.value;
    
    if(e.target.type === "checkbox"){
      value = e.target.checked
    }
    
    setFormData({
      ...formData,
      [name]: value,

    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setNamesArray([ formData, ...namesArray])
    setFormData({
      firstName: "",
      lastName: '',
      admin: false,
    })
  }

  function handleDelete(e){
    const newNames = namesArray.filter(name => e.target.name !== name.firstName)
    setNamesArray(newNames)
}

  const namesDisplay = namesArray.map(name => <Listofnames key = {name.firstName + name.lastName} firstName={name.firstName} lastName={name.lastName} admin={name.admin} handleDelete={handleDelete}/>)

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} name="firstName"/>
      <input type="text" onChange={handleChange} value={formData.lastName} name="lastName"/>
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
      {namesDisplay}
    </div>
  );
}

export default Form;
