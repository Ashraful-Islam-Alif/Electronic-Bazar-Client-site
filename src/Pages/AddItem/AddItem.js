import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const AddItem = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'https://cryptic-castle-82329.herokuapp.com/myItems';
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
        toast('New Product added successfully')
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary text-center m-4 fw-bold'>Add Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Photo URL' className='mb-2' type="text" {...register("img")} />
                {/* <input type="text" name="email" className='mb-2' {...register("name", { required: true, maxLength: 20 })} /> */}
                <input placeholder='Email Address' disabled value={user?.email} className='mb-2' {...register("email")} />
                <input placeholder='Product Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Supplier Name' className='mb-2' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mb-2' {...register("details")} />
                <input className='btn btn-success' type="submit" value="Add New Product" />
            </form>
        </div>
    );
};

export default AddItem;