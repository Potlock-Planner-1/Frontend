import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from 'react-router-dom';

const nextPotluck = {
    name: '',
    host: '',
    location: '',
    date: '',
    time: ''
};

/* rendering all the details of a potluck on the webpage */ 
export default function PotluckDetails() {
    const [potluck, setPotluck] = useState(nextPotluck);
    const [items, setItems] = useState([]);
    const [guests, setGuests] = useState([]);
    // const [editFoodItem, seteditFoodItem] = useState(initialFoodItem);
    const params = useParams();

    // fetching potluck👍
    const fetchPotluck = () => {
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${params.id}`)
            .then(res => {
                setPotluck(res.data)
            })
            .catch(err => console.log('ERROR'));
    };

    const fetchFood= () => {
        axiosWithAuth()
            .get('https://potluckplanner1.herokuapp.com/api/items')
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => console.log(err.response));
    };

    const fetchClaimers = () => {
        axiosWithAuth()
            .get('https://potluckplanner1.herokuapp.com/api/guests')
            .then(res => {
                setGuests(res.data);
            })
            .catch(err => console.log('ERROR'));
    };

    useEffect(() => {
        fetchPotluck();
    }, []);

    useEffect(() => {
        fetchFood();
    }, [potluck]);

    useEffect(() => {
        fetchClaimers();
    }, [items]);

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

    // const handleChange = (evt) => {
    //     evt.persists();
    //     seteditFoodItem({
    //         ...editPotluck,
    //         [evt.target.name]: evt.target.value
    //     });
    // };

    // const onCheckboxChange = (evt) => {
    //     evt.persists();
    //     seteditPotluck({
    //         ...editPotluck,
    //         [evt.target.name]: evt.target.value
    //     });
    // };

    if (!potluck.id) {
        return <div>Loading potluck information...</div>;
    };
    console.log(items);
    console.log(potluck);
    return (
        <div className='potluck-details'>
            <h1>Potluck</h1>
            <h2>{potluck.name}</h2>
            <h2>{potluck.host}</h2>
            <p>{potluck.date}<br /></p>
            <p>{potluck.time}<br /></p>
            <p>{potluck.location}<br /></p>
            {
                items.filter(x => x.potluck_id === potluck.id).map(x => (
                      <p key={x.id}> {x.item_name} - {x.claimed ? 'claimed' : 'unclaimed'}<br/></p>))
            }
        </div>
    )
};
