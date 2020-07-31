import React  from 'react';
import { useHistory } from 'react-router-dom';

export default function Potluck({ potluck }) {
    const { push } = useHistory();
    const words = ['apple', 'biryani', 'pasta', 'noodles', 'pizza', 'dimsum'];
    const randomNum = Math.floor(Math.random() * words.length);
    console.log('randomNum: ' + randomNum);
    const url = `https://source.unsplash.com/random/200x150/?${words[randomNum]}`;
    return (
        <div>
            <button className='Btn' onClick={() => push(`/potluck/${potluck.id}`, potluck)}>
            <img src={url} />
            <h2>{potluck.name}</h2>
            <h2>{potluck.host}</h2>
            <p>{potluck.date}<br /></p>
            <p>{potluck.time}<br /></p>
            <p>{potluck.location}<br /></p>
            </button>
        </div>
    )
};