import React from 'react';
import Header from '../../../assets/images/Ve.png';
import Vector from '../../../assets/images/Vector.png';
import Group from '../../../assets/images/Group.png';
import CoCup from '../../../assets/images/CoCup.png';
import Gro2 from '../../../assets/images/Gro2.png';
import Gro1 from '../../../assets/images/Gro1.png';
import text from '../../../assets/images/text.png';
import Mask from '../../../assets/images/Mask.png';
import Gb from '../../../assets/images/Gb.png';
import Round from '../../../assets/images/Round.png';
import pata from '../../../assets/images/pata.png';
import g from '../../../assets/images/G.png';
import Vector2 from '../../../assets/images/Vector.png';
import Vector5 from '../../../assets/images/Vector5.png';
import Bannercss from '../Banner/Banner.css';

import { TypeAnimation } from 'react-type-animation';
;



const Banner = () => {
    return (
        <section className=' '

        >
            <div className=" hero " style={{
                backgroundImage: `url(${Header})`,
                backgroundSize: 'cover',
                height: '95vh',
                width: '201vh',
            }}>
                <img src={Round} alt="" className='mt-[-17%] w-[490px]' />

                <img src={pata} alt="" className='ml-[-15%] mt-[-95px]' />

                <img src={g} alt="" className=' ml-[600px] mt-[-40px]' />

                <img src={Gb} alt="" className=' ml-[88%] mt-[-37%] w-[250px]' />

                <img src={Mask} alt="" className=' w-[201vh] h-[95vh]' />

                <div className=' flex ml-[-85%] gap-32 mt-[-15%]'>
                    <img src={Gro2} alt="" />
                    <img src={Gro2} alt="" />
                </div>

                <div className='mt-[-20%] ml-[-72%]'>
                    <img src={text} alt="" className='w-full ' />
                </div>

                <img src={Vector2} alt="" className='w-[80px] ml-[-40%]' />

                <div className="hero-content text-center ml-[-10%] mt-[-50px]  text-neutral-content">

                    <h1 className=" text-6xl font-bold bg-secondary rounded-2xl w-[210px] h-[83px] text-[#582A18] font-serif py-3">Fresh
                    </h1>
                    <h1 className=" text-5xl font-bold">
                        <TypeAnimation
                            sequence={[
                                'Coffee', // Types 'Coffee'
                                2500, // Waits 3s
                                'Experience', // Deletes 'One' and types 'Experience'
                                4000, // Waits 2s

                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '' }}
                        />
                    </h1>


                </div>
            </div>
            <div className=' flex justify-center mt-[-14%] '>
                <img src={CoCup} alt="" className='' />
            </div>
            <div className=' flex justify-between mt-[-180px]'>
                <img src={Vector} alt="" />
                <img src={Group} alt="" />
            </div>
        </section>
    );
};

export default Banner;