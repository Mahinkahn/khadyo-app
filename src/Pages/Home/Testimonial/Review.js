import React from 'react';

const Review = ({ review }) => {
    const { name, img, location } = review;
    return (
        <div className="card shadow-xl bg-black mt-48 w-[255px] h-[398px]">
            <div className="card-body items-center">

                <div className="  mt-6">
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