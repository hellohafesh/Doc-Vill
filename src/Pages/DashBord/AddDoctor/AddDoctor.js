import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const { data: specialites, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:7000/appiontmentSpeciality')
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = (data) => {
        const image = data.image[0];

        const fromData = new FormData();
        fromData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url,
                    }
                    fetch('http://localhost:7000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} Is Added Successfull`);
                            navigate('/dashbord/mannageDoctors');
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-7 w-96'>
            <h3 className='font-bold text-2xl'>Add A New Doctor</h3>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: "Name Is Required" })} className="input input-bordered w-full " type="text" />
                    {errors.name && <p role="alert" className='text-red-700'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email Is Required" })} className="input input-bordered w-full " type="email" />
                    {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select
                        {...register("speciality", { required: "Speciality Is Required" })}
                        className="select input-bordered select-ghost w-full max-w-xs">

                        {
                            specialites.map(specialiy => <option key={specialiy._id} value={specialiy.name}>{specialiy.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control mb-4 w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("image", { required: "Image Is Required" })} className="input input-bordered w-full " type="file" />
                    {errors.image && <p role="alert" className='text-red-700'>{errors.image?.message}</p>}
                </div>
                <input className=' btn text-white w-full mt-2' type="submit" value='Add A Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;