import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'
import { RegStyles, ErrStyles } from '../styles/StyledRegistration'

// initial values

const initialFormValues = {

    username: '',
    password: '',

    }

const initialFormErrors = {

    username: '',
    password: '',

    }

const initialUsers = []
const initialDisabled = true    

export default function Registration(props) {
    //props destructuring

    // state
    const [users, setUsers] = useState(initialUsers)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(initialDisabled);

    //additional hooks (not side effects)
    const history = useHistory()


    // axios calls
    const postNewUser = newUser => {
        Axios.post('https://potluckplanner1.herokuapp.com/api/auth/register', newUser)
        .then(res => {
          setUsers([res.data, ...users])
          localStorage.setItem('userId', res.data.data.id)
          localStorage.setItem('username', res.data.data.username)
          setFormValues(initialFormValues)
          console.log(res.data, "data sent to server!")
          history.push("/login");
        })
        .catch(err => {
          console.log("Snake eyes")
        })
      }

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

    const submit = (e) => {
        e.preventDefault()
        const newUser = {
          username: formValues.username.trim(),
          password: formValues.password.trim(),
        } 
        postNewUser(newUser)
      }

    //side effects

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
          setDisabled(!valid);
        });
      }, [formValues]);

    // return statement
    return (
        <form onSubmit={submit}>
        <RegStyles className='form-input'>
            <h2>Create An Account</h2>
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
                type='password'
                />
            </label>
            <Link to='/login'><p>Login</p></Link>
            <button id="register-btn" disabled={disabled}>Register</button>
            </RegStyles>
            <ErrStyles className='errors'>
            <p id="para-one">{formErrors.username}</p>
            <p id="para-two">{formErrors.password}</p>
        </ErrStyles>
        </form>
    )

}   