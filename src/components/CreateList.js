import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function CreateList(props) {
    const parsedPlan = JSON.parse(props.plan);
    const lists = ['a', 'b'];
    // const [lists, setLists] = useState([]);

    return (
        <>
            <div className="flex bg-offPurPur min-h-auto mx-2 w-1/4">
                <div className="w-full">
                    <div className="bg-offWhite text-center p-2 flex items-center">
                        <IconButton aria-label="delete" size="small" onClick={props.onBack}>
                            <ArrowBackIcon />
                        </IconButton>
                        <h3 className="font-medium text-base text-navyBlue my-2 mx-1">{parsedPlan}</h3>
                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex flex-col flex-grow bg-offWhite p-4 min-h-screen">
                        {lists.map((list) => (
                            <div key={list} className="flex items-center my-2">
                                <div className="flex rounded-md drop-shadow-md bg-offWhite2 p-4 mr-2 w-80">{list}</div>
                                <Button
                                    style={{
                                        textTransform: 'none',
                                        fontFamily: 'Montserrat',
                                        borderRadius: 2,
                                        backgroundColor: '#111E4D',
                                    }}
                                    variant="contained"
                                    className="p-4 bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal"
                                >
                                    Add
                                </Button>
                            </div>
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
            </div>
        </>
    );
}
