import React from 'react';

const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Other'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}</p>
                <div className="card-actions justify-end">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(appointment)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary  to-secondary text-white">Book Appiontment</label>
                </div>
            </div>
        </div >
    );
};

export default AppointmentOption;