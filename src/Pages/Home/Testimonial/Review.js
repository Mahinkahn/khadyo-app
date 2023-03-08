import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import grp from '../../../assets/icons/Group 2.png'
import arrow from '../../../assets/icons/arrow-square-down.svg'
import square from '../../../assets/icons/arrow-square.png'
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const { name, img, imga, location } = review;
    return (
        <div className="card group/item group relative  flex items-center  mt-48 w-[270px] h-[373px] bg-[#F9F0EB] hover:bg-slate-900 hover:text-white">
            <div className="card-body items-center">
                <img src={imga} alt="" className='mr-44 h-[120px] mt-[-48px] group/edit invisible group-hover/item:visible' />
                <div className="mt-[-50px]">
                    <div className="">
                        <div className="w-[130px] ml-9">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h5 className=" text-xl mt-3 font-serif font-semibold">{name}</h5>
                        <p className='mt-3 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0'>{location}</p>
                    </div>
                    <div
                        class="absolute top-4 opacity-0 transition-opacity group-hover:relative ml-6 group-hover:opacity-100 "
                    >
                        <div className='flex mt-3 w-[125px] h-[45px] bg-secondary rounded-2xl px-4 pt-2'>
                            <Link className=' text-white mt-1'><FaShoppingBag /></Link>
                            <Link className=''><img src={grp} alt="" className='' /></Link>
                            <Link className='mr-2 mt-1'><img src={arrow} alt="" className=' w-4' /></Link>
                            <Link className='mt-1'><img src={square} alt="" className=' w-4 ' /></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;