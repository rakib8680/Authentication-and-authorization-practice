import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../firebase.config';

// 1. create auth 
const auth = getAuth(app)

const Register = () => {

    // show error 
    const [error, setError] = useState('')

    // show success 
    const [success, setSuccess] = useState('')


    const handleSubmit = event => {
        // prevent auto refresh site during submit 
        event.preventDefault();
        setSuccess('')
        setError('')


        //2. collect form data 
        const email = event.target.email.value;
        const password = event.target.password.value;

        // password validation check 
        if (! /(?=.*[A-Z])/.test(password)) {
            setError('please provide  one UpperCase word')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide one number  ')
            return
        }
        else if (password.length < 6) {
            setError('Please use at least 6 characters')
            return
        }
        // 3.create user in firebase 
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                verificationEmail(user)
                setError('')
                event.target.reset()
                setSuccess('account created successfully')
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            });

        const verificationEmail = user => {
            sendEmailVerification(user)
                .then(() => {
                    alert("Verification code sent ")
                })
        }


    }

    return (
        <div>
            <h3>This is Register</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Enter your email' required /> <br />
                <input type="password" name="password" id="password" placeholder='Enter password' required /> <br />
                <input type="submit" value="submit" />
                <p>{error}</p>
                <p>{success}</p>
            </form>
        </div>
    );
};

export default Register;