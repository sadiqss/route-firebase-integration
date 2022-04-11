import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Knock Knock !</h2>
            <h5>{user ? user.disPlayName : 'NO onee'}</h5>
        </div>
    );
};

export default Products;