import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import ContactUs from './ContactUs/ContactUs';
import MakeAppionment from './MakeAppionment/MakeAppionment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <MakeAppionment></MakeAppionment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;