import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, img, name, details, price, stock, supplier } = item;
    const navigate = useNavigate();
    const handleToItemsDetails = id => {
        navigate(`/inventory/${id}`)

    }


    return (
        <div id={'items'} className="col-sm-12 col-md-6 col-lg-4 g-4">
            <div className="card w-100 text-center mb-3" style={{ height: "650px" }}>
                <img style={{ width: "350px", height: "250px" }} src={img} className="card-img-top img-fluid img-thumbnail rounded mx-auto d-block" alt="..." />
                <div className="card-body mb-5" >
                    <h5 className="card-title">{name}</h5>
                    <p>{supplier}</p>
                    <p><small>Stock: {stock}</small></p>
                    <p><small>Price: {price}</small></p>
                    <p className="card-text">{details}</p>
                    <button onClick={() => handleToItemsDetails(_id)} className='btn btn-warning w-50'>Stock Update</button>
                </div>
            </div>
        </div>

    );
};

export default Items;
