import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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
}

const initialGuest = {
    id: '',
    name: '',
}
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
//     "id": 4,
//     "name": "parimala"
// }
// get users
// {
//     "id": 1,
//     "username": "joe"
// },
// passing the props or setting the state⭐️
export default function CreatePotluck() {
    const { push } = useHistory();
    const [potluck, setPotluck] = useState(nextPotluck);
    const [nextFoodItem, setNextFoodItem] = useState(initialFoodItem);
    const [foodItems, setFoodItems] = useState([]);
    const [guest, setGuest] = useState(initialGuest);


    const addPotluck = (evt) => {
        evt.preventDefault();
        let userId = localStorage.getItem('userId');

        axiosWithAuth()
            .post(`https://potluckplanner1.herokuapp.com/api/users/${userId}/potlucks`, potluck)
            .then(res => {
                addFoodtoPotluck();
                push('/');
            })
            .catch(err => console.log('ERROR'));
    };
    const addGuest = (e) => {
        e.preventDefault();
        let userId = localStorage.getItem('userId');
        axiosWithAuth()
            .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${userId}/guests`, guest)
            .then(res => {
                console.log(res)
            })
    }

    // Adding food to potluck after creating that potluck as it gets an id when created
    const addFoodtoPotluck = () => {
        // console.log('addFoodtoPotluck called');
        // console.log('items: ' + JSON.stringify(foodItems));
        let newList = [...foodItems];
        newList.map(x => {
            x.potluck_id = potluck.id;
            axiosWithAuth()
                // .put(`https://potluckplanner1.herokuapp.com/potlucks/${editPotluck.id}`, editPotluck)
                .post(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/items`, x)
                .then(res => {
                    x.id = res.data.id;
                })
                .catch(err => console.log('ERROR'));
        })
        setFoodItems(newList);
    };

    const addFood = (evt) => {
        evt.preventDefault();
        setFoodItems([...foodItems, nextFoodItem]);
        setNextFoodItem({
            ...initialFoodItem
        });
    };

    const inviteGuest = (e) => {
        e.preventDefault();
        setGuest({
            ...guest,
            [e.target.name]: e.target.value
        })
    }

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
        // console.log(foodItems)
        axiosWithAuth()
            .delete(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/items`, food)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className='potluck-wrapper'>
            <h1>Potluck</h1>
            <form className='details-form'>
                <div className='create-potluck'>
                    <input
                        placeholder='Name'
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
                    <button className='Btn' onClick={addPotluck}>New Potluck</button>
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
                            return <p key={x.item_name}><span onClick={removeFood}>x</span><span role="img" aria-label=''>🍗</span>  {x.item_name}<span role="img" aria-label=''> 🌭 </span><br /></p>
                        })
                    }
                </div>
                <div className='guest'>
                    <h3>Invite Guests: </h3>
                    <input 
                    placeholder='Guest Username'
                    type='text'
                    name='name'
                    value={guest.name}
                    onChange={handleGuestChange}
                    />
                    <button onClick={addGuest}>Invite Guest</button>
                </div>
            </form>
        </div>
    )
};