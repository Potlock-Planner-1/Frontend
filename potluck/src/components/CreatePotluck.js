import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

// Initialstate⭐️
const nextPotluck = {
    name: '',
    host: '',
    location: '',
    date: '',
    time: ''
};

const initialFoodItem = {
    item_name: '',
    claimed: 0,
    potluck_id: ''
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


    const addPotluck = (id) => {
        // evt.preventDefault();
        axiosWithAuth()
            .post(`https://potluckplanner1.herokuapp.com/api/users/${id}/potlucks`, potluck)
            .then(res => {
                setPotluck(res.data);
                addFoodtoPotluck();
                push('/');
            })
            .catch(err => console.log('ERROR'));
    };

    // Adding food to potluck after creating that potluck as it gets an id when created
    const addFoodtoPotluck = () => {
        let newList = [...foodItems];
        newList.map(x => {
            x.potluck_id = potluck.id;
            axiosWithAuth()
            // .put(`https://potluckplanner1.herokuapp.com/potlucks/${editPotluck.id}`, editPotluck)
            .post('https://potluckplanner1.herokuapp.com/api/items', x)
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

    // const changePotluckGuests = () => {
    //     axioswithAuth()
    //         .put('https://potluckplanner1.herokuapp.com/api/guests', editPotluck)
    //         .then(res => {
    //             seteditPotluck(res.data);
    //             updatePotluck(res.data);
    //             push('/');
    //         })
    //         .catch(err => console.log('ERROR'));
    // };

    const handleChange = (evt) => {
        evt.preventDefault();
        setPotluck({
            ...potluck,
            [evt.target.name]: evt.target.value
        });
        setNextFoodItem({
            ...nextFoodItem,
            [evt.target.name]: evt.target.value
        })
    };

    // const onCheckboxChange = (evt) => {
    //     evt.persists();
    //     setPotluck({
    //         ...potluck,
    //         [evt.target.name]: evt.target.value
    //     });
    // };

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
                        placeholder='Host'
                        type="text"
                        name="host"
                        value={potluck.host}
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
                        onChange={handleChange}
                    />
                    <button className='Btn' onClick={addFood}>Add Item</button>
                    {
                        foodItems.map(x => { 
                            return  <p key={x.item_name}><span role="img" aria-label=''>🍗</span>  {x.item_name}<span role="img" aria-label=''> 🌭 </span><br /></p>
                        })
                    }
                </div>
            </form>
        </div>
    )
};