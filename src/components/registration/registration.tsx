import { Formik } from "formik"
import * as yup from "yup"

interface IintialValues {
    firstName: string,
    lastName: string,
    email:string,
    password:string,
    confirmPassword:string,
}

export const RegistrationForm = () =>{

    const handleRegistration = (firstName:string, lastName:string, email:string,
         password:string, confirmPassword:string ) => {
        console.log("Registration true")
    }

    const ValidationsSchema = yup.object().shape({
        firstName:yup.string().typeError("Enter true Name").required('required'),
        LastName:yup.string().typeError("Enter true LastName").required('required'),
        email:yup.string().email("Enter true email").required('required'),
        password:yup.string().typeError("Enter true password").required('required').min(6,'Min 6 symbols'),
        confirmPassword:yup.string().typeError("Enter true passwod").required('required').oneOf([yup.ref('password')],'incorrect'),
    })

    return(
        <div>
            <Formik 
            initialValues={{
                firstName: '',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:'',
            }}
            validateOnBlur
            onSubmit={(values:any)=> {
                handleRegistration(values.firstName, values.lastName,
                     values.email, values.password, values.confirmPassword )
            }}
            validationSchema={ValidationsSchema}
            >
                {({ values, handleBlur,touched, handleChange, handleSubmit, isValid, dirty, errors })=> (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text"
                            name={'firstName'}
                            onChange={handleChange}
                            onBlur = {handleBlur}
                            value={values.firstName}
                            />
                            { touched.firstName && errors.firstName && 
                            <p>{ String(errors.firstName) }</p> }
                        </div>
                        <div>
                            <input 
                            type="text"
                            name={'lastName'}
                            onChange={handleChange}
                            onBlur = {handleBlur}
                            value={values.lastName}
                            />
                            { touched.lastName && errors.lastName && 
                            <p>{ String(errors.lastName) }</p> }
                        </div>
                        <div>
                            <input 
                            type="text"
                            name={'email'}
                            onChange={handleChange}
                            onBlur = {handleBlur}
                            value={values.email}
                            />
                            { touched.email && errors.email && 
                            <p>{ String(errors.email) }</p> }
                        </div>
                        <div>
                            <input 
                            type="text"
                            name={'password'}
                            onChange={handleChange}
                            onBlur = {handleBlur}
                            value={values.password}
                            />
                            { touched.password && errors.password && 
                            <p>{ String(errors.password) }</p> }
                        </div>
                        <div>
                            <input 
                            type="text"
                            name={'confirmPassword'}
                            onChange={handleChange}
                            onBlur = {handleBlur}
                            value={values.confirmPassword}
                            />
                            { touched.confirmPassword && errors.confirmPassword && 
                            <p>{ String(errors.confirmPassword) }</p> }
                        </div>
                        <div>
                            <button type="submit" disabled={ !isValid && !dirty } >
                                Registration
                            </button>
                        </div>
                    </form>
                )}
            </Formik>                        
        </div>
    )
}