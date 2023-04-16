import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './components/Providers/UserProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <progress className="  progress-error  w-72"></progress>
    }

    if (user) {
        return children
    };
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;