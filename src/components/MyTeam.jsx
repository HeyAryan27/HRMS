import React from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { team } from '../utils/constant';

function MyTeam() {
    const members = team;

    function getStatusColor(status) {
        switch (status) {
          case 'in office':
            return 'bg-blue-500';
          case 'work from home':
            return 'bg-yellow-500';
          case 'on leave':
            return 'bg-red-500'; 
          case 'absent':
            return 'bg-gray-900'; 
          case 'holiday':
            return 'bg-gray-300'; 
          default:
            return 'bg-gray-500'; 
        }
    }

    return (
        <div className="bg-white p-4  rounded-lg shadow-md w-full border-[1px]" style={{marginTop:"10px"}}>
            <h2 className="font-semibold text-lg text-blue-900">My Team</h2>

            <div className="flex items-center mt-2 text-xs text-gray-700 mb-4">
                <div className="flex items-center mr-3">
                    <span className="block w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                    <span>In Office</span>
                </div>
                <div className="flex items-center mr-3">
                    <span className="block w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
                    <span>Work from Home</span>
                </div>
                <div className="flex items-center mr-3">
                    <span className="block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                    <span>On Leave</span>
                </div>
                <div className="flex items-center mr-3">
                    <span className="block w-2 h-2 rounded-full bg-gray-800 mr-1"></span>
                    <span>Absent</span>
                </div>
                <div className="flex items-center">
                    <span className="block w-2 h-2 rounded-full bg-gray-300 mr-1"></span>
                    <span>Holiday</span>
                </div>
            </div>

        
            <div className="overflow-y-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tl-lg text-xs">
                                <div className='flex justify-between items-center'>
                                    Members
                                    <div className='flex flex-col ml-1'>
                                        <FaSortUp className="inline mt-2" />
                                         <FaSortDown className="inline-block -mt-[10px]" />  
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
                                <div className='flex justify-between items-center'>
                                    Today
                                    <div className='flex flex-col'>
                                            <FaSortUp className="inline mt-2" />
                                            <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
                                <div className='flex justify-between items-center'>
                                    25/9
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
                                <div className='flex justify-between items-center'>
                                    24/9
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tr-lg text-xs">
                                <div className='flex justify-between items-center'>
                                    23/9
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index} className="text-gray-700 hover:bg-gray-100">
                                <td className="p-1 text-left flex items-center">
                                    <img src={member.profileImage} alt={member.name} className="w-8 h-8 rounded-full mr-2" />
                                    <div className="flex flex-col">
                                        <span className='text-blue-900'>{member.name}</span>
                                        <span className="text-xs text-gray-500">{member.role}</span>
                                    </div>
                                </td>
                                <td className="border-r p-1 text-xs">
                                    <div className='flex items-center text-gray-500'>
                                        <span className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(member.dates.find(date => date.date === 'today').status)}`}></span>
                                        {member.dates.find(date => date.date === 'today')?.arrivalTime || '-'}
                                    </div>
                                </td>
                                {member.dates
                                    .filter(dateData => dateData.date !== 'today')
                                    .map((dateData, dateIndex) => (
                                    <td key={dateIndex} className="p-1 text-left text-xs text-gray-500">
                                        <div className='flex items-center'>
                                            <span className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(dateData.status)}`}></span>
                                            {dateData.arrivalTime || '-'}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyTeam;
