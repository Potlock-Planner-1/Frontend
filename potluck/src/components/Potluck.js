import React  from 'react';
import { useHistory } from 'react-router-dom';

export default function Potluck({ potluck }) {
    const { push } = useHistory();
    
    return (
        <div>
            <button className='Btn' onClick={() => push(`/potluck/${potluck.id}`, potluck)}>
            <h2>{potluck.name}</h2>
            <h2>{potluck.host}</h2>
            <p>{potluck.date}<br /></p>
            <p>{potluck.time}<br /></p>
            <p>{potluck.location}<br /></p>
            </button>
        </div>
    )
};