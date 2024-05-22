import React from 'react';
import { IconButton } from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import com from '../assets/6.png';
import com2 from '../assets/12.png';
import com3 from '../assets/11.png';

const cardsData = [
  { id: 1, title: 'Competitive Programming', imgSrc: com },
  { id: 2, title: 'Internship Fundae', imgSrc: com2 },
  { id: 3, title: 'Interview Ready', imgSrc: com3 }
];

const SuggestedCards = () => {
  return (
    <div className='flex mb-10 mr-2'>
      {cardsData.map(card => (
        <div key={card.id} className='bg-white mt-2 ml-2 mr-2 rounded-md max-h-fit w-[33%] flex relative space-y-5'>
          <div>
            <div className='mt-4 space-y-14'>
              <div className='max-w-[50%] m-3 space-y-4 ml-8'>
                <p className='text-2xl font-bold text-black'>{card.title}</p>
              </div>
              <div className=' m-3 ml-8 mt-5 mb-6 flex items-center'>
                <div className='space-x-2  h-12 rounded-full bg-brandPrimary text-md text-white flex items-center justify-between px-2 mb-7 cursor-pointer'>
                  <div className='font-medium'>Book Now</div>
                  <div className='bg-white rounded-full p-1 flex items-center'>
                    <IconButton style={{ color: "#8455F6", padding: 0 }}>
                      <SouthEastIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='img' style={{
            boxShadow: 'rgb(249, 226, 245) 0 10px 202px 82px inset',
            borderTopLeftRadius: '98%',
            borderTopRightRadius: '-20%',
            borderBottomRightRadius: '10px',
            width: '200px',
            height: '160px',
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            overflow: 'hidden'
          }}>
            <img src={card.imgSrc} alt="" className='w-[8rem] absolute mt-3 bottom-1 right-1' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedCards;
