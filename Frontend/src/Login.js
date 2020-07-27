// form for the login
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup'


const inititalLoginValues={
    username: '',
    password: '',
}

const initialLoginErrors = {
    username: '',
    password: '',
}

export default function Login() {

    const onSubmit = event => {
        event.preventDefault();
    }
    const onInputChange = event => {
    
    }
    const getUserData = () => {
    
    }
    useEffect(() => {
        getUserData()
    }, [])
    

    return (
        <div className="login-container">
            <label>Username:
                <input 
                type='text'
                placeholder='Username'
                name='username'
                />
                </label><br/>
            <label>Password:
                <input 
                type='password'
                placeholder='Password'
                name='password'
                />
            </label><br/>
            <button>Login</button>
            <p>Create an account</p>
        </div>
    )
}