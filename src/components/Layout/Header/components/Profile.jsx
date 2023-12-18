import React, { useState } from 'react';

// components
import Icon from 'components/Icon';
import { Menu, MenuItem } from '@mui/material';

// mui styles
import styles from '../styles';

const Profile = () => {
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
                sx={styles.blueButton}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='btn btn-blue !py-0 !px-4 md:!px-6'
            >
                <div className='flex items-center md:gap-2 py-2'>
                    <Icon name='profileUserButton' size='16'  />
                    <p className='text-white text-sm font-medium hidden md:block'>Profile</p>
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
                <MenuItem className='!text-other-red hover:!bg-darkness-400 !rounded-lg' onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default Profile;