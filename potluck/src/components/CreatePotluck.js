import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { CreatePotluckDiv } from '../styles/StyledPotluck';

// Initialstate⭐️
const nextPotluck = {
    name: '',
    location: '',
    date: '',
    time: ''
};

const initialFoodItem = {
    item_name: '',
    claimed: 0,
    potluck_id: ''
};

const firstGuest = {
    guest_name: ''
};
// get potlucks
// {
//     "id": 1,
//     "name": "joe's potluck",
//     "date": "08-01-2020",
//     "time": "9:00",
//     "location": "california",
//     "host": "joe bay"
// }
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
//     "guest_name": "John"
// }
// passing the props or setting the state⭐️
export default function CreatePotluck() {
    const { push } = useHistory();
    const [potluck, setPotluck] = useState(nextPotluck);
    const [nextFoodItem, setNextFoodItem] = useState(initialFoodItem);
    const [foodItems, setFoodItems] = useState([]);
    const [guest, setGuest] = useState(firstGuest);
    const [guestList, setGuestList] = useState([]);

    const addPotluck = (evt) => {
        evt.preventDefault();
        let userId = localStorage.getItem('userId');
        console.log('userId:' + userId);
        axiosWithAuth()
            .post(`https://potluckplanner1.herokuapp.com/api/users/${userId}/potlucks`, potluck)
            .then(res => {
                axiosWithAuth()
                    .get('https://potluckplanner1.herokuapp.com/api/potlucks')
                    .then(res => {
                        let list = res.data.filter(x => x.name === potluck.name)
                        let potluckId = list[0].id
                        addFoodtoPotluck(potluckId);
                        addGuesttoPotluck(potluckId);
                        push('/');
                    })
            })
            .catch(err => console.log('ERROR'));
    };
    // const addGuest = (e) => {
    //     e.preventDefault();
    //     let userId = localStorage.getItem('userId');
    //     axiosWithAuth()
    //         .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${userId}/guests`, guest)
    //         .then(res => {
    //             inviteGuest();
    //             console.log(`${guest}`)
    //         })
    // }

    // Adding food to potluck after creating that potluck as it gets an id when created
    const addFoodtoPotluck = (potluckId) => {
        // console.log('addFoodtoPotluck called');
        // console.log('items: ' + JSON.stringify(foodItems));
        let newList = [...foodItems];
        let promises = [];
        newList.map(x => {
            x.potluck_id = potluckId;
            promises.push(axiosWithAuth()
                // .put(`https://potluckplanner1.herokuapp.com/potlucks/${editPotluck.id}`, editPotluck)
                .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluckId}/items`, x)
                .then(res => {
                    console.log(res, 'This is the food item')
                    x.id = res.data.id;
                    return res.data.id
                })
                .catch(err => console.log('ERROR')));
        })
        Promise.all(promises).then(results => {
            for (let i=0; i<results.length; i++) {
                newList[i].id = results[i];
            }
            setFoodItems(newList);
        })
    };

    const addGuesttoPotluck = (potluckId) => {
        let newGuestList = [...guestList];
        console.log('newGuestList: ' + JSON.stringify(newGuestList));
        let promises = [];
        newGuestList.map(x => {
            promises.push(axiosWithAuth()
                .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluckId}/guests`, x)
                .then(res => {
                    x.id = res.data.id;
                    return res.data.id;
                })
                .catch(err => console.log('ERROR')));
        })
        Promise.all(promises).then(results => {
            for (let i=0; i<results.length; i++) {
                newGuestList[i].id = results[i];
            }
            setGuest(newGuestList);
        })

    };

    const addFood = (evt) => {
        evt.preventDefault();
        setFoodItems([...foodItems, nextFoodItem]);
        setNextFoodItem({
            ...initialFoodItem
        });
    };

    const addGuest = (evt) => {
        evt.preventDefault();
        setGuestList([...guestList, guest]);
        setGuest({
            ...guest
        })

    };

    const handleChange = (evt) => {
        evt.preventDefault();
        setPotluck({
            ...potluck,
            [evt.target.name]: evt.target.value
        });
    };

    const handleChangeToNextFoodItem = (evt) => {
        evt.preventDefault();
        setNextFoodItem({
            ...nextFoodItem,
            [evt.target.name]: evt.target.value
        })
    };
    const handleGuestChange = (e) => {
        e.preventDefault();
        setGuest({
            ...guest,
            [e.target.name]: e.target.value
        })
    }

    const removeFood = food => {
        console.log(foodItems)
        axiosWithAuth()
            .delete(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/items`, food)
            .then(res => {
                console.log(res)
            })
    }

    const handleChangeGuest = (evt) => {
        evt.preventDefault();
        setGuest({
            ...guest,
            [evt.target.name]: evt.target.value
        });
    };

    return (
        <CreatePotluckDiv>
            <h1>Host a Potluck</h1>
            <form className='details-form'>
                <div className='create-potluck'>
                    <input
                        placeholder="Potluck's name"
                        type="text"
                        name="name"
                        value={potluck.name}
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Location'
                        type="text"
                        name="location"
                        value={potluck.location}
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Date'
                        type="text"
                        name="date"
                        value={potluck.date}
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Time'
                        type="text"
                        name="time"
                        value={potluck.time}
                        onChange={handleChange}
                    />
                    {/* {
                        potluck.map(x => {
                            return <div key={x.id}>{x}</div>
                        })
                    } */}
                </div>
                <div className='food'>
                    <h3>Food:</h3>
                    <input
                        placeholder='Dish'
                        type="text"
                        name="item_name"
                        value={nextFoodItem.item_name}
                        onChange={handleChangeToNextFoodItem}
                    />
                    <button className='Btn' onClick={addFood}>Add Item</button>
                    {
                        foodItems.map(x => {
                            return <p key={x.item_name}><span role="img" aria-label=''>🍗</span>  {x.item_name}<span role="img" aria-label=''> 🌭 </span><br /></p>
                        })
                    }
                </div>
                <div className='guests'>
                    <h3>Guests:</h3>
                    <input
                        placeholder='Guests'
                        type="text"
                        name="guest_name"
                        value={guest.guest_name}
                        onChange={handleChangeGuest}
                    />
                    <button className='Btn' onClick={addGuest}>Add Guests</button>
                    {
                        guestList.map(x => {
                            return <p key={x.guest_name}><span role="img" aria-label=''>🍗</span>  {x.guest_name}<span role="img" aria-label=''> 🌭 </span><br /></p>
                        })
                    }
                </div>
                <br/>
                <br/>
                <br/>
                <button className='Btn' onClick={addPotluck}>Create Potluck</button>
            </form>
        </CreatePotluckDiv>
    )
};