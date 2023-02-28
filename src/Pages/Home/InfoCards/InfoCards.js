import React from 'react';
import Ellipse from '../../../assets/images/Ellipse 6.png';
import Rectangle from '../../../assets/images/Rectangle 5.png';
import Ellipes from '../../../assets/images/Ellipse 7.png';
import About from '../../../assets/images/About Coffee.png';



const InfoCards = () => {


    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <h1 className=' text-4xl font-bold leading-normal  flex ml-10'>
                    <img src={Ellipse} alt="" className='w-[55px] h-[55px] mr-[-38px]' />
                    Roasted Coffee for <br />
                    Your Mood</h1>
                <p className=' py-3 ml-14'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br />
                    cubilia curae; Suspendisse potenti.</p>

                <div className=' flex ml-12'>
                    <div>
                        <img src={Rectangle} alt="" />
                    </div>
                    <div className=' px-4 mt-4'>
                        <p>Company Start date</p>
                        <h2 className=' text-2xl font-bold text-yellow-900 capitalize'>1st Jan, 2000</h2>
                        <h3 className='w-full'>Our Location <br />
                            Rio de Janeiro, RJ Brazil, 04103 Route</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                <div>
                    <img src={Ellipes} alt="" className='mt-[-100px]' />
                    <img src={About} alt="" className='mt-[-200px]' />

                </div>

            </div>
        </div>
    );
};

export default InfoCards;