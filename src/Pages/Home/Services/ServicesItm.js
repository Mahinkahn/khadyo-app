import React, { useState } from 'react';
import arrow from '../../../assets/icons/arrow-square-down.svg'
import square from '../../../assets/icons/arrow-square.png'
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';


const ServicesItm = ({ portfolio, index }) => {

    const [previousCaseNumber, setPreviousCaseNumber] = useState(0);

    return (
        <div
            key={index}
            data-aos='fade-zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            className="group relative  flex items-center mt-8 rounded-2xl w-[370px] h-[135px]  border hover:bg-neutral hover:shadow-xl" >

            <img src={portfolio.imgUrl} alt="Shoes" className=" px-5" />
            <div className=" w-[230px]  relative flex transform items-end transition-transform">
                <div className='!pt-0 transition-opacity group-hover:absolute group-hover:opacity-0'>
                    <h2 className="card-title font-serif font-bold">{portfolio.category}</h2>
                    <p className=' mt-3 font-semibold'>{portfolio.title}</p>
                </div>
                <div
                    class="absolute  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 ease-in duration-200"
                >
                    <div className=' flex items-end justify-end mb-[-5px]'>
                        <h3 className=' text-3xl text-white font-bold'>{portfolio.tk}</h3>
                        <br />
                    </div>

                    <div className='flex mt-3 gap-2 items-center justify-center'>
                        <Link className=' text-white'><FaShoppingBag /></Link>

                        <input type="" className='w-6 font-semibold leading-[13.41px]  bg-[#FF8A00] rounded-full px-[3px] pb-[1px] text-[#421506]' id="case-number-field" value={previousCaseNumber}
                        />

                        <button onClick={() => setPreviousCaseNumber(previousCaseNumber === 0 ? 0 : previousCaseNumber - 1)} className=''>
                            <img src={arrow} alt="" />
                        </button>

                        <button
                            onClick={() => setPreviousCaseNumber(previousCaseNumber + 1)}
                            className=''><img src={square} alt="" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesItm;