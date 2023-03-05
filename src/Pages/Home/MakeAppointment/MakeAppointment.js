import React from 'react';
import FCoffe from '../../../assets/images/FCoffe .png';
import png from '../../../assets/images/01.png';
import png2 from '../../../assets/images/2.png';

import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className=' mt-24 grid gap- grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1110px]  mx-auto '>
            <div className='mt-8'>
                <h1 className=' text-[52px] w-[258px] h-48 leading-tight font-bold font-serif py-4 '>The Best
                    Vietnamese
                    Coffee</h1>
                <p className=' py-4 mt-6 font-semibold text-lg'>Vestibulum ante ipsum primis in <br />
                    faucibus orci luctus.</p>
                <h1 className=' text-[40px]  font-bold'>$5.00</h1>
                <button className='btn btn-neutral mt-6 shadow-lg shadow-neutral-500/50  w-[150px] h-[53px] font-bold capitalize'>Shop Now</button>
            </div>
            <div className='w-[200%] h-full ml-[-60px]'>
                <img src={FCoffe} alt="" className='' />
            </div>
            <div className=' w-full ml-36 mt-9'>
                <img src={png} alt="" className=' ml-[-20px]' />
                <img src={png2} alt="" />
            </div>
        </div>
    );
};

export default MakeAppointment;