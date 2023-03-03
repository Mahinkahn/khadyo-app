import React from 'react';
import grp from '../../../assets/icons/Group 2.png'
import arrow from '../../../assets/icons/arrow-square-down.svg'
import square from '../../../assets/icons/arrow-square.png'
import { FaShoppingBag } from 'react-icons/fa';
import { AiFillMinusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (

        <div className="group relative  flex items-center mt-8  rounded-2xl   w-[370px] h-[135px]  border hover:bg-neutral hover:shadow-xl">
            <img src={img} alt="Shoes" className=" px-5" />
            <div className=" w-[230px] h-[56px] relative flex transform items-end transition-transform">
                <div className='!pt-0 transition-opacity group-hover:absolute group-hover:opacity-0'>
                    <h2 className="card-title font-serif font-bold">{name}</h2>
                    <p className=' mt-3'>{description}</p>
                </div>
                <div
                    class="absolute  flex opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:"
                >
                    <Link className=' text-white'><FaShoppingBag /></Link>
                    <Link><img src={grp} alt="" /></Link>
                    <Link className='mr-2'><img src={arrow} alt="" /></Link>
                    <Link><img src={square} alt="" /></Link>

                </div>
            </div>

        </div>
    );
};

export default Service;