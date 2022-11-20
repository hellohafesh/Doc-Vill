import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:7000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleAdmin = (id) => {
        fetch(`http://localhost:7000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfull');
                    refetch();
                } else {
                    toast.error('You Can Not Make Admin');
                }
            })
    }
    return (
        <div>
            <h3 className='text-2xl'>All Users</h3>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role ? <>Admin</> : <button onClick={() => handleAdmin(user._id)} className='btn btn-primary btn-xm'>Make Admin</button>}</td>
                                    <td><button className='btn btn-error btn-xm'>X</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;