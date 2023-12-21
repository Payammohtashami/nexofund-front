import React from 'react';
import Icon from 'components/Icon';
import { CryptoBubblesTableHeader } from 'mock/home';


const TableHeader = () => {
    return (
        <tr>
            {CryptoBubblesTableHeader.map((headCell) => (
                <th key={`header-${headCell.id}`} className='pt-8 pb-4 pr-4 first:pl-6 font-normal'>
                    <div className="flex gap-1 items-center">
                        <span>{headCell.label}</span>
                        <Icon name="sort" />
                    </div>
                </th>
            ))}
        </tr>
    );
};

export default TableHeader;