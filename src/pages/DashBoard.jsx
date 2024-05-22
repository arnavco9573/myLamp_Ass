// Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import mentor from '../assets/mentor.jpg';
import com from '../assets/6.png'; // Adjust the path to your image
import DvrIcon from '@mui/icons-material/Dvr';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Cards from '../components/cards';
import { CircularProgress, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SuggestedCards from '../components/SuggestedCards';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Dashboard = () => {
  const percentage = 40;
  return (<>
    <Navbar />
    <div className="flex">
      <Sidebar /> {/* Move the Sidebar component outside the flex container */}
      <div className="flex flex-col flex-1 bg-backGroundColor relative pl-64">
        {/* Dashboard content goes here */}
        <div className='bg-white mt-2 ml-2 mr-2 rounded-md max-h-fit flex space-x-7'>
          <div className='bg-[#B84D74] w-[50%] py-[10rem] m-2 rounded-md relative'>
            <div className='w-[53%] absolute bottom-0 right-0'>
              <img src={mentor} alt="" style={{ background: 'none' }} />
            </div>
          </div>
          <div className='w-[40%] mt-2 space-y-4'>
            {/* Other content */}
            <p className='text-sm bg-backGroundColor w-fit px-8 py-2 rounded-full text-blue-600 font-medium'>My Mentor</p>
            <p className='text-2xl font-semibold'>Mr.Ankit Awasthi</p>
            <div className='flex space-x-3 ml-4 text-md text-gray-500 font-medium'>
              <DvrIcon style={{ color: '#8455F6' }} />
              <p>Highlights:</p>
              <p>IIT Delhi Graduate | Bain & Company</p>
            </div>
            <div className='flex space-x-3 ml-4 text-md text-gray-500 font-medium'>
              <BookmarksIcon style={{ color: '#8455F6' }} />
              <p>About:</p>
              <p>Ankit is an IIT Delhi graduate and
                current Bain & Company consultant,
                specializing in strategic consulting and
                business optimization</p>
            </div>
            <button className='bg-brandPrimary w-full p-4 rounded-lg text-white text-xl font-medium'>Connect me</button>
          </div>
        </div>

        {/* Booking and Manage Sessions */}
        <div className='flex'>
          {/* Booking */}
          <div className='bg-white mt-2 ml-2 mr-2 rounded-md max-h-fit w-[55%] flex relative'>
            <div className='mt-4'>
              <div className='max-w-[50%] m-3 space-y-4 ml-8'>
                <p className='text-2xl font-semibold'>Session Booking</p>
                <p className='text-gray-500 text-xl'>Book a session for guidance in
                  any specific area like projects,
                  interviews, etc.</p>
              </div>
              <div className='max-w-[50%] m-3 ml-5 mt-5'>
                <button className='m-3 w-full rounded-lg border-2 border-brandPrimary py-4 text-xl font-medium text-brandPrimary'>
                  Book a Session
                </button>
              </div>
            </div>
            <div className='img' style={{
              boxShadow: 'rgb(249, 226, 245) 0 10px 202px 82px inset',
              borderTopLeftRadius: '98%',
              borderTopRightRadius: '-20%',
              borderBottomRightRadius: '10px',
              width: '280px',
              height: '208px',
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              overflow: 'hidden'
            }}>
              <img src={com} alt="" className='w-[10rem] absolute bottom-1 right-1' />
            </div>
          </div>

          {/* Manage Sessions */}
          <div className='bg-white mt-2 ml-2 mr-2 rounded-md max-h-fit w-[45%]'>
            <div className='bg-white mt-2 ml-2 mr-2 rounded-md max-h-fit flex relative'>
              <div className='m-4 space-y-8'>
                <p className='text-2xl font-semibold'>Manage Sessions</p>
                <div className='ml-4 space-y-5'>
                  <p className='text-gray-500 text-xl font-semibold flex gap-1'>Upcoming Sessions: <p>2 </p></p>
                  <p className='text-gray-500 text-xl font-semibold flex gap-1'>Credits Left: <p>5</p> </p>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <button className='w-[96%] items-center ml-3 rounded-lg border-2 border-brandPrimary py-4 text-xl font-medium text-brandPrimary'>Manage Bookings</button>
            </div>
          </div>


        </div>
        <Cards />

        {/* Suggested Sessions */}
        <div className='flex items-center align-middle justify-between'>
          <div className='ml-2 mt-6 mb-5 text-3xl font-semibold'>
            Suggested Sessions
          </div>
          <div className='text-3xl mr-2 mt-1 '>
            <IconButton>
              <ChevronLeftIcon style={{ fontSize: 35 }} />
            </IconButton>

            <IconButton>
              <KeyboardArrowRightIcon style={{ fontSize: 35 }} />
            </IconButton>
          </div>
        </div>
        <SuggestedCards />


      </div>
    </div>
  </>
  );
}

export default Dashboard;
