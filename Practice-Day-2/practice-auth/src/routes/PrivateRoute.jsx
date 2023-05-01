import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)

    if (user) {
       return children
    }
    return
};

export default PrivateRoute;