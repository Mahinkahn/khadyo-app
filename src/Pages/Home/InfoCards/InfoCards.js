import React from 'react';
import Ellipse from '../../../assets/images/Ellipse 6.png';
import Rectangle from '../../../assets/images/Rectangle 5.png';
import Ellipes from '../../../assets/images/Ellipse 7.png';
import About from '../../../assets/images/About Coffee.png';



const InfoCards = () => {


    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ml-6'>
            <div className='mt-[-45px]'>
                <h1 className=' text-4xl font-bold leading-normal font-serif  flex ml-9'>
                    <img src={Ellipse} alt="" className='w-[60px] h-[55px] mr-[-44px]' />
                    Roasted Coffee for <br />
                    Your Mood</h1>
                <p className=' py-3 mt-6 ml-14'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br />
                    cubilia curae; Suspendisse potenti.</p>

                <div className='flex mt-8 ml-12'>
                    <div>
                        <img src={Rectangle} alt="" />
                    </div>
                    <div className=' pl-7 mt-4'>
                        <p>Company Start date</p>
                        <h2 className=' text-3xl font-bold text-neutral capitalize'>1st Jan, 2000</h2>
                        <h4 className='font-bold mb-[-5px] mt-8'>Our Location </h4>
                        <h3 className=' text-lg font-bold font-serif'>
                            Rio de Janeiro, RJ Brazil, 04103 Route</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                <div>
                    <button className='btn btn-neutral shadow-lg shadow-neutral-500/50 mt-[-10px] w-[150px] h-[53px] ml-[360px]'>Shop Now</button>
                    <img src={Ellipes} alt="" className='mt-[-190px] ' />
                    <img src={About} alt="" className='mt-[-150px] h-[221px] ml-12' />

                </div>

            </div>
        </div>
    );
};

export default InfoCards;