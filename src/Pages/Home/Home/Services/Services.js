import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../../assets/images/fluoride.png';
import Cavity from '../../../../assets/images/cavity.png';
import Whitening from '../../../../assets/images/whitening.png';
import DentelCare from '../DentelCare/DentelCare';

const Services = () => {
    const allService = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride,
        },
        {
            id: 2,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Cavity,
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Whitening,
        },
    ];


    return (
        <div className=''>
            <div className="text-center mt-20">
                <p className='text-primary font-bold uppercase'>Our Service</p>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className="">
                <div className="grid gap-[34px] mt-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                    {
                        allService.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }


                </div>
                <DentelCare></DentelCare>
            </div>
        </div>
    );
};

export default Services;