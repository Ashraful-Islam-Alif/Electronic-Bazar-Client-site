import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Laptops from '../Products/Laptops/Laptops';
import SmartPhone from '../Products/SmartPhone/SmartPhone';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Laptops></Laptops>
            <SmartPhone></SmartPhone>
        </div>
    );
};

export default Home;