import React, { useState } from 'react';

// components
import { AddRounded } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

// mui styles
import styles from './styles';

// mock
import { faqData } from 'mock/faq';

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='container mx-auto px-2 xl:max-w-screen-xl relative top-0 py-2 md:py-2 md:px-0 mb-24'>
            <div className='z-10 relative mt-36 md:mt-44 border rounded-3xl backdrop-blur-lg p-6 border-darkness-500 bg-darkness-500'>
                {faqData?.map((item) => (
                    <Accordion sx={styles.accordionWrapper} expanded={expanded === item.id} key={item.id} onChange={handleChange(item.id)}>
                        <AccordionSummary
                            expandIcon={<AddRounded sx={{fill: expanded === item?.id ? '#4A3AFF' : '#FFF'}} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <p className={`py-6 font-medium text-xl ${expanded === item?.id ? 'text-primary-400' : 'text-darkness-200'}`}>
                                {item.title}
                            </p>
                        </AccordionSummary>
                        {expanded === item?.id ? 
                            <AccordionDetails>
                                <p className='text-darkness-200 leading-7'>
                                    {item?.descriptions}
                                </p>
                            </AccordionDetails>
                            :
                            null
                        }
                    </Accordion>
                ))}
            </div>
            <div className='mesh bg-primary-500 w-20 h-20 left-[5%] top-24'></div>
            <div className='mesh bg-primary-400 w-20 h-20 right-[10%] top-48'></div>
            <div className='mesh bg-primary-400 w-20 h-20 right-[40%] top-[60%]'></div>
        </div>
    );
};


export default FAQ;