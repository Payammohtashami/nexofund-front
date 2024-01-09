import React, { useEffect, useState } from 'react';
import HeroBackground from 'components/Icon/HeroBackground';
import { CloseRounded, InfoRounded } from '@mui/icons-material';
import Aos from 'aos';

const AuthLayout = ({children}) => {
    const [showAlert, setShowAlert] = useState(true);
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='relative flex flex-col items-center'>
            {/* top background */}
            <div className='-z-0 !mx-auto absolute w-[95vw] h-[95vw] lg:w-[70vw] -top-[50vw] lg:h-[70vw]' data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800'>
                <HeroBackground classname='opacity-30' />
                <span
                    className='rounded-full absolute -z-10 top-0 w-full h-full blur-3xl opacity-25'
                    style={{background: 'radial-gradient(circle, rgba(38,44,198,1) 65%, rgba(39,57,201,1) 70%, rgba(52,203,236,1) 100%)'}}
                ></span>
                <span
                    className='rounded-full absolute -z-10 top-0 w-full h-full opacity-50'
                    style={{background: 'radial-gradient(circle, rgba(8,7,26,1) 24%, rgba(19,17,55,1) 40%, rgba(21,18,59,1) 46%, rgba(22,20,64,1) 58%, rgba(27,22,101,1) 62%, rgba(37,29,193,1) 70%, rgba(36,146,226,1) 80%)'}}
                ></span>
            </div>
            {showAlert ? 
                <div className="fixed top-0 bg-darkness-800 z-10 py-1 w-full">
                    <div className="container  px-2 xl:max-w-screen-xl mx-auto">
                        <div className="flex items-center justify-between w-full">
                            <div className="text-cyan-400 gap-3 flex items-center">
                                <InfoRounded fontSize='small' />
                                <p className='text-left text-xs md:text-sm'>You can login with any email and password data.</p>
                            </div>
                            <button onClick={() => setShowAlert(false)} className='text-white p-1 cursor-pointer rounded-full hover:bg-darkness-500'>
                                <CloseRounded />
                            </button>
                        </div>
                    </div>
                </div>
                :
                null
            }

            {/* main section */}
            <section className='py-24 container mx-auto max-w-[560px] px-4'>
                <div className='p-4 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-lg bg-darkness-500'>
                    {children}
                </div>
            </section>


            {/* meshes */}
            <div className='mesh bg-primary-400 w-20 h-20 left-[10%] top-[10vh]'></div>
            <div className='mesh bg-primary-400 w-20 h-20 right-[10%] top-[45vh]'></div>
            <div className='mesh bg-primary-500 w-20 h-20 left-[10%] top-[65vh]'></div>
            <div className='mesh bg-primary-500 w-20 h-20 right-[5%] top-0'></div>
        </div>
    );
};

export default AuthLayout;