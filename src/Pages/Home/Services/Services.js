import React from 'react';
import Image2 from '../../../assets/images/Image2.png'
import Image from '../../../assets/images/Image.png'
import Image3 from '../../../assets/images/Image3.png'
import Image4 from '../../../assets/images/Image4.png'
import Image6 from '../../../assets/images/Image6.png'
import Ellipse from '../../../assets/images/Ellipse 2.png'
import Menu from '../../../assets/images/Menu.png'
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Glass Coffee Mugs',
            description: 'Coffee 50%, milk 50%, 280 ml',
            img: Image2,

        },
        {
            id: 2,
            name: 'Glass Coffee Mugs',
            description: 'Coffee 50%, milk 50%, 280 ml',
            img: Image
        },
        {
            id: 3,
            name: 'Glass Coffee Mugs',
            description: 'Coffee 50%, milk 50%, 280 ml',
            img: Image3
        },
        {
            id: 3,
            name: 'Glass Coffee Mugs',
            description: 'Coffee 50%, milk 50%, 280 ml',
            img: Image4
        },
        {
            id: 3,
            name: 'Glass Coffee Mugs',
            description: 'Coffee 50%, milk 50%, 280 ml',
            img: Image6
        },
        {
            id: 3,
            name: 'Glass Coffee Mugs',
            description: 'Coffee 50%, milk 50%, 280 ml',
            img: Ellipse
        },
    ]

    return (
        <section className=''
            style=
            {{
                backgroundImage: `url(${Menu})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '1060px',
                width: '1440px',
            }}
        >
            <div className='mt-16'>
                <div className='text-center pt-28'>
                    <h2 className='text-5xl font-bold font-serif'>Coffee Menu items</h2>
                </div>
                <div className=' mt-[120px] w-full h-[40px]'>
                    <nav class="flex justify-center gap-6 text-base font-bold">
                        <Link href="" class="-mb-px font-bold w-[120px] btn  border-none bg-white capitalize  rounded  text-sm  text-black hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral   ">
                            Chocolate
                        </Link>
                        <Link href="" class="-mb-px font-bold w-[120px] btn  border-none bg-white capitalize  rounded  text-sm  text-black hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral   ">
                            Tai Coffee
                        </Link>
                        <Link href="" class="-mb-px font-bold w-[120px] btn  border-none bg-white capitalize  rounded  text-sm  text-black hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral   ">
                            Sweets
                        </Link>
                        <Link href="" class="-mb-px font-bold w-[120px] btn  border-none bg-white capitalize  rounded  text-sm  text-black hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral   ">
                            Black Coffee
                        </Link>

                    </nav>
                </div>

                <div className='grid gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[710px] h-[455px] container ml-[350px]'>
                    {
                        servicesData.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;