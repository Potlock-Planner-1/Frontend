
//import React, {useState, useEffect} from "react"
//import Potluck from './Potluck';
//import Axios from "axios";


//const PotluckList = () => {
// !!! needed for React 1 MVP for joe, please dont delete sorry about the inconvienience !!!

//     const [guest, setGuest] = useState([])
// const getGuest = () => {
//      Axios.get('https://potluckplanner1.herokuapp.com/api/guests')
//     .then(res => {
//         console.log(res.data)
//         setGuest(res.data)
//     }).catch(err => {
//         console.log(`the error is ${err}`)
//     },[])
// }
//     const GuestItem = (props) => {
//         const {details} = props
//         return (
//             <div className='guest-container'>
//                 <h2>{details.name}</h2>
//             </div>
//         )
//     }
//     useEffect(() => {
//         getGuest()
//     },[])
//     return(
//         <div className = 'container'>
//             <Potluck />
//             {/* {
//                 guest.map(person => {
//                     return(
//                     <GuestItem key={person.id} details={person}/>
//                     )
//                 })
//             } */}
//         </div>

        
        

import React, { useState, useEffect } from "react";
import Potluck from './Potluck';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { PotluckListDiv, PotluckDiv } from '../styles/StyledPotluck';

const PotluckList = () => {
    const [potluckList, setpotluckList] = useState([]);

    const fetchPotluckList = () => {
        axiosWithAuth()
            .get('https://potluckplanner1.herokuapp.com/api/potlucks')
            .then(res => {
                setpotluckList(res.data)
            })
            .catch(err => console.log('ERROR'));
    };

    useEffect(() => {
        fetchPotluckList();
    }, []);

    if (!potluckList.length) {
        return <div>Loading potluck information...</div>;
    };


    return (
        <PotluckListDiv>
            {
                potluckList.map(x => (
                    <PotluckDiv key={x.id} >
                        <Potluck potluck={x} />
                    </PotluckDiv>
                ))
            }
        </PotluckListDiv>
    )
};
export default PotluckList;
