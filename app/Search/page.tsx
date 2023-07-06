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

    const [minFollower, setMinFollower] = useState('');
    const [maxFollower, setMaxFollower] = useState('');

    const handleMinFollowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinFollower(event.target.valueAsNumber.toString());
    };

    const handleMaxFollowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxFollower(event.target.valueAsNumber.toString());
    };

    const [minFollowing, setMinFollowing] = useState('');
    const [maxFollowing, setMaxFollowing] = useState('');

    const handleMinFollowingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinFollowing(event.target.valueAsNumber.toString());
    };

    const handleMaxFollowingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxFollowing(event.target.valueAsNumber.toString());
    };

    const [minEGRate, setMinEGRate] = useState('');
    const [maxEGRate, setMaxEGRate] = useState('');

    const handleMinEGRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinEGRate(event.target.valueAsNumber.toString());
    };

    const handleMaxEGRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxEGRate(event.target.valueAsNumber.toString());
    };

    const [minVidView, setMinVidView] = useState('');
    const [maxVidView, setMaxVidView] = useState('');

    const handleMinVidView = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinVidView(event.target.valueAsNumber.toString());
    };

    const handleMaxVidView = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxVidView(event.target.valueAsNumber.toString());
    };

    const [minLikes, setMinLikes] = useState('');
    const [maxLikes, setMaxLikes] = useState('');

    const handleMinLikes = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinLikes(event.target.valueAsNumber.toString());
    };

    const handleMaxLikes = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxLikes(event.target.valueAsNumber.toString());
    };

    const [minPosts, setMinPosts] = useState('');
    const [maxPosts, setMaxPosts] = useState('');

    const handleMinPosts = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPosts(event.target.valueAsNumber.toString());
    };

    const handleMaxPosts = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPosts(event.target.valueAsNumber.toString());
    };

    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            {/* Header  */}
            <div className="bg-gradient-header h-auto p-10">
                <h1 className="text-5xl font-bold text-white">Discover</h1>
                <div className='my-5'>
                    <label className="text-offWhite my-4">Search Influencer</label>
                    <div className="relative flex items-center w-full h-12 rounded-md focus-within:shadow-lg bg-offWhite overflow-hidden"
                        style={{
                            boxShadow: '0px 0px 0px 0px rgba(76, 61, 255, 0.30), 0px 7px 15px 0px rgba(76, 61, 255, 0.29), 0px 27px 27px 0px rgba(76, 61, 255, 0.26), 0px 61px 37px 0px rgba(76, 61, 255, 0.15), 0px 108px 43px 0px rgba(76, 61, 255, 0.04), 0px 169px 47px 0px rgba(76, 61, 255, 0.01)'
                        }}>
                        <div className="grid place-items-center h-full w-12 text-navyBlue">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 bg-offWhite pr-2"
                            type="text"
                            id="search"
                            placeholder="Enter keywords to capture Bio,Names,Usernames,etc.."
                        />
                    </div>
                </div>

                <div className='flex'>
                    <div className="mr-16">
                        <label className="text-offWhite my-4">Followers Count</label>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="min-value-input"
                                label="Min"
                                value={minFollower}
                                onChange={handleMinFollowerChange}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginRight: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                            <Box sx={{ color: 'white' }}>to</Box>
                            <TextField
                                id="max-value-input"
                                label="Max"
                                value={maxFollower}
                                onChange={handleMaxFollowerChange}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginLeft: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                        </Box>
                    </div>

                    <div className="mr-16">
                        <label className="text-offWhite my-4">Following Count</label>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="min-value-input"
                                label="Min"
                                value={minFollowing}
                                onChange={handleMinFollowingChange}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginRight: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                            <Box sx={{ color: 'white' }}>to</Box>
                            <TextField
                                id="max-value-input"
                                label="Max"
                                value={maxFollowing}
                                onChange={handleMaxFollowingChange}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginLeft: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                        </Box>
                    </div>
                    <div className="mr-16">
                        <label className="text-offWhite my-4">Avg. Engagement Rate</label>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="min-value-input"
                                label="Min"
                                value={minEGRate}
                                onChange={handleMinEGRateChange}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginRight: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                            <Box sx={{ color: 'white' }}>to</Box>
                            <TextField
                                id="max-value-input"
                                label="Max"
                                value={maxEGRate}
                                onChange={handleMaxEGRateChange}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginLeft: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                        </Box>
                    </div>
                </div>


                {/* SECOND  */}
                <div className='flex'>
                    <div className="mr-16 my-4">
                        <label className="text-offWhite my-4">Avg. Video Views</label>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="min-value-input"
                                label="Min"
                                value={minVidView}
                                onChange={handleMinVidView}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginRight: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                            <Box sx={{ color: 'white' }}>to</Box>
                            <TextField
                                id="max-value-input"
                                label="Max"
                                value={maxVidView}
                                onChange={handleMaxVidView}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginLeft: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                        </Box>
                    </div>

                    <div className="mr-16 my-4">
                        <label className="text-offWhite my-4">Avg. Likes</label>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="min-value-input"
                                label="Min"
                                value={minLikes}
                                onChange={handleMinLikes}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginRight: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                            <Box sx={{ color: 'white' }}>to</Box>
                            <TextField
                                id="max-value-input"
                                label="Max"
                                value={maxLikes}
                                onChange={handleMaxLikes}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginLeft: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                        </Box>
                    </div>
                    <div className="mr- my-4">
                        <label className="text-offWhite my-4">Number of Posts</label>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="min-value-input"
                                label="Min"
                                value={minPosts}
                                onChange={handleMinPosts}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginRight: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                            <Box sx={{ color: 'white' }}>to</Box>
                            <TextField
                                id="max-value-input"
                                label="Max"
                                value={maxPosts}
                                onChange={handleMaxPosts}
                                variant="filled"
                                type="number"
                                sx={{
                                    width: 130,
                                    marginLeft: 1,
                                    '& input': {
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                    '& label': {
                                        marginTop: -0.5,
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        color: '#354682'
                                    },
                                }}
                            />
                        </Box>
                    </div>

                </div>

                <div className='flex'>
                    <div className='my-4 mr-4'>
                        <label className="text-offWhite my-4">Location</label>
                        <FormControl sx={{ width: 300, marginTop: 3, marginLeft: -9 }}>
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
                                MenuProps={MenuProps}
                                placeholder="States"
                                sx={{ backgroundColor: "#e4e9ff", fontFamily: "Montserrat" }}
                            >
                                <MenuItem disabled value="">
                                    <em>State</em>
                                </MenuItem>
                                {states.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='my-8 p-4'>
                        <Button style={{ textTransform: 'none', fontFamily: 'Montserrat', borderRadius: 2}}
                            variant='contained'
                            className="px-6 py-2
                     bg-blurp2 hover:bg-blurp text-white
                     text-16 font-medium leading-normal"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}