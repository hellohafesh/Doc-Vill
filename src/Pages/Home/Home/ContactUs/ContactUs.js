import React from 'react';
import appointment from '../../../../assets/images/appointment.png';
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='p-10' style={{ background: `url(${appointment})` }}>
            <div className="text-center">
                <h4 className='text-primary font-bold'>Contact Us</h4>
                <h1 className='text-white text-3xl'>Stay connected with us</h1>
            </div>
            <div className="text-center mt-16">
                <input type="text" placeholder="Email Adress" className="input input-bordered input-md w-full max-w-xs" /> <br /><br />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs" /><br /><br />
                <input type="text" placeholder="Your Massage" className="input input-bordered h-24 w-full max-w-xs" /><br /><br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>

        </section>
    );
};

export default ContactUs;