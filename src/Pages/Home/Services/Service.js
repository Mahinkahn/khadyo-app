import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (

        <div className=" flex items-center mt-8  rounded-2xl   w-[370px] h-[135px]  border">
            <img src={img} alt="Shoes" className=" px-5" />
            <div className=" w-[230px] h-[56px]">
                <h2 className="card-title font-serif font-bold">{name}</h2>
                <p className=' mt-3'>{description}</p>
            </div>

        </div>
    );
};

export default Service;