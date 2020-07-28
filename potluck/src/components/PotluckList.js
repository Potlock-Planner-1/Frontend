import React, {useState, useEffect} from "react"
import Potluck from './Potluck';
import Axios from "axios";


const PotluckList = () => {
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
    return(
        <div className = 'container'>
            <Potluck />
            {/* {
                guest.map(person => {
                    return(
                    <GuestItem key={person.id} details={person}/>
                    )
                })
            } */}
        </div>

        
        
    )
};
export default PotluckList;
