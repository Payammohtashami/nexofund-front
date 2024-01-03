import React from 'react';

// components
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import { CryptoBubblesTableData } from 'mock/home';

const CryptoBubbles = () => {
    return (
        <div className="mb-20 relative">
            <div className='flex justify-between mb-4 z-30'>
                <h3 className='title'>Crypto Bubble</h3>
            </div>
            <div className='w-full z-30 rounded-3xl border-2 border-darkness-500 bg-darkness-500'>
                <div className="relative overflow-x-auto">
                    <table className='w-full text-left'>
                        <thead className='text-darkness-200 text-base '>
                            <TableHeader />
                        </thead>
                        <tbody className='text-darkness-100 text-xs tracking-wider items-center'>
                            {CryptoBubblesTableData.map((row) => <TableBody key={`table-body-${row.id}`} data={row} /> )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mesh bg-primary-400 w-20 h-20 right-[15%] bottom-[40%]'></div>
            <div className='mesh bg-primary-400 w-20 h-20 left-[15%] bottom-[20%]'></div>
            <div className='mesh bg-primary-500 w-20 h-20 left-[5%] top-6'></div>
        </div>
    );
};


export default CryptoBubbles;