import React, { useState, useEffect } from "react";
import Potluck from './Potluck';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const PotluckList = () => {
    const [potluckList, setpotluckList] = useState([]);

    const fetchPotluckList = () => {
        axiosWithAuth()
            .get('https://potluckplanner1.herokuapp.com/api/users/potlucks')
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
        <div className='potluck-list'>
            {
                potluckList.map(x => (
                    <div key={x.id}>
                        <Potluck potluck={x} />
                    </div>
                ))
            }
        </div>
    )
};

export default PotluckList;