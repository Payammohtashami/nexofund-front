import React from 'react';
import Image from 'next/image';
import styles from './styles';
import { Box, Stack, Typography } from '@mui/material';

const HowToWork = () => {

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
        // {
        //     id: 'sections-5',
        //     number: '05',
        //     title: 'Know Your Trading Tools ',
        //     descriptions: `We have set some targets in each plan, which demand the user's competence in investment and evaluating the market . The users should hit the targets in a certain period of time to claim the funds at the end of the challenge. The position size, limits or instruments you use are all up to you.`,
        //     image: '/images/Home/howToWork5.png',
        // },
        // {
        //     id: 'sections-6',
        //     number: '06',
        //     title: 'Payout System',
        //     descriptions: `There will be no tax included in the successfully earned funds through the challenges. These Nexofund users will have the earned assets as well as 100% of the initial funds. The free users will earn ( n darsad) Dogecoins and the paid users will earn ( n darsad) Dogecoins for their comments in the news section.`,
        //     image: '/images/Home/howToWork6.png',
        // },
        // {
        //     id: 'sections-7',
        //     number: '07',
        //     title: 'About Us',
        //     descriptions: `We have set some targets in each plan, which demand the user's competence in investment and evaluating the market . The users should hit the targets in a certain period of time to claim the funds at the end of the challenge. The position size, limits or instruments you use are all up to you.`,
        //     image: '/images/Home/howToWork7.png',
        // },
    ];
    return (
        <Box sx={{top: '-128px', position: 'relative',}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' className='title' sx={{mb: 3}}>How It Works?</Typography>
                <Box>
                    {data?.map((item, index) => (
                        <Stack key={item?.id} direction={{xs: 'column', md: 'row'}} gap='8px'>
                            {index % 2 === 0 ? 
                                <Box data-aos='zoom-in' data-aos-delay='150' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Box sx={styles.textsWrapper}>
                                        <Typography sx={styles.numberText}>{item.number}</Typography>
                                        <Typography sx={styles.titleText}>{item.title}</Typography>
                                        <Typography sx={styles.descriptionsText}>{item.descriptions}</Typography>
                                    </Box>
                                </Box>
                                :
                                <Box data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Image src={item.image} height='320' width='320' />
                                </Box>
                            }
                            <Box orientation='vertical' sx={{background: (theme) => theme.palette.solid.dark1, width: '1px', display: {xs: 'none', md: 'block'} }} />
                            {index % 2 !== 0 ? 
                                <Box data-aos='zoom-in' data-aos-delay='150' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Box sx={styles.textsWrapper}>
                                        <Typography sx={styles.numberText}>{item.number}</Typography>
                                        <Typography sx={styles.titleText}>{item.title}</Typography>
                                        <Typography sx={styles.descriptionsText}>{item.descriptions}</Typography>
                                    </Box>
                                </Box>
                                :
                                <Box data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Image src={item.image} height='320' width='320'  />
                                </Box>
                            }
                        </Stack>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HowToWork;