import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: comment, location } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
                <div className="flex mt-10 items-center">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={img} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h1 className='font-bold'>{name}</h1>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;