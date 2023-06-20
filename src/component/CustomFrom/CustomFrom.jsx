import React from 'react'
import './CustomFrom.css'
import CustomButton from '../CustomButton/CustomButton'

const CustomFrom = () => {
    return (

        <div className='fromBody' >

            <h2 className="header">
                Registration From
            </h2>
            <label className='inputLable' htmlFor="name" >Name : </label>
            <input className='inputField' type="text" id='name' />
            <br />
            <label className='inputLable' htmlFor="email">Email : </label>
            <input className='inputField' type="email" name="email" id="email" />



            <div className='buttonContainer'>
                <CustomButton textValue="Payment" />
                <CustomButton textValue="Submit" type="success" />
                <CustomButton textValue="Delete" type="delete" />

            </div>

        </div>

    )
}

export default CustomFrom