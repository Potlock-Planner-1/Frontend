import React, { useEffect, useState } from "react"
import Potluck from './Potluck';
import PotluckMars from '../components/PotluckMarsMVP'
import Axios from "axios";



const PotluckList = () => {

// mars MVP shenanigans, sorry it's horrendously ugly but please leave it (or place it in a dummy file if it's just too annoying to look at)

const [ potlucks, setPotlucks ] = useState([])

useEffect(() => {
    Axios.get('https://potluckplanner1.herokuapp.com/api/potlucks')
    .then(res => {
        console.log("We made it this far")
        setPotlucks(res.data)
    })
    .catch( () => {
        console.log('Snake eyes!')
    })
}, [])

    return(
        <div className='container'>
        <Potluck />
        {potlucks.map(potluck => {
            return (
            <PotluckMars key={potluck.id} potluck={potluck} />
            )     
        })
        }
    </div>
    )
};

export default PotluckList;