import React, { useState } from 'react'
import AxiosCard from '../AxiosCard/AxiosCard';
import "./FetchCard.css"

const FetchCard = ({ url }) => {

  const [data, setData] = useState({})
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false)

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const fetchData = async (country) => {

    const url1 = url + country
    await fetch(url1)
      .then(response => response.json())
      .then(data => {
        if (data === undefined) {
          setShow(false)
          setData(null)

        }
        else {
          setData(data[0])

          console.log(data[0]);
          setShow(true)
        }


      })

  }





  return (

    <div className='cards' >
      <div style={{ gap: 10, display:'flex', justifyContent: 'center'}}  >
        <input type="text" onChange={handleChange} />
        <button onClick={() => { fetchData(searchValue) }} >Search</button>
        <button onClick={() => { setShow(false) }} >Clear</button>
      </div>

      {show &&(
        <div className='cardinner' >


              <AxiosCard data={data} />


        </div>)
      }



      {/* {noValueFound && 
      <div>  No Values Found      </div>

      } */}




    </div>
  )
}

export default FetchCard