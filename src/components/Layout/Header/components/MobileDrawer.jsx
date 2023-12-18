import React from 'react';
import Link from "next/link";
import Icon from 'components/Icon';
import { headerMenu } from 'constant/main';
import { FuturaFont } from 'theme/LocalFonts';

const MobileDrawer = () => {
    return (
        <div className='bg-darkness-800 overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8'>
            <div className="flex flex-col justify-center items-center gap-2 border-b border-darkness-300 pb-3 mb-3">
                <Icon name='Logo' size="42" />
                <h2 className={`${FuturaFont.className} text-white tracking-[10px]`}>NEXOFUND</h2>
            </div>
            <div className="flex flex-col items-center gap-4">
                {headerMenu?.map((item) => (
                    <Link key={item.id} href={item.url} className="text-darkness-100 relative before:bg-primary-400 font-medium animate-underline">
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileDrawer;