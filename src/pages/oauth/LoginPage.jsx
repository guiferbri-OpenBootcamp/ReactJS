import React, { useState, useEffect } from 'react';
import Loginformik from '../../components/pure/forms/LoginForm';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [credentials, setCredentials] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('credentials')) {
            setCredentials(localStorage.getItem('credentials'));
        }
        if (credentials) {
            const cred = JSON.stringify(credentials);
            if (!localStorage.getItem('credentials')) {
                localStorage.setItem('credentials', cred);
            }
            navigate('/');
        }
    });

    function onSubmitLogin(credentials) {
        setCredentials(credentials);
    }
    return (
        <div>
            <Loginformik onSubmit={onSubmitLogin}></Loginformik>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default LoginPage;
