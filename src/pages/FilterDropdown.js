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
            <div style={{ position: 'relative' }}>
                <button
                    type="button"
                    onClick={handleDropdownToggle}
                    style={{ color: 'white', textDecoration: isDropdownOpen ? 'underline' : 'none' }}
                >
                    Advanced Filters
                </button>
                {isDropdownOpen && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            zIndex: 10,
                            height: 'max-content',
                            backgroundColor: '#E4E9FF',
                            padding: '16px',
                            borderRadius: '6px',
                            marginTop: '8px', marginBottom: '8px'
                        }}
                    >
                        {/* Place your filter content here */}
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: '64px' }}>
                                <label style={{ color: '#112148', marginBottom: '16px', marginTop: '16px' }}>Followers Count</label>
                                <Box
                                    style={{
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
                                        style={{
                                            width: 130,
                                            marginRight: 1,
                                        }}
                                    />
                                    <Box style={{ color: '#112148' }}>to</Box>
                                    <TextField
                                        id="max-value-input"
                                        label="Max"
                                        value={maxFollower}
                                        onChange={handleMaxFollowerChange}
                                        variant="filled"
                                        type="number"
                                        style={{
                                            width: 130,
                                            marginLeft: 1,
                                        }}
                                    />
                                </Box>
                            </div>

                            <div style={{ marginRight: '64px' }}>
                                <label style={{ color: '#112148', marginBottom: '16px', marginTop: '16px' }}>Following Count</label>
                                <Box
                                    style={{
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
                                        style={{
                                            width: 130,
                                            marginRight: 1,
                                        }}
                                    />
                                    <Box style={{ color: '#112148' }}>to</Box>
                                    <TextField
                                        id="max-value-input"
                                        label="Max"
                                        value={maxFollowing}
                                        onChange={handleMaxFollowingChange}
                                        variant="filled"
                                        type="number"
                                        style={{
                                            width: 130,
                                            marginLeft: 1,
                                        }}
                                    />
                                </Box>
                            </div>
                            <div style={{ marginRight: '64px' }}>
                                <label style={{ color: '#112148', marginBottom: '16px', marginTop: '16px' }}>Avg. Engagement Rate</label>
                                <Box
                                    style={{
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
                                        style={{
                                            width: 130,
                                            marginRight: 1,
                                        }}
                                    />
                                    <Box style={{ color: '#112148' }}>to</Box>
                                    <TextField
                                        id="max-value-input"
                                        label="Max"
                                        value={maxEGRate}
                                        onChange={handleMaxEGRateChange}
                                        variant="filled"
                                        type="number"
                                        style={{
                                            width: 130,
                                            marginLeft: 1,
                                        }}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: '64px', marginBottom: '16px', marginTop: '16px' }}>
                                <label style={{ color: '#112148', marginBottom: '16px', marginTop: '16px' }}>Avg. Video Views</label>
                                <Box
                                    style={{
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
                                        style={{
                                            width: 130,
                                            marginRight: 1,
                                        }}
                                    />
                                    <Box style={{ color: '#112148' }}>to</Box>
                                    <TextField
                                        id="max-value-input"
                                        label="Max"
                                        value={maxVidView}
                                        onChange={handleMaxLikes}
                                        variant="filled"
                                        type="number"
                                        style={{
                                            width: 130,
                                            marginLeft: 1,
                                        }}
                                    />
                                </Box>
                            </div>
                            <div style={{ marginRight: '64px', marginBottom: '16px', marginTop: '16px' }}>

                                <label style={{ color: '#112148', marginBottom: '16px',marginTop:'16px' }}>Avg. Likes</label>
                                <Box
                                    style={{
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
                                        style={{
                                            width: 130,
                                            marginRight: 1,
                                        }}
                                    />
                                    <Box style={{ color: '#112148' }}>to</Box>
                                    <TextField
                                        id="max-value-input"
                                        label="Max"
                                        value={maxLikes}
                                        onChange={handleMaxLikes}
                                        variant="filled"
                                        type="number"
                                        style={{
                                            width: 130,
                                            marginLeft: 1,
                                        }}
                                    />
                                </Box>
                            </div>
                            <div style={{marginRight:'64px', marginBottom: '16px', marginTop: '16px'}}>
                                <label style={{ color: '#112148', marginBottom: '16px',marginTop:'16px' }}>Number of Posts</label>
                                <Box
                                    style={{
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
                                        style={{
                                            width: 130,
                                            marginRight: 1,
                                        }}
                                    />
                                    <Box style={{ color: '#112148' }}>to</Box>
                                    <TextField
                                        id="max-value-input"
                                        label="Max"
                                        value={maxPosts}
                                        onChange={handleMaxPosts}
                                        variant="filled"
                                        type="number"
                                        style={{
                                            width: 130,
                                            marginLeft: 1,
                                        }}
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
