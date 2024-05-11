    import React, { useState } from 'react';
    import DonorDetailsModal from './DonorDetailsModal';

    const DonorRequests = () => {
    const [donorRequests, setDonorRequests] = useState([
        { id: 1, firstName: 'Karim', lastName: 'Waleed', gender: 'Male', email: 'Karim@outlook.com', contactNumber: '911', password: 'kemokono', address: 'obour', area: 'obour', governote: 'obour' },
        { id: 2, firstName: 'Moe', lastName: 'Amr', gender: 'Male', email: 'Amr@gmail.com', contactNumber: '010123123', password: 'dera3', address: 'masrgdeda', area: 'Town', governote: 'Province' },
        { id: 3, firstName: 'Yousef', lastName: 'Malek', gender: 'Male', email: 'Youssef@gmail.com', contactNumber: '101', password: 'ilovecoding', address: 'tagmoa', area: 'tagmoa', governote: 'City' },
    ]);
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleViewDonorDetails = donor => {
        setSelectedDonor(donor);
        setIsModalVisible(true);
    };

    const handleAcceptDonor = id => {
        setDonorRequests(prevDonors => prevDonors.filter(donor => donor.id !== id));
    };

    const handleRejectDonor = id => {
        setDonorRequests(prevDonors => prevDonors.filter(donor => donor.id !== id));
    };

    return (
        <div className="container mx-auto p-4 mt-16">
        <table className="w-full table-auto bg-white text-black-900 border-collapse border border-purple-900 mt-10">
            <thead>
            <tr className="bg-purple-800 text-white">
                <th className="border border-purple-900 px-4 py-2">First Name</th>
                <th className="border border-purple-900 px-4 py-2">Last Name</th>
                <th className="border border-purple-900 px-4 py-2">Gender</th>
                <th className="border border-purple-900 px-4 py-2">Email</th>
                <th className="border border-purple-900 px-4 py-2">Contact Number</th>
                <th className="border border-purple-900 px-4 py-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {donorRequests.map(donor => (
                <tr key={donor.id} className="border-t border-purple-900">
                <td className="border border-purple-900 px-4 py-2">{donor.firstName}</td>
                <td className="border border-purple-900 px-4 py-2">{donor.lastName}</td>
                <td className="border border-purple-900 px-4 py-2">{donor.gender}</td>
                <td className="border border-purple-900 px-4 py-2">{donor.email}</td>
                <td className="border border-purple-900 px-4 py-2">{donor.contactNumber}</td>
                <td className="border border-purple-900 px-4 py-2 flex justify-between">
                    <div className="flex space-x-4">
                    <button onClick={() => handleViewDonorDetails(donor)} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
                        View Details
                    </button>
                    <button onClick={() => handleAcceptDonor(donor.id)} className="text-green-600 border-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </button>
                    <button onClick={() => handleRejectDonor(donor.id)} className="text-red-600 border-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <DonorDetailsModal
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            donor={selectedDonor}
        />
        </div>
    );
    };

    export default DonorRequests;