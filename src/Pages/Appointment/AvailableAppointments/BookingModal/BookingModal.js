import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            date,

            treatment: treatment.name,
            slot,
            name,
            email,
            phone

        }
        console.log(booking);
        setTreatment(null)

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" value={date} disabled className="input input-bordered input-primary w-full  " />
                        <select name="slot" className="select select-primary select-bordered w-full ">

                            {treatment.slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>
                            )}
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full  " />
                        <input type="text" name="email" placeholder="Your Email" className="input input-bordered input-primary w-full  " />
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered input-primary w-full  " />
                        <input type="Submit" value="Submit" className=" btn w-full  " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;