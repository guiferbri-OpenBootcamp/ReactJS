import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Registerformik from '../../components/pure/forms/RegisterForm';

const RegisterPage = () => {

    const [credentials, setCredentials] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (credentials) {
            const cred = JSON.stringify(credentials);
            if (!localStorage.getItem('credentials')) {
                localStorage.setItem('credentials', cred);
            }
            navigate('/');
        }
    });

    function onSubmitReg(user) {
        setCredentials(user);
    }
    return (
        <div>
            <Registerformik onSubmit={onSubmitReg}></Registerformik>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default RegisterPage;
