import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    console.log(itemId);
    const [item, setItem] = useState({});
    const [isChange, setIsChange] = useState(false);
    useEffect(() => {
        const url = `https://cryptic-castle-82329.herokuapp.com/inventory/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [isChange])
    const handleToDelivered = (id) => {
        const newStock = item.stock - 1
        console.log(id);
        // console.log(newStock);
        const url = `https://cryptic-castle-82329.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newStock }),
        })
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setIsChange(!isChange)
            })

    }
    const handleToRestock = (id) => {

        const newStock = item.stock + 1
        console.log(id);
        // console.log(newStock);
        const url = `https://cryptic-castle-82329.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newStock }),
        })
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setIsChange(!isChange)
            })



    }



    return (
        <div className='container'>
            <h2 className='text-center m-5'>Product Details</h2>

            <div class="card" style={{ width: "18rem;" }}>
                <img src={item.img} class="img-fluid " alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">Supplier: {item.supplier}</p>
                    <p class="card-text">Price: {item.price}</p>
                    <p class="card-text">Quantity: {item.stock}</p>
                    <p class="card-text">{item.details}</p>
                    <div className="mx-auto">
                        <button onClick={() => handleToDelivered(itemId)} type="button" class="btn btn-warning m-3">Delivered</button>
                        <button onClick={() => handleToRestock(itemId)} type="button" class="btn btn-success m-3">Restock</button>
                    </div>
                </div>
            </div>
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

export default ItemDetails;