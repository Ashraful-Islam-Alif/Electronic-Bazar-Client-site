import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Laptops from '../Products/Laptops/Laptops';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Laptops></Laptops>
        </div>
    );
};

export default Home;