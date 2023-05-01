import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
        <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace to='/login'></Navigate>
};

export default PrivateRoute;