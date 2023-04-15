import React from 'react';

const User = ({user}) => {
    console.log(user)
    const {displayName, email , photoURL} = user
    return (
        <div className='  '>
            <img className='' src={photoURL} />
            <h1>{displayName}</h1>
            <p>{email}</p>
        </div>
    );
};

export default User;