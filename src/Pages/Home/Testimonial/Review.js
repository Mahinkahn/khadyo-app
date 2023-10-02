import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import arrow from '../../../assets/icons/arrow-square-down.svg'
import square from '../../../assets/icons/arrow-square.png'
import { Link } from 'react-router-dom';

const Review = ({ review }) => {



    const [previousCaseNumber, setPreviousCaseNumber] = useState(0);
    const { name, img, imga, location } = review;

    return (


        <div
            data-aos='fade-zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            className="card group/item group relative  flex justify-center items-center w-[270px] h-[373px] bg-[#F9F0EB] hover:bg-slate-900 hover:text-white">

            <div
                className="card-body items-center">
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
                        class="absolute opacity-0 transition-opacity group-hover:relative ml-6 group-hover:opacity-100 "
                    >
                        <div className='flex justify-center items-center gap-2 mt-3 w-[125px] h-[45px] bg-secondary rounded-2xl  '>
                            <Link className=' text-white'><FaShoppingBag /></Link>
                            <input type="" className='w-6 font-semibold leading-[13.41px]  bg-[#FF8A00] rounded-full text-[#421506]' id="case-number-field" value={previousCaseNumber}
                            />
                            <Link onClick={() => setPreviousCaseNumber(previousCaseNumber === 0 ? 0 : previousCaseNumber - 1)}
                                className=''><img src={arrow} alt="" className=' w-4' />
                            </Link>

                            <Link onClick={() => setPreviousCaseNumber(previousCaseNumber + 1)}
                                className=''><img src={square} alt="" className=' w-4 ' />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;