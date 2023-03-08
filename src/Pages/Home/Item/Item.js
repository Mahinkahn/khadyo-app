import React from 'react';
import Vector4 from '../../../assets/images/Vector4.png'
import Ellipse from '../../../assets/images/Ellipse 8.png'
import bag from '../../../assets/images/bag-05 .png'
import { Link } from 'react-router-dom';
const Item = () => {
    return (
        <div className='grid gap-x-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <div className=' flex'>
                    <h1 className=' text-5xl font-serif font-bold leading-tight w-[182px]]'>Client <br />
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
        </div>
    );
};

export default Item;