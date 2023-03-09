import React from 'react';
import Vector4 from '../../../assets/images/Vector4.png'
import Ellipse from '../../../assets/images/Ellipse 8.png'
import bag from '../../../assets/images/bag-05 .png'
import Rectangle from '../../../assets/images/Rectangle 20.png'
import Rectangle2 from '../../../assets/images/Rectangle 21.png'
import Group33 from '../../../assets/images/Group33.png'
import Ellipse3 from '../../../assets/images/Ellipse 13.png'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import { Link } from 'react-router-dom';
const Item = () => {
    return (
        <div className='grid gap-x-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 ml-32'>
            <div className='mt-24'>
                <div className=' flex'>
                    <h1 className=' text-5xl font-serif font-bold leading-tight w-[182px]'>Client <br />
                        Reviews</h1>
                    <div className=' mt-8 w-full relative'>
                        <img src={Vector4} alt="" />
                    </div>
                    <div className=' absolute ml-44 mt-[-80px]'>
                        <img src={Ellipse} alt="" />
                    </div>
                </div>
                <div className=' flex mt-10 relative'>
                    <Link href="" class="-mb-px font-bold w-[50px] mr-3 btn  border rounded-full bg-white capitalize   text-sm  text-[#9B6842]  hover:bg-[#9B6842]  hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842]    ">
                        01
                    </Link>
                    <Link href="" class="-mb-px font-bold w-[50px] mr-3 btn  border bg-white capitalize  rounded-full  text-sm  text-[#9B6842]  hover:bg-[#9B6842]  hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842] ">
                        02
                    </Link>
                    <Link href="" class="-mb-px font-bold w-[50px] btn  border bg-white capitalize  rounded-full  text-sm  text-[#9B6842]  hover:bg-[#9B6842] hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842] ">
                        03
                    </Link>
                    <div className=' ml-[-150px] w-full'>
                        <img src={bag} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <div className=' w-[760px] h-[505px]  absolute ml-[-286px] mt-[-93px]'>
                    <img src={Rectangle} alt="" />
                </div>
                <div className='w-[726px] relative'>
                    <img src={Rectangle2} alt="" className=' ml-[-37%] mt-[-10%]' />
                    <img src={Group33} alt="" className=' ml-[340px] mt-[-41%] absolute' />
                    <div className=' w-[612px] h-[190px] text-3xl font-bold text-white ml-[-30%] mt-[-35%] relative'>
                        <h3>Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.</h3>
                    </div>
                    <div className=' flex gap-3 ml-[-11%] mt-24'>
                        <img src={Ellipse3} alt="" className=' w-[57px]' />
                        <img src={people1} alt="" className=' w-[57px]' />
                        <img src={people2} alt="" className=' w-[57px]' />
                        <img src={Ellipse3} alt="" className=' w-[57px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;