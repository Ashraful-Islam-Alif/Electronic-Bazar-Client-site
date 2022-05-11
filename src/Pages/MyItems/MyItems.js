import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/inventoryManage`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleToDelete = id => {
        const proceed = window.confirm('Will you delete a products???...')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (

        <div className=" container">
            <h2 className='text-primary text-center m-4 fw-bold m-5 animate__animated animate__heartBeat'>My Items</h2>
            <div className=' mx-auto row row-cols-1  row-cols-lg-3 row-cols-md-2 g-4'>
                {
                    products.map(product =>

                        <div class="col">
                            <div class="card h-100">
                                <img style={{ width: "350px", height: "250px" }} src={product.img} class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">{product.name}</h5>
                                    <p class="card-text text-center">{product.supplier}</p>
                                    <p class="card-text text-center">{product.details}</p>
                                </div>
                                <div className='mx-auto mb-3'>
                                    <button onClick={() => handleToDelete(product._id)} className='btn btn-danger '>Delete</button>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>


        </div >
    );
};

export default MyItems;