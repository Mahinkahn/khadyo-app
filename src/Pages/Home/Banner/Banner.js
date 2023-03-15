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
import V from '../../../assets/images/V.png';
import Vector5 from '../../../assets/images/Vector5.png';
import Rectangle from '../../../assets/images/Rectangle 4.png';
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

                <div className=' flex ml-[-83%] gap-44 mt-[-10%]'>
                    <img src={Gro2} alt="" />
                    <img src={Gro2} alt="" />
                </div>


                <img src={text} alt="" className=' w-96 h-[260px] mt-[-16%] ml-[-68%]' />


                <img src={V} alt="" className=' ml-[-71%] mt-44' />
                <img src={Rectangle} alt="" className='Rectangle ml-[-71%] mt-48' />

                <div className="hero-content text-center ml-[-10%] mt-[-50px]  text-neutral-content">

                    <h1 className=" text-6xl font-bold bg-secondary rounded-2xl w-[210px] h-[83px] text-[#582A18] font-serif py-3">Fresh
                    </h1>
                </div>
                <h1 className=" text-6xl font-bold text-neutral-content ml-64 mt-[-34px] font-serif">
                    <TypeAnimation
                        sequence={[
                            'Coffee', // Types 'Coffee'
                            2500, // Waits 3s
                            'Fresh', // Deletes 'One' and types 'Fresh'
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
                <h1 className=" text-6xl font-bold text-neutral-content ml-6 mt-[144px] font-serif">
                    <TypeAnimation
                        sequence={[
                            'Experience', // Types 'Coffee'
                            2500, // Waits 3s
                            'Coffee', // Deletes 'One' and types 'Fresh'
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

            <img src={CoCup} alt="" className=' mt-[-18%] ml-[32%] w-[35%] cop' />


            <div className=' flex justify-between mt-[-180px]'>
                <img src={Vector} alt="" />
                <img src={Group} alt="" />
            </div>
        </section>
    );
};

export default Banner;