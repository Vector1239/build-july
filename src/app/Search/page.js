"use client"

import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import Listlist from '../Listlist';
import FilterDropdown from '../FilterDropdown';
// import CampaignTable from '../CampaignTable';
import CreatePlan from '../CreatePlan.js';
import CreateList from '../CreateList.js';
import SearchTable from '../Tables/SearchTable.js';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const platforms = ['Instagram', 'Twitter'];

const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha (Orissa)',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh (UP)',
    'Uttarakhand (Uttaranchal)',
    'West Bengal'
];


export default function InfluencerSearch() {

    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [gen, setGen] = useState('');

    const handleGenChange = (event) => {
        setGen(event.target.value);
    };


    const [platform, setPlatform] = useState('');

    const handlePlatformChange = (event) => {
        setPlatform(event.target.value);
    };

    const [showList, setShowList] = useState(false);
    const [plan, setPlan] = useState('');

    function handleClick(plan) {
        setPlan(plan);
        setShowList(true);
    }

    function handleBack() {
        setShowList(false);
    }


    const [totalFilteredRows, setTotalFilteredRows] = useState(0);
    const [fetchedData, setFetchedData] = useState([]);


    return (
        <>
            {/* Header  */}
            <div className="bg-gradient-header h-auto p-7">
                {/* <h1 className="text-5xl font-bold text-white">Discover</h1> */}
                <div className='my-2 text-xs'>
                    <label className="text-offWhite my-2 text-xs">Search Influencer</label>
                    <div className="relative flex items-center w-full h-8 rounded-md focus-within:shadow-lg bg-offWhite overflow-hidden"
                        style={{
                            boxShadow: '0px 0px 0px 0px rgba(76, 61, 255, 0.30), 0px 7px 15px 0px rgba(76, 61, 255, 0.29), 0px 27px 27px 0px rgba(76, 61, 255, 0.26), 0px 61px 37px 0px rgba(76, 61, 255, 0.15), 0px 108px 43px 0px rgba(76, 61, 255, 0.04), 0px 169px 47px 0px rgba(76, 61, 255, 0.01)'
                        }}>
                        <div className="grid place-items-center h-full w-12 text-navyBlue">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer w-full outline-none  text-gray-700 bg-offWhite pr-1 text-xs"
                            type="text"
                            id="search"
                            placeholder="Enter keywords to capture Bio,Names,Usernames,etc.."
                        />
                    </div>
                </div>


                <div className='flex'>
                    <div className='my-1 mr-4'>
                        <label className="text-offWhite my-4 text-xs">Platform</label>
                        <FormControl sx={{ width: 200, marginTop: 3, marginLeft: -7 }}>
                            <Select
                                id="demo-multiple-checkbox"
                                displayEmpty
                                value={platform}
                                onChange={handlePlatformChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <strong>Platform</strong>;
                                    }
                                    return selected;
                                }}
                                MenuProps={{
                                    sx: {
                                        width: 180,
                                        maxHeight: 200,
                                    },
                                }}
                                placeholder="Platform"
                                sx={{
                                    backgroundColor: '#e4e9ff',
                                    fontFamily: 'Montserrat',
                                    fontSize: '0.75rem',
                                    height: 40,
                                }}
                            >
                                <MenuItem disabled value="">
                                    <h6>Platform</h6>
                                </MenuItem>
                                {platforms.map((name) => (
                                    <MenuItem key={name} value={name} sx={{ fontSize: '0.75rem' }}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='my-1 mr-4'>
                        <label className="text-offWhite my-4 text-xs">Location</label>
                        <FormControl sx={{ width: 200, marginTop: 3, marginLeft: -7 }}>
                            {/* <InputLabel id="demo-multiple-checkbox-label" className='text-offWhite'>State</InputLabel> */}
                            <Select
                                id="demo-multiple-checkbox"
                                multiple
                                displayEmpty
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <strong>State</strong>;
                                    }
                                    return selected.join(', ')
                                }
                                }
                                MenuProps={{
                                    sx: {
                                        width: 200, // Adjust the width as desired
                                        maxHeight: 200,
                                        fontSize: '0.75rem',
                                    },
                                }}
                                placeholder="States"
                                sx={{ backgroundColor: "#e4e9ff", fontFamily: "Montserrat", fontSize: '0.75rem', height: 40 }}
                            >
                                <MenuItem disabled value="">
                                    <h6>State</h6>
                                </MenuItem>
                                {states.map((name) => (
                                    <MenuItem key={name} value={name} sx={{ fontSize: '0.75rem' }}>
                                        <Checkbox sx={{ fontSize: '0.75rem' }} checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='my-1 mr-5'>
                        <label className="text-offWhite my-4 text-xs">Gender</label>
                        <FormControl sx={{ width: 200, marginTop: 3, marginLeft: -6 }}>
                            {/* <InputLabel id="demo-multiple-checkbox-label" className='text-offWhite'>State</InputLabel> */}
                            <Select
                                id="demo-multiple-checkbox"
                                displayEmpty
                                value={gen}
                                onChange={handleGenChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <strong>Gender</strong>;
                                    }
                                    return selected
                                }}
                                MenuProps={{
                                    sx: {
                                        width: 180, // Adjust the width as desired
                                        maxHeight: 200, // Adjust the maximum height as desired
                                    },
                                }} placeholder="Gender"
                                sx={{
                                    backgroundColor: "#e4e9ff",
                                    fontFamily: "Montserrat",
                                    fontSize: '0.75rem',
                                    height: 40,
                                    '& .MuiListItem-root': {
                                        fontSize: '0.75rem',
                                    },
                                }}
                            >
                                <MenuItem disabled value="">
                                    <h6>Gender</h6>
                                </MenuItem>
                                <MenuItem value={"Male"} sx={{ fontSize: '0.75rem' }}>Male</MenuItem>
                                <MenuItem value={"Female"} sx={{ fontSize: '0.75rem' }}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div style={{ marginLeft: 'auto' }} className='my-4'>
                        <FilterDropdown />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <Button style={{ textTransform: 'none', fontFamily: 'Montserrat', borderRadius: 4 }}
                            variant='contained'
                            className="
                     bg-blurp hover:bg-blurp2 text-white
                     text-16 font-bold leading-normal px-4 my-4"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
            {/* Header close */}
            <div className='flex '>
                <SearchTable filterStatus={'all'} />
                {/* {showList ? <CreateList onBack={handleBack} plan={JSON.stringify(plan)} /> : <CreatePlan onClick={handleClick} />} */}
            </div>
        </>
    )
}