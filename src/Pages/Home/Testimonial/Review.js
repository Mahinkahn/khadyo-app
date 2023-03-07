import React from 'react';

const Review = ({ review }) => {
    const { name, img, imga, location } = review;
    return (
        <div className="card shadow-xl  mt-48 w-[255px] h-[398px]">
            <div className="card-body items-center">
                <img src={imga} alt="" className='mr-40 mt-[-48px]' />
                <div className="  mt-5">
                    <div className="">
                        <div className="w-full">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;