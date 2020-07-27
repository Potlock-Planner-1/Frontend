import React from 'react'
import Axios from 'axios'
import * as yup from 'yup'

// initial values

const initialFormValues = {

    username: '',
    password: '',

    }

const initialFormErrors = {

    username: '',
    password: '',

    }



export default function Registration(props) {
    const { 
        values, 
        submit, 
        inputChange, 
        errors, 
        disabled 
    } = props

    // state

    // axios calls

    // form validation via yup

    // form functionality

    // return statement
    return (
        <form>
        <div className='form-input'>
            <label>Name:&nbsp;
                <input 
                placeholder='your name here'
                name='username'
                type='text'
                />
            </label>
            <label>Password:&nbsp;
                <input 
                placeholder='your email here'
                name='password'
                type='text'
                />
            </label>
            <button>Register</button>
            </div>
        </form>
    )

}   