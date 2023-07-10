"use client"

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function CreateList(props) {
    const parsedPlan = JSON.parse(props.plan);
    const lists=["a","b"]
    // const [lists, setLists] = useState([]);


    return (
        <>
            <div className="flex flex-col w-1/5" style={{ height: "73.5vh" }}>
                <div className="bg-offWhite text-center p-2 flex">
                    <IconButton aria-label="delete" size="small" onClick={props.onBack}>
                        <ArrowBackIcon />
                    </IconButton>
                    <h3 className="font-medium text-base text-navyBlue my-2 mx-1">{parsedPlan}</h3>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="flex flex-col " style={{ height: "73.5vh" }}>
                    {lists.map((list) => (
                        <Button
                            key={list}
                            style={{
                                textTransform: 'none',
                                fontFamily: 'Montserrat',
                                borderRadius: 2,
                                backgroundColor: '#111E4D',
                            }}
                            variant="contained"
                            className="px-4 py-2 bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal my-2"
                        >
                            {list}
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
                        >
                            Create List
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}