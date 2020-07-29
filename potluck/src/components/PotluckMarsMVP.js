import React from 'react'
import { ListStyles } from '../styles/StyledList'

export default function ({potluck}) {
    if(!potluck) {
        return <h2>Sorry cowboy, still riding!</h2>
    }

    return (
        <ListStyles className='user-container'>
                <h2>{potluck.name}</h2>
                <ul>
                    <li>{potluck.date}</li>
                    <li>{potluck.time}</li>
                    <li>{potluck.host}</li>
                    <li>{potluck.location}</li>
                </ul>

        </ListStyles>
    )
}