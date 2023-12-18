import React from 'react';
import Icon from 'components/Icon';

const TableBody = ({data}) => {
    return (
        <tr className=' [&>td]:h-16 [&>td]:min-w-[140px] border-b-2 border-darkness-500 last:border-none'>
            <td className='flex items-center gap-2 pl-6'>
                <Icon name={data?.icon} size='24px' />
                <span>{data?.coin}</span>
            </td>
            <td>
                ${data?.price?.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}
            </td>
            <td>
                ${data?.marketcap}
            </td>
            <td>
                ${data?.volume}
            </td>
            <td>
                <div className={`flex items-center justify-center rounded-lg p-2 w-fit ${data?.hour?.status === 'INCREASE' ? 'bg-other-green' : 'bg-other-red'}`}>
                    <Icon name={data?.hour?.status === 'INCREASE' ? 'increase' : 'decrease'} size='14' />
                    <span className='text-darkness-600 text-sm ml-1'>{data?.hour?.percentage}%</span>
                </div>
            </td>
            <td>
                <div className={`flex items-center justify-center rounded-lg p-2 w-fit ${data?.day?.status === 'INCREASE' ? 'bg-other-green' : 'bg-other-red'}`}>
                    <Icon name={data?.day?.status === 'INCREASE' ? 'increase' : 'decrease'} size='14' />
                    <span className='text-darkness-600 text-sm ml-1'>{data?.day?.percentage}%</span>
                </div>
            </td>
            <td>
                <div className='flex gap-4'>
                    <button className='p-2 rounded-lg bg-darkness-500 transition-colors hover:bg-darkness-400'>
                        <Icon name='ArrowTop' size='16' />
                    </button>
                    <button className='p-2 rounded-lg bg-darkness-500 transition-colors hover:bg-darkness-400'>
                        <Icon name='ArrowBottom' size='16' />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default TableBody;