import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from 'react-router-dom';
// import GuestList from "./GuestList"
import { PotluckDetailsStyled } from "../styles/StyledPotluckList"

const nextPotluck = {
    name: '',
    host: '',
    location: '',
    date: '',
    time: ''
};



// get food items
// {
//     "id": 16,
//     "item_name": "Chalupas",
//     "claimed": 0,
//     "potluck_id": 6
// }
// get guests
// {
//     "id": 1,
//     "guest_name": "Jack",
//     "potluck_id": 1
//  }

/* rendering all the details of a potluck on the webpage */
export default function PotluckDetails() {
    const [potluck, setPotluck] = useState(nextPotluck);
    const [items, setItems] = useState([]);
    const [guests, setGuests] = useState([]);
    const [claimed, setClaimed] = useState({});

    let claimedDict = {};
    // const [editFoodItem, seteditFoodItem] = useState(initialFoodItem);
    const params = useParams();

    // const newGuest = {
    //     id: Number(window.localStorage.getItem('userId')),
    //     guest_name: window.localStorage.getItem('username'),
    //     potluck_id: params.id,
    // }

    const newGuest = {
        id: Number(window.localStorage.getItem('userId')),
        guest_name: window.localStorage.getItem('username'),
        name: potluck.name,
    }

    // fetching potluck👍
    const fetchPotluck = () => {
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${params.id}`)
            .then(res => {
                setPotluck(res.data)
            })
            .catch(err => console.log('ERROR'));
    };

    const fetchItemDetails = (i) => {
        if (!items.length)
            return;
        console.log('items: ' + JSON.stringify(items));
        console.log('claimed:' + JSON.stringify(claimed) + ' expanded claimed: ' + JSON.stringify({ ...claimed }));

        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/items/${items[i].id}`)
            .then(res => {
                claimedDict[items[i].id] = res.data.claimed;
                if (i === items.length - 1) {
                    console.log('Now setting claimed: ' + JSON.stringify(claimedDict));
                    setClaimed({ ...claimedDict });
                } else {
                    console.log('i: ' + i + ' items.length: ' + items.length);
                    i++;
                    if (i < items.length) {
                        fetchItemDetails(i);
                    }
                }
            })
    }

    const fetchItemsInPotluck = () => {
        if (!potluck.id)
            return;
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/items`)
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => console.log(err.response));
    };

    const fetchGuests = () => {
        if (!potluck.id)
            return;
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/guests`)
            .then(res => {
                setGuests(res.data);
            })
            .catch(err => console.log('ERROR'));
    };
    const joinAsGuest = () => {
        // axiosWithAuth()
        //     .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/guests`, newGuest)
        //     .then(res => {
        //         setGuests([
        //             ...guests,
        //             res.data
        //         ])
        //         axiosWithAuth()
        //             .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/guests`)
        //             .then(res => {
        //                 setGuests(res.data);
        //             })
        //     .catch(err => window.alert(err))

        //     })

        setGuests([...guests, newGuest])
    }

    const deleteGuest = () => {
        axiosWithAuth()
            .delete(`/api/guest/${newGuest.id}`)
    }

    useEffect(() => {
        fetchPotluck();
    }, []);

    useEffect(() => {
        fetchItemsInPotluck();
    }, [potluck]);

    useEffect(() => {
        let currentIndex = 0;
        fetchItemDetails(currentIndex);
    }, [items]);

    useEffect(() => {
        fetchGuests();
    }, [potluck]);

    if (!potluck.id) {
        return <div>Loading potluck information...</div>;
    };
    console.log(items);
    console.log(potluck);
    console.log('claimed: ' + JSON.stringify(claimed));
    return (
        <PotluckDetailsStyled className='potluck-details'>
            <h1>Potluck</h1>
            <div className='potluck-header'>
                <h2>{potluck.name}</h2>
                <button onClick={joinAsGuest}>Join This Potluck</button>
            </div>
            <h2>{potluck.host}</h2>
            <p>Date: {potluck.date}<br /></p>
            <p>Time: {potluck.time}<br /></p>
            <p>Location: {potluck.location}<br /></p>
            <div className="detailsContainer">
                <div className="foodContainer">
                    <h3>Food Menu</h3>
                    {
                        items.map(x => {
                            return <p key={x.id}>
                                {x.item_name} - {claimed[x.id] ? 'claimed' : 'unclaimed'}
                                <span>
                                    {!claimed[x.id] &&
                                        <button>
                                            Claim
                                            </button>
                                    }
                                </span>
                            </p>
                        }
                        )
                    }
                    {/* items.filter(x => x.potluck_id === potluck.id) */}
                </div>
                <div className="guestContainer">
                    <h3>Guestlist</h3>
                    {
                        guests.map(guest => {
                            return <p key={guest.id}>{guest.guest_name}</p>
                        })
                    }
                </div>
            </div>
        </PotluckDetailsStyled>
    )
};
