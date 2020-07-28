import React from 'react'
import { ListStyles } from '../styles/StyledList'

export default function ({potluck}) {
    if(!potluck) {
        return <h2>Sorry cowboy, still riding!</h2>
    }

    return (
        <ListStyles className='user-container'>
                <h2>{potluck.name}</h2>
                <p>{potluck.date}</p>
                <p>{potluck.time}</p>
                <p>{potluck.host}</p>
                <p>{potluck.location}</p>
        </ListStyles>
    )
}