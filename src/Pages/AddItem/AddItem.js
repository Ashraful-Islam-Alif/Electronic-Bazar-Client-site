import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary text-center m-4 fw-bold'>Add Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Photo URL' className='mb-2' type="text" {...register("img")} />
                <input placeholder='Product Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Supplier Name' className='mb-2' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mb-2' {...register("details")} />
                <input className='btn btn-success' type="submit" value="Add New Product" />
            </form>
        </div>
    );
};

export default AddItem;