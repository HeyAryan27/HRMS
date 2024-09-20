import React from 'react';
import { FiHome, FiUsers, FiCalendar, FiTruck, FiBriefcase, FiMessageSquare } from 'react-icons/fi'; // Importing necessary icons
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-20 bg-white border-r h-screen" style={{fontSize:"15px"}}>
      <div className="flex items-center justify-center h-12">
        {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
        <h1>LexCorp</h1>
      </div>
      <ul className="mt-6 text-xs -ml-8" style={{margin: "10px" ,fontSize:"10px"}}>
        <Link to="/" className='no-underline'>
          <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
            <FiHome size={24} className="text-gray-600 mb-1" />
            <span className="text-gray-600">Dashboard</span>
          </li> 
        </Link>
        <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
          <FiUsers size={24} className="text-gray-600 mb-1" />
          <span className="text-gray-600">Org.</span>
        </li>
        <Link to="calendar" className='no-underline'>
          <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
            <FiCalendar size={24} className="text-gray-600 mb-1" />
            <span className="text-gray-600">Calendar</span>
          </li>
        </Link>
        <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
          <FiTruck size={24} className="text-gray-600 mb-1" /> 
          <span className="text-gray-600">Parkings</span>
        </li>
        <Link to="./"  className='no-underline'>
          <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
            <FiBriefcase size={24} className="text-gray-600 mb-1" /> {/* Recruit icon */}
            <span className="text-gray-600">Recruit</span>
          </li>
        </Link>
        <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
          <FiMessageSquare size={24} className="text-gray-600 mb-1" /> {/* Messages icon */}
          <span className="text-gray-600">Messages</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
