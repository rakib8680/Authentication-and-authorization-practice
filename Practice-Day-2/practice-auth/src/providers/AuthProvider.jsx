import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const user = null
    const auth = getAuth(app)



    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;