import React  from 'react';
import { useHistory } from 'react-router-dom';
import { PotluckCardStyled } from '../styles/StyledPotluckList'

export default function Potluck({ potluck }) {
    const { push } = useHistory();
    
    return (
        <PotluckCardStyled>
            <button className='Btn' onClick={() => push(`/potluck/${potluck.id}`, potluck)}>
            <h1>Potluck</h1>
            <h2>{potluck.name}</h2>
            <h2>{potluck.host}</h2>
            <p>Date: {potluck.date}<br /></p>
            <p>Time: {potluck.time}<br /></p>
            <p>Location: {potluck.location}<br /></p>
            </button>
        </PotluckCardStyled>
    )
};