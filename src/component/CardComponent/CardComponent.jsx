import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardComponent.css'

const CardComponent = ({ data }) => {
  const [color, setColor] = useState("white")
  const [picture, setPicture] = useState("")
  const [emptyMessage, setEmptyMessage] = useState("")
  const [type, setType] = useState("Unknown Type")
  let str = data.type
  const str2 = str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  useEffect(() => {
    if (data.type == null) {
      setEmptyMessage("Unknown Type");
    }
    if (data.type === "bike") {
      setPicture("public\\assets\\bike.png")
    }
    if (data.type === "car") {
      setPicture("public\\assets\\car.png")
    }
    setType(str2)
    setColor(data.color)
  }, [])

  return (
    <>
      <div className="cardContainer">
        <Card style={{ width: '18rem' }}>

          {
            picture ?
             <Card.Img variant="top" src={picture} height={100} alt={emptyMessage} /> :
             <div style={{height: 100}} >{emptyMessage}</div>
  

}

          <Card.Body>
            <Card.Title>{type} model : {data.model}</Card.Title>
            <Card.Title>Capacity : {data.capacity}</Card.Title>

            <Card.Text>
              Registration Date :
              {data.registration.toLocaleDateString()}
            </Card.Text>

            <div className='colorContainer'>

              <Card.Title >Color : </Card.Title> <div className='colorBox' style={{
                color: color, borderColor: color
              }}>  {color}</div>
            </div>

          </Card.Body>
        </Card>
      </div>


    </>
  );
};
export default CardComponent;



