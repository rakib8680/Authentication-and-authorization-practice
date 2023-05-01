import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // register new user 
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // set current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, []);

    // sign in user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // signOut user 
    const logOutUser = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        registerUser,
        logOutUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;