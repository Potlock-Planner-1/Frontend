// form for the login
import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import formSchema from './LoginSchema'
import * as yup from 'yup'
import {Link} from 'react-router-dom'

const LoginContainer = styled.div`
    display:flex;
    flex-flow: column;
    background-color: snow;
    border-radius: '10px';
    box-shadow: 5px, 2px;
    margin-right: 30%;
    margin-left: 30%;

    p{
        font-size: 0.8rem;
    }
    
`

const initialLoginValues={
    username: '',
    password: '',
}
const initialLoginErrors = {
    username: '',
    password: '',
}
// const inititalLoginButtonDisable = true;
export default function Login() {

    const [loginValues, setLoginValues] = useState(initialLoginValues)
    const [formErrors, setFormErrors] = useState(initialLoginErrors)
    // const [disableBtn, setDisableBtn] = useState(inititalLoginButtonDisable)


    const onSubmit = event => {
        event.preventDefault();
        getUserData();
    };

    const onInputChange = event => {
        const {name, value} = event.target
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: '',
          })
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        })
        setLoginValues({
          ...loginValues,
          [name]: value
        })
    }
    const getUserData = () => {
        axios.post('https://potluckplanner1.herokuapp.com/api/auth/login', {
            // login: http post with payload/body
            username: loginValues.username,
            password: loginValues.password
        })
        .then( res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => {
            console.log(`The error is ${err}`)
        })
    }

    return (
        <LoginContainer className="login-container">
            <label>Username:
                <input 
                type='text'
                placeholder='Username'
                name='username'
                value={loginValues.username}
                onChange={onInputChange}
                />
                </label><br/>
            <label>Password:
                <input 
                type='password'
                placeholder='Password'
                name='password'
                value={loginValues.password}
                onChange={onInputChange}
                />
            </label><br/>
            <Link to='/register'><p>Create an account</p></Link>
            <button id='login-button' onClick={onSubmit}>Log in</button>
        </LoginContainer>
    )
}