import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginEmailPassword } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        loginEmailPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(from);

                navigate(from, { replace: true });
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
                setLoginError(message);
            });
    };
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className="w-96 p-7">
                <h3 className='text-3xl text-center'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        {loginError && <p className='text-red-700'>{loginError}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className=' btn text-white w-full mt-2' type="submit" value='login' />
                </form>
                <p className='mt-2'>New To Doc-Vill <Link className='text-secondary underline mx-3' to='/signup'>Create Account</Link></p>
                <div className="divider">OR</div>

                <button className=' btn btn-outline w-full'>Continue With Google </button>

            </div>
        </div>
    );
};

export default Login;