import React from 'react';
import Ellipse from '../../../assets/images/Ellipse 6.png';
import Rectangle from '../../../assets/images/Rectangle 5.png';
import Ellipes from '../../../assets/images/Ellipse 7.png';
import Ellipes3 from '../../../assets/images/Ellipse 3.png';
import Ellipes4 from '../../../assets/images/Ellipse 4.png';
import About from '../../../assets/images/About Coffee.png';



const InfoCards = () => {


    return (
        <div className=' mt-[-60px] grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-24 mr-24 container  mx-auto'>
            <div className='mt-[45px]'>
                <h1
                    data-aos="fade-up" data-aos-duration="1500"
                    className='text-5xl font-bold leading-normal font-serif  flex ml-3 '>
                    <img src={Ellipse} alt="" className='w-[88px] h-[82px] mr-[-65px]' />
                    Roasted Coffee for <br />
                    Your Mood</h1>
                <p
                    data-aos="fade-left" data-aos-duration="1500"
                    className=' py-3 mt-6 ml-14 font-semibold'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br />
                    cubilia curae; Suspendisse potenti.</p>

                <div className='flex mt-8 ml-12'>
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <img src={Rectangle} alt="" />
                    </div>
                    <div
                        data-aos="fade-left" data-aos-duration="1500"
                        className=' pl-7 mt-4'>
                        <p className='font-semibold'>Company Start date</p>
                        <h2 className=' text-3xl font-bold text-neutral capitalize'>1st Jan, 2000</h2>
                        <h4 className='font-bold mb-[-5px] mt-8'>Our Location </h4>
                        <h3 className=' text-lg font-bold font-serif'>
                            Rio de Janeiro, RJ Brazil, 04103 Route</h3>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <button
                        data-aos="fade-down" data-aos-duration="1500"
                        className='btn btn-neutral shadow-lg shadow-neutral-500/50 mt-7 w-[150px] h-[53px] ml-[360px]'>
                        Shop Now
                    </button>
                    <img
                        data-aos="fade-up" data-aos-duration="1500"
                        src={Ellipes} alt="" className='mt-[-140px] 
                     '/>
                    <div
                        data-aos="fade-left" data-aos-duration="1500"
                        className=' flex gap-4 mt-[-190px] ml-8'>
                        <img src={About} alt="" className='' />
                        <img src={Ellipes3} alt="" className='' />
                        <img src={Ellipes4} alt="" className='' />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InfoCards;