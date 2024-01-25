import { Formik } from "formik"
import * as yup from "yup"

import '../../index.scss'
import { NavLink, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../redux/store/store"
import { setAuth } from "../../redux/reducers/reducure"

export const LoginForm = () =>{

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleLogin = (email:any, password:any) => {
        console.log('Вход выполнен')
        dispatch(setAuth())
        navigate('/')
    }

    const ValidationsSchema = yup.object().shape({
        password:yup.string().typeError('Type not string').required('required').min(8,'Min 6 symbols'),
        email:yup.string().email('Need Email').required('required'),
    })
    return(
        <div className='container_login'>
            <div className='wrapper'> 
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
                                <label className='text_field'>
                                    <span>Email</span>
                                <input 
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email &&
                                <p>{String(errors.email)}</p>}
                                </label>
                            </div>
                            <div>
                                <label className='text_field'>
                                    <span>Password</span>
                                <input
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} 
                                />
                                {touched.password && errors.password &&
                                <p>{String(errors.password)}</p>}
                                </label>
                            </div>
                            <div>
                                <button type="submit" disabled={!isValid || !dirty}>Login</button>
                            </div>
                            <div className="create_acc">
                                <NavLink to="/registration" className="nav-link">Don't have an account? Sign up</NavLink>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}