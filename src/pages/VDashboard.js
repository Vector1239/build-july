import 'tailwindcss/tailwind.css';
import { Button } from "@mui/material";

export default function OTDashboard() {
    return (
        <>
            <div className='flex justify-between'>

                <div className='p-4 my-4 mx-4 font-Montserrat w-1/2 bg-offWhite rounded-md h-full'>
                    <div className='flex justify-between'>
                        <h1 className="text-3xl font-bold font-Montserrat text-blurp">Campaigns</h1>
                        <Button variant="contained"
                            className="px-4 py-2 rounded-md bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal">
                            View All
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-8 w-2/3 my-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-medium text-gray-800">Active</h2>
                            <p className="text-gray-600"><strong>5</strong> Active campaigns.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-medium text-gray-800">Draft</h2>
                            <p className="text-gray-600"><strong>5</strong> Draft campaigns.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-medium text-gray-800">Completed</h2>
                            <p className="text-gray-600"><strong>5</strong> Completed campaigns.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                            <h2 className="text-xl font-medium text-gray-800">Under Review</h2>
                            <p className="text-gray-600"><strong>5</strong> campaigns under review.</p>
                        </div>
                    </div>
                </div>

                <div className='p-4 my-4 mx-4 font-Montserrat w-1/2 bg-offWhite rounded-md h-full'>
                    <div className='flex justify-between'>
                        <h1 className="text-3xl font-bold font-Montserrat text-blurp">Discover</h1>
                        <Button variant="contained"
                            className="px-4 py-2 rounded-md bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal">
                            Search
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-8 w-2/3 my-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-medium text-gray-800">Instantly Connect with Influencers from the Largest Database</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div className='p-4 my-4 mx-4 font-Montserrat w-1/2 bg-offWhite rounded-md h-full'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold font-Montserrat text-blurp">Communicate</h1>
                    <Button variant="contained"
                        className="px-4 py-2 rounded-md bg-navyBlue hover:bg-navyBlue3 text-white text-16 font-medium leading-normal">
                        Search
                    </Button>
                </div>
                <div className="grid grid-cols-1 gap-8 w-2/3 my-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-medium text-gray-800">Instantly Connect with Influencers from the Largest Database</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
