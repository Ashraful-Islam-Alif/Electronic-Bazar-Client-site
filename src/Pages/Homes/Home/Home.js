import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <div className='container d-flex justify-content-center mt-4'>
                <Link to="/inventory">
                    <Button className="is-rounded btn btn-warning text-white ">
                        <span>Manage Inventories</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;