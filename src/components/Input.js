import React, { useEffect, useState } from "react";
import '../App.css'

function Input(props) {
  //console.log(props.totalPost)
  const [inputData, setInputData]=useState(props.inputData);
  //console.log(inputData)
  
  const handleInputChange = (e) =>{
    e.preventDefault()
    const {name, value} = e.target;
    setInputData((prevData)=>{
      return{
        ...prevData,
        id:props.id,
        [name]:value
      }
    })
  }

  useEffect(()=>{
    props.setInputData(inputData)
    props.setInputCleared(false)
  },[handleInputChange])

  useEffect(()=>{
    if(props.inputCleared){
    setInputData({
    id:-1,
    title:'',
    description:''
  })
  }
  },[props.inputCleared])

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" name="title" value={inputData.title} data-testid="title-input" onChange={handleInputChange}/>
      <textarea className="mt-10 w-100" placeholder="Enter Description" name="description" value={inputData.description} data-testid="description-input" onChange={handleInputChange}/>
    </div>
  );
}

export default Input;
