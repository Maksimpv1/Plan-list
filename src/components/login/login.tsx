import { Formik } from "formik"
import * as yup from "yup"

export const LoginForm = () =>{
    const handleLogin = (email:any, password:any) => {
        console.log('Вход выполнен')
    }

    const ValidationsSchema = yup.object().shape({
        password:yup.string().typeError('Type not string').required('required').min(8,'Min 6 symbols'),
        email:yup.string().email('Need Email').required('required'),
    })
    return(
        <div>
            <h2>Login Form</h2>
            <Formik
            initialValues={{
                email:'',
                password:'',
            }}
            validateOnBlur
            onSubmit={ (values:any) => {
                handleLogin(values.email, values.password)
            }}
            validationSchema={ ValidationsSchema }
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {touched.email && errors.email &&
                            <p>{String(errors.email)}</p>}
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password} 
                            />
                            {touched.password && errors.password &&
                            <p>{String(errors.password)}</p>}
                        </div>
                        <div>
                            <button type="submit" disabled={!isValid && !dirty}>Login</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}