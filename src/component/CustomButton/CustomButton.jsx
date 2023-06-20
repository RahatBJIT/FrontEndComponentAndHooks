import React, { useEffect, useState } from 'react'
import './CustomButton.css'

const CustomButton = ({ textValue, type }) => {

  const [colour, setColour] = useState("blue");
  const [bgColor, setBgColor] = useState("white")

  useEffect(() => {

    if (type === "success") {
      setColour("#fbfbfb");
      setBgColor("green");
    }  
     if (type === "delete") {
      setColour("black");
      setBgColor("red");
    }
  }, []);


  return (
    <button className='buttonDiv' style={{ color: colour , backgroundColor: bgColor }}>{textValue}</button>
  )
}

export default CustomButton