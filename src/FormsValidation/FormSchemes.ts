import * as yup from 'yup';

export const FirstFormValidation = yup.object({
    firstName: yup.string()
                  .min(4, "First Name must be at least 4 characters")
                  .required("First Name is required"),

    lastName: yup.string()
                 .min(4, "Last Name must be at least 4 characters")
                 .required("Last Name is required")
})

export const SecondFormValidation = yup.object({
    email: yup.string()
                  .email("Invalid email")
                  .required("Email is required"),

    password: yup.string()
                 .min(8, "Password must be at least 8 characters")
                 .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must include at least one letter and one number')
                 .required("Password is required"),

    password2: yup.string()
                  .oneOf([yup.ref("password")], "Passwords must match")
                 .required("Confirm Password is required"),                   
})