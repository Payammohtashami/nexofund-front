import React from 'react';
import Icon from 'components/Icon';
import Image from 'next/image';

const DownloadApp = () => {
    return (
        <div className='relative pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-4'>
                <div className='col-span-1 md:col-span-6'>
                    <h4 data-aos='fade-right' data-aos-delay='100' data-aos-duration='600' className='title'>Download It Now</h4>
                    <p data-aos='fade-right' data-aos-delay='250' data-aos-duration='600' className='text-darkness-200 mt-2.5 mb-8 text-sm md:text-base leading-6 md:leading-7'>
                        Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit 
                        tristique amet proin molestie. In cras in fusce erat phasellus. 
                        Ultricies tempor egestas rhoncus egestas dignissim risus dictum 
                        nascetur. Non tristique at lectus tristique.Ultricies tempor egestas 
                        rhoncus egestas dignissim risus dictum .
                    </p>
                    <div className='flex gap-4'>
                        <button data-aos='fade-right' data-aos-delay='250' data-aos-duration='600' className='overflow-hidden hover:shadow-btn rounded-2xl p-[1px] transition bg-gradient-dark-100 hover:bg-gradient-primary'>
                            <div className='flex items-center gap-4 w-full h-full px-4 lg:px-8 rounded-[15px] bg-darkness-800 py-4 hover:bg-darkness-600'>
                                <Icon name='AppleLogo' className="text-white" size="32px" />
                                <p className='text-left text-white font-medium text-xs md:text-base'>
                                    <span className="mb-1 text-xs md:text-sm block text-slate-200">Available on</span>
                                    App Store
                                </p>
                            </div>
                        </button>
                        <button data-aos='fade-right' data-aos-delay='250' data-aos-duration='600' className='overflow-hidden hover:shadow-btn rounded-2xl p-[1px] transition bg-gradient-dark-100 hover:bg-gradient-primary'>
                            <div className='flex items-center gap-4 w-full h-full px-4 lg:px-8 rounded-[15px] bg-darkness-800 py-4 hover:bg-darkness-600'>
                                <Icon name='GooglePlayLogo' className="text-white" size="32px" />
                                <p className='text-left text-white font-medium text-xs md:text-base'>
                                    <span className="mb-1 text-xs md:text-sm block text-slate-200">Available on</span>
                                    Google play
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-6'>
                    <Image src='/images/Home/download.png' alt='download' width={480} height={480} loading='lazy' className='w-60 md:w-[480px] mx-auto' />
                </div>
            </div>
            <div className='mesh bg-primary-500 w-20 h-20 left-[5%] top-6'></div>
        </div>
    );
};

export default DownloadApp;