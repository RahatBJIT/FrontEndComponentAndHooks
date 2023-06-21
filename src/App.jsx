import { useEffect, useState } from 'react';
import './App.css'
import CardList from './component/CardList/CardList';
import AxiosCard from './component/AxiosCard/AxiosCard';
import axios from 'axios';
import FetchCard from './component/FetchCard/FetchCard';

function App() {
  const [names, setNames] = useState([]);

  const [url1, setUrl1] = useState('https://restcountries.com/v3.1/all')
  const [url2, setUrl2] = useState('https://restcountries.com/v3.1/name/')

  const [data1, setData1] = useState([])

  useEffect(() => {
    setNames(
      [
        {
          "id": 1,
          "color": "red",
          "type": "bike",
          "model": "R15",
          "registration": new Date('2016-05-02'),
          "capacity": 2
        },
        {
          "id": 2,
          "color": "blue",
          "type": "car",
          "model": "TATA ALTROZ DARK",
          "registration": new Date('2016-05-02'),
          "capacity": 4
        }, {
          "id": 3,
          "color": "yellow",
          "type": "bike",
          "model": "M10",
          "registration": new Date('2016-05-02'),
          "capacity": 2
        }, {
          "id": 4,
          "color": "green",
          "type": "car",
          "registration": new Date('2016-05-02'),
          "capacity": 4,
          "model": "TATA TIGOR"


        },

        {
          "id": 5,
          "color": "black",
          "registration": new Date('2016-05-02'),
          "capacity": 2,
          "model": "CVZ10"

        }

      ]
    );



    axios.get(`${url1}`)
    .then(Response => setData1(Response.data));
    


  }, []);


 
  


  return (
    <>

      <FetchCard  url= {url2}/>


      <CardList data={data1} card={AxiosCard}/>



    </>
  )
}

export default App
