import React, { useState } from 'react';
import data from '../../../assets/data/portfolioData'
import Menu from '../../../assets/images/Menu.png'
import { useEffect } from 'react';
import ServicesItm from './ServicesItm';

const Services = () => {
    const [nextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [selectTab, setSelectTab] = useState('all')



    useEffect(() => {

        if (selectTab === 'all') {
            setPortfolios(data)
        }

        if (selectTab === 'Tai Coffee') {
            const filteredData = data.filter(item => item.category === 'Tai Coffee')
            setPortfolios(filteredData)
        }

        if (selectTab === 'Sweets') {
            const filteredData = data.filter(item => item.category === 'Sweets')
            setPortfolios(filteredData)
        }
        if (selectTab === 'Black Coffee') {
            const filteredData = data.filter(item => item.category === 'Black Coffee')
            setPortfolios(filteredData)
        }

    }, [selectTab])


    return (

        <section className=' w-screen h-[1360px] mx-auto'
            style=
            {{
                backgroundImage: `url(${Menu})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            }}
        >
            <div className='mt-16'>
                <div
                    data-aos="fade-down" data-aos-duration="1500"
                    className='text-center pt-28'>
                    <h2 className='text-5xl font-bold font-serif mt-[-3%]'>Coffee Menu items</h2>
                </div>
                <div
                    data-aos="fade-up" data-aos-duration="1500"
                    className=' mt-40  '>
                    <nav class="flex justify-center gap-6 text-base font-bold">
                        <button
                            onClick={() => setSelectTab('all')}
                            className={` font-bold py-2 px-4 btn  border-none capitalize  rounded  text-sm  hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral ${selectTab === 'all' ? "bg-neutral text-white" : "bg-white text-black"}`}>
                            All
                        </button>

                        <button
                            onClick={() => setSelectTab('Tai Coffee')}
                            className={` font-bold py-2 px-4 btn  border-none capitalize  rounded  text-sm  hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral ${selectTab === 'Tai Coffee' ? "bg-neutral text-white" : "bg-white text-black"}`}>
                            Tai Coffee
                        </button>

                        <button
                            onClick={() => setSelectTab('Sweets')}
                            className={` font-bold py-2 px-4 btn  border-none capitalize  rounded  text-sm  hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral ${selectTab === 'Sweets' ? "bg-neutral text-white" : "bg-white text-black"}`}>
                            Sweets
                        </button>
                        <button
                            onClick={() => setSelectTab('Black Coffee')}
                            className={` font-bold py-2 px-4 btn  border-none capitalize  rounded  text-sm  hover:bg-neutral hover:text-white  focus:bg-neutral focus:text-white  active:bg-neutral ${selectTab === 'Black Coffee' ? "bg-neutral text-white" : "bg-white text-black"}`}>
                            Black Coffee
                        </button>



                    </nav>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[800px] mt-10 mx-auto  container '>
                    {
                        portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                            <ServicesItm portfolio={portfolio} index />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;