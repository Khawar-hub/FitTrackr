import * as yup from 'yup'

export const LoginFormValidation = yup.object().shape({
    email: yup.string().required("Email is required.").email("Invalid Email"),
    password: yup.string().required("Password is  required").min(6, "Password too short")
})
export const SignUpFormValidation = yup.object().shape({
    name: yup.string().required("Name is required.").min(6, "Name too short"),
    email: yup.string().required("Email is required.").email("Invalid Email"),
    password: yup.string().required("Password is  required").min(6, "Password too short"),
    confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    
})
export const AddWorkoutFormValidation = yup.object().shape({
    distance: yup.string().required("distance is required."),
    duration: yup.string().required("Duration is  required"),
    repititions: yup.string().required("Repetitions is  required"),
    
    
})