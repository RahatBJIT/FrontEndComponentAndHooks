import React from 'react'

const LineContent = ({heading, value }) => {

    
    return (
    //   {
    //     if (value ) {
            
    //     }
        
    //   }

            <span><b>{heading}</b> : {value.map((item, index) => {
                if (index == value.length - 1) {
                    return <span key={index} >{item}.</span>
                }
                else {
                    return <span key={index}>{item}, </span>
                }
            }
            )} </span>
       
    )
//     return "N\A"
}

export default LineContent