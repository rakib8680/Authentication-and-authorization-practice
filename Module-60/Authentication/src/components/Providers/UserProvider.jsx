
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';


const auth = getAuth(app)


export const UserContext = createContext(null);

const UserProvider = ({ children }) => {


    const [user, SetUser] = useState(null)
    const [loading , setLoading ] = useState(true)




    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            SetUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, []);



    const logOut = () => {
        return signOut(auth)
        
    }


    const authInfo = {
        loading,
        user,
        signIn,
        logOut
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;