"use client"

import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ListItemIcon, ListItemText } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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

const plat = [
    'Instagram',
    'Twitter'
];


export default function Discover() {

    const [platform, setPlatform] = useState('Instagram');

    const handlePlatformChange = (event: React.ChangeEvent<{ value: string }>) => {
        const selectedPlatform = event.target.value as string;

        if (selectedPlatform === platform) {
            return; // Do nothing if the selected platform is the same as the current platform
        }

        setPlatform(selectedPlatform);
    };

    const [personName, setPersonName] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<{ value: string }>) => {
        const bruh = event.target.value as string;

        setPersonName(bruh);
    };



    return (
        <>
            <div className="bg-gradient-header bg-blend-normal flex flex-col justify-center  h-auto items-center p-20">
                <div className="text-4xl font-['Montserrat'] font-semibold text-white ">
                    Instantly Connect with Influencers from the Largest Database
                </div>
                <div className="flex flex-row justify-center my-10 items-center">
                    <div className="shadow-[0px_0px_0px_0px_rgba(76,_61,_255,_0.3),_0px_3px_6px_0px_rgba(76,_61,_255,_0.29),_0px_12px_12px_0px_rgba(76,_61,_255,_0.26),_0px_26px_16px_0px_rgba(76,_61,_255,_0.15),_0px_46px_19px_0px_rgba(76,_61,_255,_0.04),_0px_73px_20px_0px_rgba(76,_61,_255,_0.01)] bg-white flex flex-row justify-center gap-5 h-12 items-center px-6 py-3 roundedtl roundedbl">

                        <FormControl
                            sx={{
                                m: 0,
                                minWidth: 120,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'transparent', // Remove outline
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'transparent', // Remove hover outline
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'transparent', // Remove focus outline
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Montserrat', // Set font to Montserrat
                                    },
                                    '& .MuiSelect-root': {
                                        fontFamily: 'Montserrat', // Set font to Montserrat
                                    },
                                    '& .MuiListItem-root.Mui-selected': {
                                        backgroundColor: 'transparent', // Prevent unselecting when clicking the same option
                                    },

                                },
                            }}
                            size="medium"
                        >
                            <InputLabel id="demo-select-small-label"></InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={platform}
                                label="Platform"
                                onChange={handlePlatformChange}
                                renderValue={(value) => value || 'Platform'}
                            >
                                <MenuItem value="Instagram" >
                                    <ListItemIcon sx={{ color: '#354682' }}>
                                        <InstagramIcon fontSize="small" /> {/* Adjust the size as needed */}
                                    </ListItemIcon>
                                    <ListItemText primary="Instagram" sx={{ color: '#354682' }} />
                                </MenuItem>
                                <MenuItem value="YouTube">
                                    <ListItemIcon sx={{ color: '#354682' }}>
                                        <YouTubeIcon fontSize="small" /> {/* Adjust the size as needed */}
                                    </ListItemIcon>
                                    <ListItemText primary="YouTube" sx={{ color: '#354682' }} />
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </div>

                    <div className="justify-start w-[638px]">
                        {/* <div className="border-solid border-[#2a1ea8] w-px h-8 absolute top-2 left-0 borderr borderl-0 bordery-0" /> */}
                        <div className="flex items-center ">
                            <input
                                className="font-['Montserrat'] font-medium text-black w-full
         shadow-[0px_0px_0px_0px_rgba(76,_61,_255,_0.3),_0px_7px_15px_0px_rgba(76,_61,_255,_0.29),_0px_27px_27px_0px_rgba(76,_61,_255,_0.26),_0px_61px_37px_0px_rgba(76,_61,_255,_0.15),_0px_108px_43px_0px_rgba(76,_61,_255,_0.04),_0px_169px_47px_0px_rgba(76,_61,_255,_0.01)]
                          bg-[#e4e8ff]  h-12  px-4 roundedtr roundedbr focus:outline-none"
                                placeholder="Enter additional keywords, categories, topics, bio keywords, etc."
                            />
                            <div style={{ position: 'relative', right: '50px' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="text-black "
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between p-4'>
                <div className="whitespace-nowrap text-sm font-['Montserrat'] text-[#354681] w-full">
                    Browse through our personalized selection of curated influencer lists.
                </div>
                <FormControl sx={{ width: 200 }}>
                    <Select
                        id="demo-multiple-checkbox"
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        MenuProps={MenuProps}
                        displayEmpty
                        sx={{
                            backgroundColor: '#e4e9ff',
                            fontFamily: 'Montserrat',
                            fontWeight: '400',
                            height: '40px', // Decrease the overall height
                        }}
                        renderValue={(selected) => (selected ? selected : 'Select Platform')}
                    >
                        <MenuItem disabled value="">
                            <em>Select Platform</em>
                        </MenuItem>
                        {plat.map((name) => (
                            <MenuItem key={name} value={name}>
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className='px-4 font-bold text-navyBlue'>
                Entertainment
            </div>
        </>
    )
}