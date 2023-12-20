import Icon from 'components/Icon';
import HeroBackground from 'components/Icon/HeroBackground';
import { FuturaFont } from 'theme/LocalFonts.js';

const Hero = () => {
    const scrollTo = () => {
        window.scrollTo({
            top: window.screen.height * 1,
            behavior: 'smooth'
        })
    }
    return (
        <div className='h-[160vh] relative'>
            <div className='sticky min-h-[320px] h-screen w-full top-0 z-10' data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <h1 className={`${FuturaFont.className} text-darkness-100 tracking-[24px] text-xl md:text-3xl text-center`}>NEXOFUND</h1>
                    <p className='text-darkness-100 text-center text-base md:text-xl leading-10 mr-6'>Predict It Right , Get Free Doge Coin</p>
                    <div className='flex items-center mt-8 bg-gradient-primary overflow-hidden hover:shadow-btn rounded-2xl p-[1px] transition'>
                        <button onClick={scrollTo} className=' gap-2 bg-darkness-800 hover:bg-transparent transition-colors flex items-center text-white px-9 py-4 rounded-[15px]'>
                            Let’s Begin
                            <Icon name={'ArrowBottom'} className="animate-up-down" size='24px' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='-z-0 absolute w-[calc(100vw-6px)] -top-[60vw] h-[calc(100vw-6px)]' data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800'>
                <HeroBackground classname='w-full h-full' />
                <span
                    className='rounded-full absolute -z-10 top-0 w-full h-full blur-3xl'
                    style={{background: 'radial-gradient(circle, rgba(38,44,198,1) 65%, rgba(39,57,201,1) 70%, rgba(52,203,236,1) 100%)'}}
                ></span>
                <span
                    className='rounded-full absolute -z-10 top-0 w-full h-full'
                    style={{background: 'radial-gradient(circle, rgba(8,7,26,1) 24%, rgba(19,17,55,1) 40%, rgba(21,18,59,1) 46%, rgba(22,20,64,1) 58%, rgba(27,22,101,1) 62%, rgba(37,29,193,1) 70%, rgba(36,146,226,1) 80%)'}}
                ></span>
            </div>
        </div>
    );
};

export default Hero;