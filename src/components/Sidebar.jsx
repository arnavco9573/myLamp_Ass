import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Home'); 

  const sidebar = [
    {
      icon: <HomeRoundedIcon style={{ fontSize: 35, color: activeLink === 'Home' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Home',
      id: 'Home'
    },
    {
      icon: <ExploreOutlinedIcon style={{ fontSize: 35, color: activeLink === 'Explore' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Explore',
      id: 'Explore'
    },
    {
      icon: <LaptopMacIcon style={{ fontSize: 35, color: activeLink === 'Learn' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Learn',
      id: 'Learn'
    },
    {
      icon: <SchoolIcon style={{ fontSize: 35, color: activeLink === 'Achieve' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Achieve',
      id: 'Achieve'
    },
    {
      icon: <CreateOutlinedIcon style={{ fontSize: 35, color: activeLink === 'Practice' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Practice',
      id: 'Practice'
    },
    {
      icon: <KeyboardAltOutlinedIcon style={{ fontSize: 35, color: activeLink === 'Projects' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Projects',
      id: 'Projects'
    },
    {
      icon: <SignalCellularAltOutlinedIcon style={{ fontSize: 35, color: activeLink === 'Career' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Career',
      id: 'Career'
    },
    {
      icon: <Diversity3OutlinedIcon style={{ fontSize: 35, color: activeLink === 'Mentorship' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Mentorship',
      id: 'Mentorship'
    },
    {
      icon: <MessageOutlinedIcon style={{ fontSize: 35, color: activeLink === 'Blogs' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Blogs',
      id: 'Blogs'
    },
    {
      icon: <GroupsRoundedIcon style={{ fontSize: 35, color: activeLink === 'Community' ? '#8455F6' : '#6b7280', transition: 'color 0.3s' }} />,
      name: 'Community',
      id: 'Community'
    },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <div className="fixed top-0 left-0 mt-16 bottom-0 bg-white w-64 overflow-auto z-50">
      <div className="sidebar-items mt-5 space-y-3">
        {sidebar.map((item, index) => (
          <div key={index} className="flex items-center space-x-3" onClick={() => handleLinkClick(item.name)}>
            {item.icon}
            <span className={`font-medium ${activeLink === item.name ? 'text-brandPrimary' : 'text-gray-700'}`} style={{ fontSize: 20 }}>{item.name}</span>
          </div>
        ))}
      </div>
      {/* Sidebar bottom content */}
      <div className="sidebar-bottom items-center justify-center mt-10 ml-[21.5px] relative">
        <div className="bg-brandSecondary rounded-md w-[13rem] h-[7rem] flex items-center justify-center relative">
          <div className="bg-brandSecondary border-4 rounded-full w-12 h-12 absolute top-0 transform -translate-y-1/2 left-[39%]" style={{ marginTop: '2px' }}>
            {/* Your circle content */}
          </div>
        </div>
      </div>
      <div className="sidebar-bottom items-center justify-center mt-5 ml-[21.5px] relative">
        <div className="bg-backGroundColor rounded-md w-[13rem] h-[6rem] mr-4 flex flex-col justify-center items-center relative">
          <p className="text-black-700 mb-2 font-semibold text-xl">Connect with us</p>
          <div className='flex ml-2'>
            <IconButton>
              <WhatsAppIcon className="" style={{ fontSize: 30, color: '#25D366' }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon className=""  style={{ fontSize: 30, color: '#0762C8' }}/>
            </IconButton>
            <IconButton>
              <InstagramIcon className="" style={{ fontSize: 30, color: '#FCAF45' }} />
            </IconButton>
            <IconButton>
              <YouTubeIcon style={{ fontSize: 30, color: '#FF0000' }} />
            </IconButton>
            <IconButton>

            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
