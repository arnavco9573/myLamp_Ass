import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import Popover from '@mui/material/Popover';
import logo from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'notification-popover' : undefined;

    return (
        <section className="navbar-container">
            <div className='max-w-[1480px] m-auto pt-3 flex justify-between'>
                <div className='flex items-center space-x-2 cursor-pointer'>
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="" className='w-[2rem] h-[2rem]' />
                        <p className='text-3xl font-medium'> <span className='text-[#8455F6]'>wiZ</span>e</p>
                    </Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='' >
                        <NotificationsNoneOutlinedIcon
                        className='border rounded-full p-1 border-gray-400'
                            aria-describedby={id}
                            style={{ fontSize: 45, color: '#8455F6', cursor: 'pointer',padding:"5px" }}
                            onClick={handleClick}
                        />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <div style={{ padding: '20px' }}>
                                <p>Sample Notification 1</p>
                                <p>Sample Notification 2</p>
                                <p>Sample Notification 3</p>
                            </div>
                        </Popover>
                    </div>
                    <Link to="/account" className="flex items-center space-x-2 border border-gray-400 rounded-full px-4 py-2">
                        <span>Account</span>
                        <PersonOutlineOutlinedIcon style={{ fontSize: 30, color: '#8455F6' }} />
                    </Link>
                    <Link to="/menu" className="flex items-center space-x-2 border border-gray-400 rounded-full px-4 py-2">
                        <span>Menu</span>
                        <WidgetsRoundedIcon style={{ fontSize: 30, color: '#8455F6' }} />
                    </Link>
                </div>
            </div>
            <hr className='mt-[0.65rem]' />
        </section>
    )
}

export default Navbar;
