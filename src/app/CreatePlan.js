import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CreateList(props) {
    const [planName, setPlanName] = useState('');
    const [plans, setPlans] = useState([]);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handlePlanClick=(planName)=>{
        console.log(planName);
        props.onClick(planName);
    }
    return (
        <>
            <div className="flex flex-col w-1/5" style={{ height: "73.5vh" }}>
                <div className="bg-offWhite text-center p-2">
                    <h3 className="font-medium text-base text-navyBlue">All Plans</h3>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="flex flex-col flex-grow bg-offWhite p-4" >
                    {!planName && plans.length === 0 && (
                        <div className="my-8 text-center flex-grow">
                            <h1 className="font-medium text-xs w-13">
                                Efficiently manage and track your influencers based on your
                                campaign objectives. Create a customized plan to curate and
                                organize your influencer marketing efforts.
                            </h1>
                            <Button
                                style={{
                                    textTransform: 'none',
                                    fontFamily: 'Montserrat',
                                    borderRadius: 2,
                                    backgroundColor: '#111E4D',
                                }}
                                variant="contained"
                                startIcon={<AddCircleIcon className="text-darkPurpur" />}
                                className="px-4 py-2 bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal my-10"
                                onClick={handleClickOpen}
                            >
                                Create Plan
                            </Button>
                        </div>
                    )}

                    {!planName && plans.length > 0 && (
                        <div className="flex flex-col " style={{ height: "73.5vh" }}>
                            {plans.map((plan) => (
                            <Button
                                key={plan}
                                style={{
                                    textTransform: 'none',
                                    fontFamily: 'Montserrat',
                                    borderRadius: 2,
                                    backgroundColor: '#111E4D',
                                }}
                                variant="contained"
                                className="px-4 py-2 bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal my-2"
                                onClick={()=> handlePlanClick(plan)}
                            >
                                {plan}
                            </Button>
                            ))}
                            <div className="my-8 text-center">
                                <Button
                                    style={{
                                        textTransform: 'none',
                                        fontFamily: 'Montserrat',
                                        borderRadius: 2,
                                        backgroundColor: '#111E4D',
                                    }}
                                    variant="contained"
                                    startIcon={<AddCircleIcon className="text-darkPurpur" />}
                                    className="px-4 py-2 bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal my-10"
                                    onClick={handleClickOpen}
                                >
                                    Create Plan
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        className: 'border-4 border-darkPurpur shadow-none rounded-md',
                    }}
                    style={{ fontFamily: 'Montserrat' }}
                >
                    <DialogTitle
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: '600',
                            color: '#112148',
                            width: '300px',
                        }}
                    >
                        Create A Plan
                    </DialogTitle>
                    <DialogContent style={{ fontFamily: 'Montserrat' }}>
                        <DialogContentText className="text-bluey">
                            Name of Plan
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label=""
                            type="username"
                            fullWidth
                            variant="filled"
                            sx={{
                                backgroundColor: '#e4e9ff',
                                fontFamily: 'Montserrat',
                            }}
                            value={planName}
                            onChange={(e) => setPlanName(e.target.value)}
                        />
                    </DialogContent>
                    <FormControl style={{ width: '80%', margin: 'auto' }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Campaign"
                            margin="dense"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button
                            onClick={() => {
                                if (planName) {
                                    setPlans((prevPlans) => [...prevPlans, planName]);
                                    setPlanName('');
                                }
                                handleClose();
                            }}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}