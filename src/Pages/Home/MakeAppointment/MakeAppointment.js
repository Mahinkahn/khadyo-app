import React from 'react';
import FCoffe from '../../../assets/images/FCoffe .png';
import png from '../../../assets/images/01.png';
import png2 from '../../../assets/images/2.png';

import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className='grid gap- grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mx-auto'>
            <div>
                <h1 className=' text-6xl font-bold font-serif py-4'>The Best
                    Vietnamese
                    Coffee</h1>
                <p className=' py-4'>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                <button className='btn btn-neutral shadow-lg shadow-neutral-500/50  w-[150px] h-[53px] font-bold capitalize'>Shop Now</button>
            </div>
            <div className=' w-[200%] h-full ml-[-50px]'>
                <img src={FCoffe} alt="" />
            </div>
            <div className=' ml-16 mt-9'>
                <img src={png} alt="" />
                <img src={png2} alt="" />
            </div>
        </div>
    );
};

export default MakeAppointment;