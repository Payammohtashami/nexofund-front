import React, { useState } from 'react';
import styles from './styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { AddRounded, ExpandMoreRounded } from '@mui/icons-material';

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box className='container'>
            <Box sx={{minHeight: '100vh', my: '148px'}}>
                <Box sx={styles.wrapper}>
                    {data?.map((item) => (
                        <Accordion sx={styles.accordionWrapper} expanded={expanded === item.id} key={item.id} onChange={handleChange(item.id)}>
                            <AccordionSummary
                                expandIcon={<AddRounded sx={{fill: expanded === item?.id ? '#4A3AFF' : '#FFF'}} />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={expanded === item?.id ? styles.activeTitle : styles.accordionTitle}>
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={styles.accordionDescription}>
                                    {item?.descriptions}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

const data = [
    {
        id: 'sections-1',
        number: '01',
        title: 'What Do We Do?',
        descriptions: `We are the first crypto prop-trading platform, featuring up-to-date news and other datas required to assess the crypto market at ease, that allows you to use AI to trade more wisely. Also the users' comments will let you avoid some of the risks. Additionally, the users can participate in challenges to earn assets, as well as utilizing features like up-to-date news about the cryptos aimed to trade with multi-language translation in Nexofund.`,
        image: '/images/Home/howToWork1.png',
    },
    {
        id: 'sections-2',
        number: '02',
        title: 'How can I Make Money?',
        descriptions: `You can participate in prop-trading challenge with economical plans, and after meeting the challenge's conditions, the funds will be provided to you according to the plan of your choice. You can trade using this funds and 100% of the earnings will be added to your account and available to withdraw.`,
        image: '/images/Home/howToWork2.png',
    },
    {
        id: 'sections-3',
        number: '03',
        title: 'Great, how Can I start?',
        descriptions: `You can check the plans and choose one of them according to your interest. You'll participate in the challenge immediately where you can start trading. If your budget doesn't meet the plan's price, you can leave proper comments on the news, and earn a part of the required budget.`,
        image: '/images/Home/howToWork3.png',
    },
    {
        id: 'sections-4',
        number: '04',
        title: 'Free Trial',
        descriptions: `Even if you don't meet the required budget or you are not well assured yet, don't worry. You can simply sign up and leave comments on a limited number of the news and earn Dogecoins as rewards. ( Some of the platform features shown on their profile will be deactivated and only available to use for the users with active plans. In addition, the paid users will have access to all the comments to pass their challenge more conveniently. )`,
        image: '/images/Home/howToWork4.png',
    },
    {
        id: 'sections-5',
        number: '05',
        title: 'Know Your Trading Tools ',
        descriptions: `We have set some targets in each plan, which demand the user's competence in investment and evaluating the market . The users should hit the targets in a certain period of time to claim the funds at the end of the challenge. The position size, limits or instruments you use are all up to you.`,
        image: '/images/Home/howToWork5.png',
    },
    {
        id: 'sections-6',
        number: '06',
        title: 'Payout System',
        descriptions: `There will be no tax included in the successfully earned funds through the challenges. These Nexofund users will have the earned assets as well as 100% of the initial funds. The free users will earn ( n darsad) Dogecoins and the paid users will earn ( n darsad) Dogecoins for their comments in the news section.`,
        image: '/images/Home/howToWork6.png',
    },
    {
        id: 'sections-7',
        number: '07',
        title: 'About Us',
        descriptions: `We have set some targets in each plan, which demand the user's competence in investment and evaluating the market . The users should hit the targets in a certain period of time to claim the funds at the end of the challenge. The position size, limits or instruments you use are all up to you.`,
        image: '/images/Home/howToWork7.png',
    },
];
export default FAQ;