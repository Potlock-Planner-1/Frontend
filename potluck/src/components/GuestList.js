import React from 'react'

const GuestList = (props) => {

    const joinAsGuest = () => {
        if (!potluck.id)
            return;
        axiosWithAuth()
            .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/guests`, newGuest)
            .then(res => {
                setNewGuest({
                    id: window.localStorage.getItem('id'),
                    guest_name: window.localStorage.getItem('username'),
                    potluck_id: params.id,
                })
                axiosWithAuth()
                    .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/guests`)
                    .then(res => {
                        setGuests(res.data);
                    })
            })
    }

    return(
        <div>
           <p>{props.guestName}</p> 
        </div>
    )
}
export default GuestList
