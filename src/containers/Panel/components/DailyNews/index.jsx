import React, { useState } from 'react';
import Details from './components/Details';
import NewsList from './components/NewsList';

const DailyNews = () => {
    const [openNews, setOpenNews] = useState(false)
    return (
        <div className='border border-darkness-500 relative backdrop-blur-lg rounded-3xl w-full overflow-auto bg-darkness-500 h-[644px] [&::-webkit-scrollbar]:w-0'>
            <NewsList {...{openNews, setOpenNews}} />
            <Details {...{openNews, setOpenNews}} />
        </div>
    );
};

export default DailyNews;