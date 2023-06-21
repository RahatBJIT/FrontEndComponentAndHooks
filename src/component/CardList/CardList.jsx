import React from 'react'
import './CardList.css'

const CardList = ({ data , card: CardComponent}) => {

    return (
        <div className='cardListContainer'>
            {data.map((item, index) =>
                <CardComponent key={index} data={item} />
            )}
        </div>
    )
}
export default CardList