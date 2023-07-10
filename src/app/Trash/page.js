"use client"

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from "@mui/material";
import { useState } from 'react';
import EnhancedTable from '../CampaignTable';


export default function Trash() {
    const [selectedTab, setSelectedTab] = useState('all');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
            <div className="flex justify-between p-10">
                <h1 className="text-navyBlue2 text-2xl font-bold leading-normal">
                    Campaigns
                </h1>
                <Button style={{ textTransform: 'none', fontFamily: 'Montserrat' }}
                    sx={{ borderRadius: 2, backgroundColor: "#111E4D" }}
                    variant="contained"
                    startIcon={<AddCircleIcon className='text-darkPurpur' />} className="px-4 py-2
                     bg-navyBlue hover:bg-navyBlue3 text-white
                     text-16 font-medium leading-normal"
                >
                    Create Campaign
                </Button>
            </div>

            <hr className="border-1 bg-rgba(51, 62, 160, 0.75) h-1" />

            <div className=" container flex justify-center text-20 font-normal font-semibold mx-auto py-2 my-2 rounded-md w-3/4 bg-navyBlue">
                <button
                    className={`px-4 py-2 rounded-l-md w-48 ${selectedTab === 'all' ? 'bg-blurp2 text-white' : 'bg-blurp text-white'}`}
                    onClick={() => handleTabClick('all')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 w-48 ${selectedTab === 'active' ? 'bg-blurp2 text-white' : 'bg-blurp text-white'}`}
                    onClick={() => handleTabClick('active')}
                >
                    Active
                </button>
                <button
                    className={`px-4 py-2 w-48 ${selectedTab === 'draft' ? 'bg-blurp2 text-white' : 'bg-blurp text-white'}`}
                    onClick={() => handleTabClick('draft')}
                >
                    Draft
                </button>
                <button
                    className={`px-4 py-2 w-48 ${selectedTab === 'review' ? 'bg-blurp2 text-white' : 'bg-blurp text-white'}`}
                    onClick={() => handleTabClick('review')}
                >
                    Under Review
                </button>
                <button
                    className={`px-4 py-2 rounded-r-md w-48 ${selectedTab === 'completed' ? 'bg-blurp2 text-white' : 'bg-blurp text-white'}`}
                    onClick={() => handleTabClick('completed')}
                >
                    Completed
                </button>
            </div>

            <div className="flex justify-end mx-60">
                <div className="relative mt-1">
                    <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..." />
                    <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                        <i className="mdi mdi-magnify"></i>
                    </button>

                </div>
            </div>

         {/* TABLE  */}
        <EnhancedTable/>
        </>
    )
}