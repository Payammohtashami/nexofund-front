import React, { useState } from 'react';

// components
import Icon from 'components/Icon';
import { Button, Menu, MenuItem } from '@mui/material';

// mui styles
import styles from '../styles';

const Wallet = () => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };
    return (
        <>
            <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='btn bg-gradient-primary !p-[1px] !transition'
            >
                <div className='flex items-center md:gap-2 px-4 md:px-6 py-2 bg-darkness-800 hover:bg-transparent transition-colors rounded-[15px] w-full'>
                    <Icon name='Wallet' size='20px'  />
                    <p className='text-white text-sm font-medium hidden md:block'>Wallet</p>
                    <Icon name='KeyboardArrowDown' size='24px' />
                </div>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={open}
                onClose={handleClose}
                sx={styles.menuWrapper}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className='!text-white hover:!bg-darkness-400 !rounded-lg' onClick={handleClose}>Profile</MenuItem>
                <MenuItem className='!text-white hover:!bg-darkness-400 !rounded-lg' onClick={handleClose}>My account</MenuItem>
                <MenuItem className='!text-white hover:!bg-darkness-400 !rounded-lg' onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default Wallet;