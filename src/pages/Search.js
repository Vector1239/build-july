

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
import FilterDropdown from './FilterDropdown';
// import CampaignTable from '../CampaignTable';
import CreatePlan from './CreatePlan.js';
import CreateList from './CreateList.js';
import SearchTable from './SearchTable.js';

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


export default function Search() {

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

    const HeaderStyle = {
        background: 'linear-gradient(78.25deg, rgb(17, 33, 72) 44.2%, rgb(9, 18, 39) 72.98%)',
        height: 'max-content',
        padding: '1.75rem',
    };

    const labelStyle = {
        color: '#E4E9FF',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        fontSize: '0.75rem',
        lineHeight: '1rem'
    };

    const SearchContaienrStyle = {
        marginTop: '2px',
        marginBottom: '2px',
        fontSize: '0.75rem',
        lineHeight: '1rem'
    }

    const SearchBarStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '2rem',
        borderRadius: '0.375rem',
        boxShadow:
            '0px 0px 0px 0px rgba(76, 61, 255, 0.30), 0px 7px 15px 0px rgba(76, 61, 255, 0.29), 0px 27px 27px 0px rgba(76, 61, 255, 0.26), 0px 61px 37px 0px rgba(76, 61, 255, 0.15), 0px 108px 43px 0px rgba(76, 61, 255, 0.04), 0px 169px 47px 0px rgba(76, 61, 255, 0.01)',
        backgroundColor: '#E4E9FF',
        overflow: 'hidden',
    };

    const iconStyle = {
        display: 'grid',
        placeItems: 'center',
        height: '100%',
        width: '1rem',
        color: '#112148',
    };

    return (
        <div>

            {/* Header  */}
            <div style={HeaderStyle}>

                {/* <h1 className="text-5xl font-bold text-white">Discover</h1> */}
                <div style={SearchContaienrStyle}>
                    <label style={labelStyle}>Search Influencer</label>
                    <div style={SearchBarStyle}>
                        <div style={iconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px', marginLeft: '4px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            style={{ display: 'flex', marginLeft: '6px', border: 'none', alignItems: 'center', width: '100%', outline: 'none', color: '#374151', backgroundColor: '#E4E9FF', paddingRight: '4px', fontSize: '12px' }}
                            type="text"
                            id="search"
                            placeholder="Enter keywords to capture Bio,Names,Usernames,etc.."
                        />
                    </div>
                </div>


                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: '4px', marginBottom: '4px', marginRight: '16px' }}>
                        <label style={{ color: '#E4E9FF', marginTop: '16px', marginBottom: '16px', fontSize: '12px' }}>Platform</label>
                        <br></br>
                        <FormControl style={{ width: 200, marginTop: 3, marginLeft: -7 }}>
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
                    <div style={{ marginTop: '4px', marginBottom: '4px', marginRight: '16px' }}>
                        <label style={{ color: '#E4E9FF', marginTop: '16px', marginBottom: '16px', fontSize: '12px' }}>Location</label>
                        <br></br>
                        <FormControl style={{ width: 200, marginTop: 3, marginLeft: -7 }}>
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


                    <div style={{ marginTop: '4px', marginBottom: '4px', marginRight: '20px' }}>
                        <label style={{ color: '#E4E9FF', marginTop: '16px', marginBottom: '16px', fontSize: '12px' }}>Gender</label>
                        <br></br>
                        <FormControl style={{ width: '200px', marginTop: '3px', marginLeft: '-6px' }}>
                            {/* <InputLabel id="demo-multiple-checkbox-label" className='text-#E4E9FF'>State</InputLabel> */}
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

                    <div style={{ marginLeft: 'auto', marginTop: '4px' }}>
                        <FilterDropdown />
                    </div>
                </div>
                <div>
                    <div>
                        <Button style={{
                            textTransform: 'none',
                            fontFamily: 'Montserrat',
                            borderRadius: 4,
                            backgroundColor: '#4C3DFF',
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                            lineHeight: 'normal',
                            padding: '12px 24px',
                            marginTop: '16px',
                            '&:hover': {
                                backgroundColor: '#2A1FA9',
                            },
                        }}
                            variant='contained' >
                            Submit
                        </Button>
                    </div>
                </div>
            </div >
            <div style={{ display: 'flex' }}>
                <SearchTable filterStatus={'all'} />
                {/* {showList ? <CreateList onBack={handleBack} plan={JSON.stringify(plan)} /> : <CreatePlan onClick={handleClick} />} */}
            </div>
        </div>
    )
}