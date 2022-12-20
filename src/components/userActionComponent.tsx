
import React, { useEffect, useState } from "react";
import { Formik, FormikErrors } from 'formik';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useSelector } from 'react-redux'
import { userActions, userSelector } from '../store/reducers'
import { useNavigate, useParams } from "react-router-dom";
import { userDetails } from '../types/formType'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorComponent from "./errorComponent";


const UserAction = () => {

    var [title, setTitle] = useState('Add')
    const [buttonName, setButtonName] = useState('Submit')
    const updatedUserDetails = useSelector(userSelector)
    const dispatch = useAppDispatch();
    const history = useNavigate();
    const { id } = useParams();
    const { user, error, status } = updatedUserDetails
    let initialValue = {
        id: user.id ? user.id : "",
        email: user.id ? user.email : "",
        name: user.id ? user.name : "",
        address: user.id ? user.address : ""
    }




    useEffect(() => {

        if (id) {
            setTitle('Edit')
            setButtonName('Update')
            dispatch(userActions.fetchUserByIdRequest(id))
           
        } else{
            
        }
    }, [id])


    const handleBackChange = () => {
        history("/")
        dispatch(userActions.fecthAllUserRequest())
    }

   
    return <div>
             <Formik
                enableReinitialize={true}
                initialValues={initialValue}
                validate={(values: userDetails) => {
                    const errors: FormikErrors<userDetails> = {}
                    if (!values.id) {
                        errors.id = "Required"
                    } if (!values.email) {
                        errors.email = "Required"
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    } if (!values.name) {
                        errors.name = "Required"
                    } else if (!/[a-zA-Z\\s]*$/i.test(values.name)) {
                        errors.name = 'Invalid name';
                    } if (!values.address) {
                        errors.address = "Required"
                    }

                    return errors;
                }

                }
                onSubmit={
                    (values) => {

                        if (id) {
                            dispatch(userActions.updateUserRequest(values))
                            toast.success('Updated Successfully!', {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 1000,
                            });
                            setTimeout(() => history("/"), 2000)
                        } else {
                            dispatch(userActions.addUserRequest(values))
                            toast.success('Saved Successfully !', {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 1000,
                            });
                            setTimeout(() => history("/"), 2000)
                        }

                    }
                }



            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur
                }) => (
                    <div>
                            {error?<ErrorComponent error={error}/>:
                            <div>
                        <h1 className="center-container header-text-color">{title} Form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="center-container">
                                <div className="flex-container box-shadow is-flex is-flex-direction-column">
                                    <div className="field-content">
                                        <label htmlFor="email">Id</label>
                                        <input
                                            type="id"
                                            name="id"
                                            disabled={id?true:false}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.id}
                                            className={errors.id && touched.id ? "err-input-border" : ''}
                                        ></input>
                                        <span className="error-text-color">{errors.id && touched.id && errors.id}</span>
                                    </div>
                                    <div className="field-content">
                                        <label htmlFor="email"> Email </label>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={errors.email && touched.email ? "err-input-border" : ''}
                                        >
                                        </input>
                                        <span className="error-text-color">{errors.email && touched.email && errors.email}</span>
                                    </div>

                                    <div className="field-content">
                                        <label htmlFor="email">  Name </label>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className={errors.name && touched.name ? "err-input-border" : ''}
                                        />
                                        <span className="error-text-color">{errors.name && touched.name && errors.name}</span>
                                    </div>

                                    <div className="field-content">
                                        <label htmlFor="email" style={{ display: "block" }}> Address </label>
                                        <textarea
                                            name="address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                            className={errors.address && touched.address ? "err-input-border" : ''}
                                        />
                                        <span className="error-text-color">{errors.address && touched.address && errors.address}</span>
                                    </div>
                                    <div>  <button type="submit" className="submit-button">{buttonName}</button>
                                        <button type="submit" className="submit-button mleft back" onClick={handleBackChange}>Back</button>
                                        <ToastContainer />
                                        </div>
     
                                </div>
                            </div>

                        </form>
                        </div>
}
                    </div>
                )}
            </Formik>
    </div>
}

export default UserAction
