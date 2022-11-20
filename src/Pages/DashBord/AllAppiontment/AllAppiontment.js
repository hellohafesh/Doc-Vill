import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllAppiontment = () => {

    const { data: appionments = [] } = useQuery({
        queryKey: ['appionments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:7000/appiontment');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl">All Appiontments</h2>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Pataint Name</th>
                                <th>Email</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time Slots</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appionments.map((appionment, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{appionment.name}</td>
                                    <td>{appionment.email}</td>
                                    <td>{appionment.treatment}</td>
                                    <td>{appionment.date}</td>
                                    <td>{appionment.slot}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAppiontment;