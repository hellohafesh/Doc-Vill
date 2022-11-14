import React from 'react';

const Card = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div>


            <div className={`card md:card-side ${bgClass} p-6 text-white shadow-xl`}>
                <figure>
                    <img src={icon} alt="icon" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;