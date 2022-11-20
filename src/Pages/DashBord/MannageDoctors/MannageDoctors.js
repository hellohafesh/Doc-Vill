import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';



const MannageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null)
    }



    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:7000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:7000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                if (data.deletedCount > 0) {
                    toast.success(`Doctor ${doctor.name} Delete Successfull`);
                } else {
                    toast.error(`Doctor ${doctor.name} Delete Unsuccessfull`);
                }
            })

    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold'>Mannage Doctors</h2>
            <h2 className='font-bold '>Total {doctors?.length} Doctors</h2>

            <div className="overflow-x-auto mt-5 w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    No
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Specialiy</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.length &&
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>
                                    <label>
                                        {i + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12 h-12">
                                            <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.speciality}
                                </td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete</label>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are You Sure`}
                    description={`If you delete ${deletingDoctor.name}. It can not be Undone`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }

        </div>
    );
};

export default MannageDoctors;