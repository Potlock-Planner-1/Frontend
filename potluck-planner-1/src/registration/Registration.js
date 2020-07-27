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

const initialDisabled = true    

export default function Registration(props) {
    //props destructuring

    // state
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(initialDisabled)


    // axios calls

    // form validation via yup
    const inputChange = (e) => {
        const { name, value } = e.target

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

    // form functionality

    // .a for new users

    // const submit = (e) => {
        // e.preventDefault()
    //     const newUser = {
    //       username: formValues.username.trim(),
    //       password: formValues.password.trim(),
    //     } 
    //     postNewUser(newUser)
    //   }

    //side effects

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
          setDisabled(!valid);
        });
      }, [formValues]);

    // return statement
    return (
        <form /*onSubmit={onSubmit} */>
            <div className='errors'>
            <p id="para-one">{formErrors.username}</p>
            <p id="para-two">{formErrors.password}</p>
        </div>
        <div className='form-input'>
            <label>Name:&nbsp;
                <input
                onChange={inputChange} 
                placeholder='your name here'
                name='username'
                type='text'
                />
            </label>
            <label>Password:&nbsp;
                <input 
                onChange={inputChange} 
                placeholder='your password here'
                name='password'
                type='text'
                />
            </label>
            <button disabled={disabled}>Register</button>
            </div>
        </form>
    )

}   