import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import formSchema from '../validation/formSchema'
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
    //props destructuring

    // state
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formValues, setFormValues] = useState(initialFormValues)

    // axios calls

    // form validation via yup
    const inputChange = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: ""
          })
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        })
      
        setFormValues({
          ...formValues,
          [name]: value 
        })
      }

      const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value)
    }
    // form functionality

    //side effects

    // return statement
    return (
        <form>
            <div className='errors'>
            <p id="para-one">{formErrors.username}</p>
            <p id="para-two">{formErrors.password}</p>
        </div>
        <div className='form-input'>
            <label>Name:&nbsp;
                <input
                onChange={onInputChange} 
                placeholder='your name here'
                name='username'
                type='text'
                />
            </label>
            <label>Password:&nbsp;
                <input 
                onChange={onInputChange} 
                placeholder='your password here'
                name='password'
                type='text'
                />
            </label>
            <button>Register</button>
            </div>
        </form>
    )

}   