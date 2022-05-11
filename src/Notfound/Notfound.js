import React from 'react';
import notfound from '../images/notfound.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img className='img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;