import React from 'react';
import image2 from '../../../assets/images/image 22.png'
import image3 from '../../../assets/images/image 33.png'
import image4 from '../../../assets/images/image 44.png'
import image5 from '../../../assets/images/image 55.png'
import image6 from '../../../assets/images/image 66.png'
import image7 from '../../../assets/images/image 77.png'
const GitItem = () => {
    return (
        <div className='grid gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-20 w-[1150px] mx-auto'>
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" className=' mt-2 ml-[-20px]' />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
        </div>
    );
};

export default GitItem;