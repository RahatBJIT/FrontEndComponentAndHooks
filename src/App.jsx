import { useEffect, useState } from 'react';
import './App.css'
import CardList from './component/CardList/CardList';

function App() {
  const [names, setNames] = useState([]);
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
  }, [])
  return (
    <>
      <CardList data={names} />

    </>
  )
}

export default App
