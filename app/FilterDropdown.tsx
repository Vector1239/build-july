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


    return (
        <>
            <div className="relative">
                <button
                    type="button"
                    onClick={handleDropdownToggle}
                    className="text-white"
                >
                    Advanced Filters
                </button>
                {isDropdownOpen && (
                    <div className="h-auto bg-offWhite shadow p-4">
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
