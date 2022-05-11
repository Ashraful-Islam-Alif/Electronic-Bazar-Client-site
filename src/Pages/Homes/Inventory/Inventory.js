import React, { useEffect, useState } from 'react';
import Items from './Items/Items';

const Inventory = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='container mb-5'>
            <h1 className='text-center m-5'>Inventory</h1>

            <div className="row ">
                {
                    items.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>

        </div>
    );
};

export default Inventory;