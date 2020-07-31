// form for the login
import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import formSchema from './LoginSchema'
import * as yup from 'yup'
import {Link, useHistory} from 'react-router-dom'


// styles for the login
const LoginContainer = styled.div`
    text-align: center;
    display:flex;
    flex-flow: column;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 5px, 2px;
    margin-right: 30%;
    margin-left: 30%;
    background-color: mistyrose;
    margin-top: 15%;

    p{
        font-size: 0.8rem;
    }
    button{
        margin: 20px 30%;
    }
    button{
        background-color: wheat;
        border:0.5px solid black;
    }
    .loginError{
        color:red;
        font-size:0.8rem;
    }
    #passInput{
        margin-left: 0.6%;
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

export default function Login() {
    const { push } = useHistory();
    const [loginValues, setLoginValues] = useState(initialLoginValues)
    const [formErrors, setFormErrors] = useState(initialLoginErrors)


    const onSubmit = event => {
        event.preventDefault();
        getUserData();
        setLoginValues(initialLoginValues)
    };

    const onInputChange = event => {
        const {name, value} = event.target
        // some validation, Joe needs for MVP don't delete please
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
        // axios.post('https://potluckplanner1.herokuapp.com/api/auth/login', {
        //     // login: http post with payload/body
        //     username: loginValues.username,
        //     password: loginValues.password
        // })
        // .then( res => {
        //     console.log(res)
        //     localStorage.setItem('token', res.data.token);
        //     push('/');
        // })
        // .catch(err => {
        //     console.log(`The error is ${err}`)
        // })
        axiosWithAuth()
        .post('api/auth/login', loginValues)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', loginValues.username)
            axiosWithAuth()
            .get('https://potluckplanner1.herokuapp.com/api/users')
            .then(res => {
                res.data.map(x => {
                    if(x.username === loginValues.username) {
                        localStorage.setItem('userId', x.id)
                        console.log('Found the user');
                    }
                })
            })
            push("/potluck-list") //<-- this is really the only thing I changed, good job on your axios call!
        })
        .catch(err => console.log(`The error is ${err}`))
    }

    return (
        <LoginContainer className="login-container">
            <h2>LOGIN</h2>
            <label>Username:
                <input 
                type='text'
                placeholder='Username'
                name='username'
                value={loginValues.username}
                onChange={onInputChange}
                />
                <div className="loginError">{formErrors.username}</div>
                </label><br/>
            <label>Password:  
                <input id="passInput"
                type='password'
                placeholder='Password'
                name='password'
                value={loginValues.password}
                onChange={onInputChange}
                />
                <div className="loginError">{formErrors.password}</div>
            </label><br/>
            <Link to='/register'><p>Create an account</p></Link>
            <button id='login-button' onClick={onSubmit}>Log in</button>
        </LoginContainer>
    )
}