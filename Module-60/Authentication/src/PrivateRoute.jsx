import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './components/Providers/UserProvider';

const PrivateRoute = ({children}) => {

    const {user} = useContext(UserContext);

    if(user){
        return children
    };
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;