import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment.name}</h3>
                    <form className='grid grid-cols-1 gap-4'>
                        <input type="text" value={format(selectedDate, 'PP')} disabled className="input input-bordered input-primary w-full  " />
                        <select className="select select-primary select-bordered w-full ">

                            {treatment.slots.map(slot => <option value={slot} key={slot}>{slot}</option>
                            )}
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full  " />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full  " />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full  " />
                        <input type="Submit" value="Submit" className=" btn w-full  " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;