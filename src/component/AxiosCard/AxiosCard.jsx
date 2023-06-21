import React, { useEffect, useState } from 'react'
import './AxiosCard.css'
import LineContent from '../LineContent/LineContent'

const AxiosCard = ({ data }) => {



    


    const [show, setShow] = useState(false)



    const toggle = () => {
        setShow(!show);
    }


    let currencies = null


    if (data.currencies) {
        currencies = Object.values(data.currencies).map(currency => currency.name);
    }
    let languages = null

    if (data.languages) {
        languages = Object.values(data.languages).map(currency => currency);
    }

    // useEffect(() => {
    //     if (show) {

    //         document.getElementById("container").style.zIndex = 5;
            
    //     }
    //     else{
    //         document.getElementById("container").style.zIndex = 0;

    //     }
   
    // }, [show])




    return (
        <div className='cardContainer' id='container' onClick={toggle} >
            {data &&
                <div className='card'>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <h2 > {data.name.common}</h2> <img height="20" src={data.flags.svg} alt="My Happy SVG" />
                    </div>
                    <p><b>Official Name</b> : {data.name.official}</p>
                    <p><b>Population</b> : {data.population}</p>
                    {show &&
                        <div>
                            {
                                data.capital &&
                                <LineContent heading="Capital " value={data.capital} />
                            }
                            < br />
                            <LineContent heading="Alternate Spellings " value={data.altSpellings} />
                            <br />
                            {data.borders &&
                                <LineContent heading="Borders " value={data.borders} />
                            }
                            <br />

                            {data.currencies &&
                                <LineContent heading="Currency " value={currencies} />
                            }
                            <br />


                            {data.languages &&
                                <LineContent heading="Languages Spoken " value={languages} />

                            }
                            <br />


                            <h3>Flag of this country</h3>
                            <img src={data.flags.png} width={250} />
                            <br />
                            {
                                data.flags.alt &&
                                <p>
                                    <b>Flag Description : </b>
                                    {data.flags.alt}
                                </p>
                            }
                            <br />

                        </div>


                    }
                </div>
            }


        </div>)

}

export default AxiosCard