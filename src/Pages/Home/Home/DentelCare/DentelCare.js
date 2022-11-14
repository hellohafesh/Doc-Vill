import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const DentelCare = () => {
    return (
        <div className="hero lg:px-40 mt-32 bg-base-100">
            <div className="hero-content flex-col lg:gap-x-28 lg:flex-row">
                <img className='lg:h-[576px] lg:w-[458px] rounded' src={treatment} alt="" />
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>See More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentelCare;