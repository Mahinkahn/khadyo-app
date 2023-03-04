import React from 'react';
import Header from '../../../assets/images/Header.png';
import Vector from '../../../assets/images/Vector.png';
import Group from '../../../assets/images/Group.png';


const Banner = () => {
    return (
        <section>
            <div className="hero w-full h-[1100px]" style={{ backgroundImage: `url(${Header})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="ml-16">
                        <h1 className="text-6xl mt-[-200px] leading-tight  font-bold"><small className=' bg-secondary rounded-2xl p-0 px-9 text-gray-800 mr-4'> Fresh</small> Coffee <br />Experience</h1>
                    </div>
                </div>

            </div>
            <div className=' flex justify-between mt-[-180px]'>
                <img src={Vector} alt="" />
                <img src={Group} alt="" />
            </div>
        </section>
    );
};

export default Banner;