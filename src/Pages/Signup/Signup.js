import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const handleSignup = data => {
        console.log(data);
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Create Success')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
                setSignupError(message);
            });
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log('user', data);
                navigate('/');
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className="w-96 p-7">
                <h3 className='text-3xl text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignup)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",
                            {
                                required: "Give Valid Password ",
                                minLength: { value: 3, message: 'Password must be 6 character' }
                            })} className="input input-bordered w-full " type="password" />
                        {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                        {signupError && <p className='text-red-700'>{signupError}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className=' btn text-white w-full mt-2' type="submit" value='Signup' />
                </form>
                <p className='mt-2'>Have Account <Link className='text-secondary underline mx-3' to='/login'>Login</Link></p>
                <div className="divider">OR</div>

                <button className=' btn btn-outline w-full'>Continue With Google </button>

            </div>
        </div>
    );
};

export default Signup;