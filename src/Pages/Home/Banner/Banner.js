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
import Rectangle3 from '../../../assets/images/Rectangle 3.png';
import b from '../../../assets/images/b.png';
import a from '../../../assets/images/a.png';
import c from '../../../assets/images/c.png';

import '../Banner/Banner.css';
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {
    return (
        <section className='overflow-x-hidden'
        >
            <div className=" hero " style={{
                backgroundImage: `url(${Header})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                // width: '201vh',
            }}>
                <img src={Round} alt="" className='mt-[-17%] w-[490px] khadyo' />


                <img src={pata} alt="" className='ml-[-15%] mt-[-95px]' />

                <img src={g} alt="" className=' ml-[600px] mt-[-40px] Rectangle' />

                <img src={Gb} alt="" className=' ml-[88%] mt-[-37%] w-[250px] khadyo ' />
                <img src={b} alt="" className='ml-[78%] mt-[-17%] coffe' />

                <img src={a} alt="" className='ml-[93%] mt-[7%]  Rectangle' />

                <img src={c} alt="" className='ml-[88%] mt-[15%] cop' />

                <img src={c} alt="" className='ml-[57%] mt-[31%] Rectangle' />

                <img src={Mask} alt="" className=' w-[201vh] h-[95vh]' />

                <div className=' flex ml-[-83%] gap-44 mt-[-10%]'>
                    <img src={Gro2} alt="" className='Rectangle' />
                    <img src={Gro2} alt="" className='Rectangle' />
                </div>


                <img
                    data-aos="fade-up" data-aos-duration="1500"
                    src={text} alt="" className='cop w-96 h-[260px] mt-[-16%] ml-[-68%] overflow-hidden' />


                <img src={V} alt="" className=' ml-[-71%] mt-44 khadyo' />
                <img src={Rectangle} alt="" className='coffe ml-[-71%] mt-48' />

                <img src={Gro1} alt="" className='ml-[-58%] Rectangle' />

                <img src={Vector5} alt="" className=' ml-[60%] mt-[-200px] khadyo' />
                <img src={Rectangle3} alt="" className='cop ml-[62%] mt-[-140px]' />

                <div className="hero-content text-center ml-[-10%] mt-[-50px]  text-neutral-content">

                    <h1
                        data-aos="fade-down" data-aos-duration="1500"
                        className="text-6xl font-bold bg-secondary rounded-2xl w-[210px] h-[83px] text-[#582A18] font-serif py-3 ">Fresh
                    </h1>
                </div>
                <h1
                    data-aos="fade-left" data-aos-duration="1500"
                    className=" text-6xl font-bold text-neutral-content ml-64 mt-[-34px] font-serif ">
                    Coffee
                </h1>
                <h1
                    data-aos="fade-up" data-aos-duration="1500"
                    className=" text-6xl font-bold text-neutral-content ml-6 mt-[144px] font-serif ">
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


            <img src={CoCup} alt="" className=' mt-[-18%] ml-[32%] w-[35%] coffe' />
            <div class="coffee-medium cont mt-16">
                <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                <div class="coffee-medium__cup"></div>
            </div>


            <div className=' flex justify-between mt-[-200px] '>
                <img src={Vector} alt="" className=' ml-48' />
                <img src={Group} alt="" className='' />
            </div>
        </section>
    );
};

export default Banner;