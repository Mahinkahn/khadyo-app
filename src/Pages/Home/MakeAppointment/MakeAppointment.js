import React, { useEffect, useState } from 'react';
import FCoffe from '../../../assets/images/FCoffe .png';

import ico from '../../../assets/images/Ico.png'
import ic from '../../../assets/images/Ic.png'



const MakeAppointment = () => {


    const items = [
        {
            title: "1 Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.",
            user: FCoffe,
            price: "$4.00"
        },
        {
            title: "2 Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.",
            user: FCoffe,
            price: "$5.50"
        },
        {

            user: FCoffe,
            price: "$5.00"
        }
    ]




    const [activeIndex, setActiveIndex] = useState(0);

    // Function to increment the active slide index
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Auto transition to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    },);

    return (
        <div className=' mt-24  grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mb-96'>
            <div className=' ml-20'>
                <h1
                    data-aos="fade-up" data-aos-duration="1500"
                    className='  text-[52px] w-[258px] leading-tight font-bold font-serif py-4 '>The Best
                    Vietnamese
                    Coffee</h1>
                <p
                    data-aos="fade-left" data-aos-duration="1500"
                    className=' py-4 mt-4 font-semibold text-lg'>Vestibulum ante ipsum primis in <br />
                    faucibus orci luctus.</p>
                <h1
                    data-aos="fade-up" data-aos-duration="1500"
                    className=' text-[40px]  font-bold'>$5.00</h1>
                <button
                    data-aos="fade-down-left" data-aos-duration="1500"
                    className='btn btn-neutral mt-6 shadow-lg shadow-neutral-500/50  w-[150px] h-[53px] font-bold capitalize rounded-xl'>Shop Now</button>
            </div>

            <div

                data-aos="zoom-in-down" data-aos-duration="1500"
                className='w-[200%] h-full ml-[-60px]'>
                <div className="">
                    <img src={FCoffe} alt="" className='' />
                </div>

                <div className=" wrapper flex items-center">

                    <div class="button ">
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <span className=''>Facebook</span>
                    </div>
                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>


            <div className='w-full  -mt-24 -ml-2 '>
                <div
                    data-aos="flip-left" data-aos-duration="1500"
                    class="max-w-md w-[284px]  py-6 px-6 bg-white shadow-lg rounded-lg my-20 relative flex flex-col lg:justify-center lg:items-center overflow-visible">
                    <div class="flex justify-center items-center  ">
                        <img class="w-24 h-24 object-cover rounded-full " src={ic} alt='' />
                    </div>
                    <div className=' text-center'>
                        <h2 class="text-[#000000] text-xl font-semibold">Wide Assortment</h2>
                        <p class="mt-2 text-[#000000] leading-[15.73px] ">Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue.</p>
                    </div>
                </div>

                <div
                    data-aos="flip-down" data-aos-duration="1500"
                    class="max-w-md w-[284px] py-6 px-6 bg-[#FDF4E9] shadow-lg rounded-lg my-16 relative flex flex-col lg:justify-center lg:items-center overflow-visible">

                    <div class="flex lg:justify-center lg:items-center  md:justify-end  absolute -top-12 right-0 left-0">
                        <img class="w-24 h-24 object-cover  rounded-full " src={ico} alt='' />
                    </div>

                    <div className=' text-center '>
                        <h2 class="text-[#000000] text-xl font-semibold">Wide Assortment</h2>
                        <p class="mt-2 text-[#000000] leading-[15.73px] ">Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MakeAppointment;