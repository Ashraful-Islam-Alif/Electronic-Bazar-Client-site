import React from 'react';
import laptop1 from '../Laptops/laptop1.jpg'
import laptop2 from '../Laptops/laptop2.jpg'
import laptop3 from '../Laptops/laptop3.jpg'
import laptop4 from '../Laptops/laptop4.jpg'
const Laptops = () => {
    return (
        <div className='container'>
            <h2 className='text-center m-5'>Laptops</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={laptop1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGN63) Space Gray</h5>
                            <p className="card-text"><small>Price: $1499</small></p>
                            <h6 className='text-success'> <span className='text-dark'>Status:</span> In Stock</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={laptop2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Apple MacBook Pro 14-Inch M1 Pro Chip, 16GB RAM, 512GB SSD (MKGP3LL/A) Space Gray 2021</h5>
                            <p className="card-text"><small>Price: $1999</small></p>
                            <h6 className='text-success'> <span className='text-dark'>Status:</span> In Stock</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={laptop3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HP 14s-dq4458TU Core i5 11th Gen 14" FHD Laptop</h5>
                            <p className="card-text"><small>Price: $1099</small></p>
                            <h6 className='text-success'> <span className='text-dark'>Status:</span> In Stock</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={laptop4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HP 15s-du3561TU Core i5 11th Gen 15.6" FHD Laptop</h5>
                            <p className="card-text"><small>Price: $900</small></p>
                            <h6 className='text-danger'> <span className='text-dark'> Status:</span>Stock Out</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Laptops;