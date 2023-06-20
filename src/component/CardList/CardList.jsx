import React from 'react'
import CardComponent from '../CardComponent/CardComponent';
import './CardList.css'

const CardList = ({ data }) => {
    return (
        <div className='cardListContainer'>
            {data.map((item) =>
                <CardComponent key={item.id} data={item} />
            )}
        </div>
    )
}

export default CardList