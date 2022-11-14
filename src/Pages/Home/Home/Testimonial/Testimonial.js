import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',

        },
        {
            id: 2,
            name: 'Mark Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',

        },
        {
            id: 3,
            name: 'Winson Aslton',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',

        },

    ]
    return (
        <section className='mt-16 mb-32'>
            <div className="flex justify-between">
                <div className="">
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl ">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='lg:w-40 md:w-30 w-20' src={quote} alt="" />
                </figure>
            </div>
            <div className="grid gap-[25px] mt-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonial;