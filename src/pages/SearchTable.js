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
            Email: 'ehe@gmail.com',
            Phone: '9876543210',
        },
        {
            id: 2,
            profileImage: 'https://via.placeholder.com/50',
            name: 'Jane Smith',
            Followers: 2000,
            AvgLikes: 800,
            EngagementRate: 2.5,
            Email: 'ehe@gmail.com',
            Phone: '9876543210',
        },
        {
            id: 3,
            profileImage: 'https://via.placeholder.com/50',
            name: 'Bruah Breah',
            Followers: 2000,
            AvgLikes: 800,
            EngagementRate: 2.5,
            Email: 'ehe@gmail.com',
            Phone: '9876543210',
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
        <div style={{ display: 'flex', marginTop: '1rem', marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem', width: '100%' }}>
            <div style={{ width: '100%' }}>
                <table
                    style={{
                        width: '100%', borderCollapse: 'collapse', border: '2px solid #9895d1', borderRadius: '0.375rem',
                    }}
                >
                    {/* Table header */}
                    <thead style={{ backgroundColor: '#E4E9FF' }}>
                        <tr>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#B5B5C3' }}>
                                {/* Checkbox header */}
                                <input
                                    type="checkbox"
                                    style={{ borderRadius: '0.375rem', color: '#9895d1' }}
                                    checked={selectedRows.length === currentRows.length}
                                    onChange={() =>
                                        setSelectedRows(selectedRows.length === currentRows.length ? [] : currentRows.map((row) => row.id))
                                    }
                                />
                            </th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#7B7D8B' }}>
                                Brand
                            </th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#7B7D8B' }}>
                                Followers
                            </th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#7B7D8B' }}>
                                Avg Likes
                            </th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#7B7D8B' }}>
                                Engagement Rate
                            </th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#7B7D8B' }}>
                                Email
                            </th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#7B7D8B' }}>
                                Phone
                            </th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody style={{ backgroundColor: '#F9FBFF', padding: '0.75rem', textAlign: 'left', borderTopWidth: "1px", borderColor: "#3730a3" }}>
                        {currentRows.length > 0 ? (
                            currentRows.map((row) => (
                                <tr
                                    key={row.id}
                                    style={{
                                        backgroundColor: isRowSelected(row.id) ? '#e7e3ff' : 'transparent',
                                        cursor: 'pointer',
                                        ':hover': {
                                            backgroundColor: '#e7e3ff',
                                        },

                                    }}
                                    onClick={() => handleRowClick(row.id)}
                                >

                                    <td style={{ padding: '0.75rem', textAlign: 'left' }}>
                                        {/* Checkbox for each row */}
                                        <input
                                            type="checkbox"
                                            style={{ borderRadius: '0.375rem' }}
                                            checked={isRowSelected(row.id)}
                                            onChange={() => handleRowClick(row.id)}
                                        />
                                    </td>
                                    <td style={{ padding: '0.75rem', textAlign: 'left', color: '#1F2937' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ height: '2rem', width: '2rem', borderRadius: '50%' }} src={row.profileImage} alt="Profile" />
                                            <div style={{ marginLeft: '0.5rem' }}>
                                                <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#111827' }}>{row.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '0.75rem', textAlign: 'left', color: '#1F2937' }}>{row.Followers}</td>
                                    <td style={{ padding: '0.75rem', textAlign: 'left', color: '#1F2937' }}>{row.AvgLikes}</td>
                                    <td style={{ padding: '0.75rem', textAlign: 'left', color: '#1F2937' }}>{row.EngagementRate}</td>
                                    <td style={{ padding: '0.75rem', textAlign: 'left', color: '#1F2937' }}>{row.Email}</td>
                                    <td style={{ padding: '0.75rem', textAlign: 'left', color: '#1F2937' }}>{row.Phone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#1F2937' }} colSpan={5}>
                                    No More Records
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {data.length > rowsPerPage && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.75rem' }}>
                        <nav style={{ display: 'inline-flex', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
                            <button
                                onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                                disabled={currentPage === 1}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.5rem',
                                    borderRadius: '0.375rem',
                                    border: '1px solid #D1D5DB',
                                    background: '#FFFFFF',
                                    fontSize: '0.875rem',
                                    fontWeight: 'medium',
                                    color: '#6B7280',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                            >
                                Previous
                            </button>
                            {Array.from(Array(totalPages), (e, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '0.5rem',
                                        borderRadius: '0.375rem',
                                        border: '1px solid #D1D5DB',
                                        background: currentPage === page ? '#6B7280' : '#FFFFFF',
                                        color: currentPage === page ? '#FFFFFF' : '#6B7280',
                                        fontSize: '0.875rem',
                                        fontWeight: 'medium',
                                        cursor: 'pointer',
                                        outline: 'none',
                                    }}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                disabled={currentPage === totalPages}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.5rem',
                                    borderRadius: '0.375rem',
                                    border: '1px solid #D1D5DB',
                                    background: '#FFFFFF',
                                    fontSize: '0.875rem',
                                    fontWeight: 'medium',
                                    color: '#6B7280',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    )
}
