import * as yup from 'yup'


const formSchema = yup.object().shape({
    username: yup
    .string()
    .min(2, "Name must have atleast 2 characters")
    .required('Name is required'),
    password: yup
    .string()
    .min(6, "Password must be 6 characters long")
    
})

export default formSchema