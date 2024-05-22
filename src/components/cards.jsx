import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';
import asset6 from "../assets/9.png";
import asset7 from "../assets/8.png";
import asset8 from "../assets/9.png";
import asset9 from "../assets/7.png";

const cardData = [
    {
        title: 'Competitive Programming',
        bgColor: 'bg-blue-700',
        image: asset6,
        duration: '1 hr 30 min',
        imageSize: 'w-[13.5rem]'
    },
    {
        title: 'Case Study & Guesstimates',
        bgColor: 'bg-orange-500',
        image: asset7,
        duration: 'Live',
        imageSize: 'w-[10.5rem]'
    },
    {
        title: 'Financial Analysis',
        bgColor: 'bg-red-500',
        image: asset8,
        duration: '1 hr 30 min',
        imageSize: 'w-[13.5rem]'
    },
    {
        title: 'Resume Making',
        bgColor: 'bg-green-500',
        image: asset9,
        duration: '1 hr 30 min',
        imageSize: 'w-[12.5rem]'
    }
];

const Cards = () => {
    return (
        <div className="mt-5 ml-2">
            <div className='flex justify-between mb-4 mr-2'>
                <h2 className="text-3xl font-semibold">Exclusive Masterclass</h2>
                <div className='text-3xl'>
                    <IconButton>
                        <ChevronLeftIcon style={{ fontSize: 35 }} />
                    </IconButton>

                    <IconButton>
                        <KeyboardArrowRightIcon style={{ fontSize: 35 }} />
                    </IconButton>
                </div>
            </div>

            <div className="flex gap- space-x-3 mr-2">
                {cardData.map((card, index) => (
                    <div key={index} className='flex flex-col bg-white rounded-md shadow-md w-1/4 space-y-4 h-[25rem] relative'>
                        <div className={`flex items-center justify-center rounded-md ${card.bgColor}`}>
                            <img src={card.image} alt="Image" className={`m-4 object-cover bottom-2 right-2 ${card.imageSize}`} />
                        </div>
                        <div className='text-left mb-4 ml-5 space-y-20'>
                            <p className='text-lg font-semibold'>{card.title}</p>
                            <p className={`text-sm px-3 py-1 rounded-full absolute bottom-2 right-2 ${card.duration === 'Live' ? 'border-2 border-red-500' : 'bg-backGroundColor text-blue-600'}`}>{card.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
