import React from 'react';
import Card from './Card';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCard = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'We Are Open at 10.00 am to 5.00 pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our location',
            description: '12/3 (5th) , Squre Hospital ,Panthopath,Dhaka',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Tel : +96533623 , Call : +8801153-128862 ',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary  to-secondary'
        },
    ]
    return (
        <div className='grid mt-16 gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default InfoCard;