import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {

    const [appointmentTime, setAppointmentTime] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('AppointmentTime.json')
            .then(res => res.json())
            .then(data => setAppointmentTime(data))
    }, [])
    return (
        <section className='my-16'>
            <h4 className='font-bold text-center mt-16 text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</h4>
            <div className="grid mt-16 gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                {
                    appointmentTime.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&

                <BookingModal selectedDate={selectedDate} treatment={treatment}></BookingModal>
            }
        </section >
    );
};

export default AvailableAppointments;