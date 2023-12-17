import React, { useState } from 'react';

// components
import PlansCard from './components/PlansCard';
import PlansDetail from './components/PlansDetail';

// mock
import { plansData } from 'mock/home';

const Plans = () => {
    const [activePlan, setActivePlan] = useState('plans-1');
    const [checked, setChecked] = useState(true);
    const [direction, setDirection] = useState('right');

    const planHandler = (id) => {
        setActivePlan(id);
        setChecked(false);
        setDirection('right');
        
        setTimeout(() => {
            setDirection('left');
            setChecked(true);
        }, 1000)
    }

    return (
        <div className='mb-40 overflow-hidden'>
            <h4 className='title'>Our Plans <span className='text-base'>Per Month</span></h4>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mt-2'>
                <div className='col-span-1 md:col-span-5'>
                    <div className='flex flex-col gap-4'>
                        {plansData?.map((item) => (
                            <PlansCard
                                data={item} 
                                key={item?.id}
                                isActive={item?.id === activePlan} 
                                handler={() => planHandler(item?.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className='col-span-1 md:col-span-7'>
                    <PlansDetail direction={direction} checked={checked} data={plansData?.find((item) => item?.id === activePlan)} />
                </div>
            </div>
        </div>
    );
};



export default Plans;