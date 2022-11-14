import React from 'react';
import background from '../../../assets/images/bg.png';
import Chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero" style={{
            backgroundImage: `url('${background}')`
        }} >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt="" src={Chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;