import React, { useState } from 'react';

export default function SearchTable({ filterStatus }) {
    const data = [
        {
            id: 1,
            profileImage: 'https://via.placeholder.com/50',
            name: 'John Doe',
            Followers: 1000,
            AvgLikes: 500,
            EngagementRate: 2.5,
            Email: "ehe@gmail.com",
            Phone: "9876543210"
        },
        {
            id: 2,
            profileImage: 'https://via.placeholder.com/50',
            name: 'Jane Smith',
            Followers: 2000,
            AvgLikes: 800,
            EngagementRate: 2.5,
            Email: "ehe@gmail.com",
            Phone: "9876543210"
        },
        {
            id: 3,
            profileImage: 'https://via.placeholder.com/50',
            name: 'Bruah Breah',
            Followers: 2000,
            AvgLikes: 800,
            EngagementRate: 2.5,
            Email: "ehe@gmail.com",
            Phone: "9876543210"
        },
        // Add more data rows as needed
    ];


    const rowsPerPage = 2; // Number of rows to display per page

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);

    // Filter the data based on the selected status
    let filteredData = data;
    if (filterStatus !== 'all') {
        filteredData = data.filter((row) => row.Status.toLowerCase() === filterStatus.toLowerCase());
    }

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    // Calculate the total number of pages based on the filtered data
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle row click and checkbox selection
    const handleRowClick = (rowId) => {
        const selectedRow = selectedRows.includes(rowId);
        let updatedSelectedRows = [];

        if (selectedRow) {
            updatedSelectedRows = selectedRows.filter((id) => id !== rowId);
        } else {
            updatedSelectedRows = [...selectedRows, rowId];
        }

        setSelectedRows(updatedSelectedRows);
    };

    // Check if a row is selected
    const isRowSelected = (rowId) => selectedRows.includes(rowId);


    return (
        <div className="flex my-4 mx-4 w-full">
            <div className="w-full max-w-4lg">
                <table className="w-full divide-y divide-gray-200 border-2 border-offPurPur  rounded-md">
                    {/* Table header */}
                    <thead className="bg-offWhite">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-offPurPur uppercase tracking-wider">
                                {/* Checkbox header */}
                                <input
                                    type="checkbox"
                                    className="rounded text-offPurPur"
                                    checked={selectedRows.length === currentRows.length}
                                    onChange={() =>
                                        setSelectedRows(selectedRows.length === currentRows.length ? [] : currentRows.map((row) => row.id))
                                    }
                                />
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Followers
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Avg Likes
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Engagement Rate
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="bg-offWhite2 divide-y divide-indigo-800 divide-opacity-50">
                        {currentRows.length > 0 ? (
                            currentRows.map((row) => (
                                <tr
                                    key={row.id}
                                    className={`${isRowSelected(row.id) ? 'bg-offBlue' : 'hover:bg-offBlue'
                                        }`}
                                    onClick={() => handleRowClick(row.id)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {/* Checkbox for each row */}
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            checked={isRowSelected(row.id)}
                                            onChange={() => handleRowClick(row.id)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img className="h-8 w-8 rounded-full" src={row.profileImage} alt="Profile" />
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{row.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.Followers}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.AvgLikes}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.EngagementRate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.Email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{row.Phone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-center" colSpan={5}>
                                    No More Records
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
                {data.length > rowsPerPage && (
                    <div className="flex justify-end px-4 py-2">
                        <nav className="relative z-0 inline-flex shadow-sm">
                            <button
                                onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                Previous
                            </button>
                            {Array.from(Array(totalPages), (e, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === page ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                )}

            </div>
        </div>
    );
}

