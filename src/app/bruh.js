"use client"

import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';


export default function FilterDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [minFollower, setMinFollower] = useState('');
    const [maxFollower, setMaxFollower] = useState('');

    const handleMinFollowerChange = (event) => {
        setMinFollower(event.target.valueAsNumber.toString());
    };

    const handleMaxFollowerChange = () => {
        setMaxFollower(event.target.valueAsNumber.toString());
    };

    const [minFollowing, setMinFollowing] = useState('');
    const [maxFollowing, setMaxFollowing] = useState('');

    const handleMinFollowingChange = (event) => {
        setMinFollowing(event.target.valueAsNumber.toString());
    };

    const handleMaxFollowingChange = (event) => {
        setMaxFollowing(event.target.valueAsNumber.toString());
    };

    const [minEGRate, setMinEGRate] = useState('');
    const [maxEGRate, setMaxEGRate] = useState('');

    const handleMinEGRateChange = (event) => {
        setMinEGRate(event.target.valueAsNumber.toString());
    };

    const handleMaxEGRateChange = (event) => {
        setMaxEGRate(event.target.valueAsNumber.toString());
    };

    const [minVidView, setMinVidView] = useState('');
    const [maxVidView, setMaxVidView] = useState('');

    const handleMinVidView = (event) => {
        setMinVidView(event.target.valueAsNumber.toString());
    };

    const handleMaxVidView = (event) => {
        setMaxVidView(event.target.valueAsNumber.toString());
    };

    const [minLikes, setMinLikes] = useState('');
    const [maxLikes, setMaxLikes] = useState('');

    const handleMinLikes = (event) => {
        setMinLikes(event.target.valueAsNumber.toString());
    };

    const handleMaxLikes = (event) => {
        setMaxLikes(event.target.valueAsNumber.toString());
    };

    const [minPosts, setMinPosts] = useState('');
    const [maxPosts, setMaxPosts] = useState('');

    const handleMinPosts = (event) => {
        setMinPosts(event.target.valueAsNumber.toString());
    };

    const handleMaxPosts = (event) => {
        setMaxPosts(event.target.valueAsNumber.toString());
    };


    return (
        <>
            <div className="relative">
                <button
                    type="button"
                    onClick={handleDropdownToggle}
                    className={`text-white ${isDropdownOpen ? 'underline' : ''}`}
                >
                    Advanced Filters
                </button>
                {isDropdownOpen && (
                    <div className="h-auto bg-offWhite shadow drop-shadow-lg
                    p-4 rounded-md my-2" style={{
                            position: "absolute", top: "100%", right: 0,
                            zIndex: 10,
                        }}>
                        {/* Place your filter content here */}
                        <div className="flex">
                            <div className="mr-16">
                                <label className="text-navyBlue my-4">Followers Count</label>
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
                                    <Box sx={{ color: '#112148' }}>to</Box>
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
                                <label className="text-navyBlue my-4">Following Count</label>
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
                                    <Box sx={{ color: '#112148' }}>to</Box>
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
                                <label className="text-navyBlue my-4">Avg. Engagement Rate</label>
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
                                    <Box sx={{ color: '#112148' }}>to</Box>
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
                        <div className='flex'>
                            <div className="mr-16 my-4">
                                <label className="text-navyBlue my-4">Avg. Video Views</label>
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
                                    <Box sx={{ color: '#112148' }}>to</Box>
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
                                <label className="text-navyBlue my-4">Avg. Likes</label>
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
                                    <Box sx={{ color: '#112148' }}>to</Box>
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
                                <label className="text-navyBlue my-4">Number of Posts</label>
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
                                    <Box sx={{ color: '#112148' }}>to</Box>
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
                    </div>
                )}
            </div>

        </>
    )

}
