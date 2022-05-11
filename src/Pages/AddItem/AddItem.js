import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto'>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItem;