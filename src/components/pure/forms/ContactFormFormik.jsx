import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const ContactFormFormik = ({add}) => {
    const initialContact = new Contact('','','', false);

    const newContactSchema = Yup.object().shape(
        {
            firstname: Yup.string().required('FirstName is required'),
            lastname: Yup.string().required('LastName is required'),
            email: Yup.string().email('Invalid email format').required('Email is required')
        }
    );
    
    return (
        <div>
            <h4>Create Contact Formik</h4>
            <Formik initialValues = { initialContact } validationSchema = {newContactSchema} 
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    add(values);
                }}
            >
                {({ isSubmitting}) => (
                        <Form>
                            <label htmlFor="firstname">FirstName</label>
                            <Field id="firstname" name="firstname" placeholder="FirstName" />
                            <ErrorMessage name="firstname" component="div" />

                            <label htmlFor="lastname">LastName</label>
                            <Field id="lastname" name="lastname" placeholder="LastName" />
                            <ErrorMessage name="lastname" component="div" />

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="email@email.com" />
                            <ErrorMessage name="email" component="div" />

                            <button type="submit">New Contact</button>
                            {isSubmitting ? (<p>Creating contact...</p>): null}
                        </Form>
                )}                
            </Formik>
        </div>
    );
};


ContactFormFormik.propTypes = {
    add: PropTypes.func.isRequired,
};


export default ContactFormFormik;
