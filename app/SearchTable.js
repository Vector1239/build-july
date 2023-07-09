import React from 'react';

function SearchTable() {

    const data = [
        {
            id: 1,
            profileImage: 'https://via.placeholder.com/50',
            name: 'John Doe',
            followers: 1000,
            avgLikes: 500,
            engagementRate: 5.5,
            location: 'New York',
            category: 'Fashion',
        },
        {
            id: 2,
            profileImage: 'https://via.placeholder.com/50',
            name: 'Jane Smith',
            followers: 2000,
            avgLikes: 800,
            engagementRate: 8.2,
            location: 'Los Angeles',
            category: 'Fitness',
        },
        // Add more data rows as needed
    ];

    return (
        <>
            <div className="border-2 border-offPurPur rounded-md">
                <table className="w-auto divide-y divide-gray-200 ">
                    <thead className="bg-offWhite">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Profile
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
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-offWhite2 divide-y divide-indigo-800 divide-opacity-50">
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img className="h-8 w-8 rounded-full" src={row.profileImage} alt="Profile" />
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{row.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.followers}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.avgLikes}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.engagementRate}%</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-blue-500 hover:text-blue-700">Add to List</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SearchTable