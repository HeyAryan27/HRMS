import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { dashboardData } from '../utils/constant'; 
import MyTeam from './MyTeam';
import Attendance from './Attendance';
import AttendanceCard from './AttendanceCard';
import AttendanceSummary from './AttendanceSummary';
import WorkingHistory from './WorkingHistory';
import './Dashboard.css'; 

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="p-4 bg-white "  style={{margin: "-23px"}}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold" style={{fontSize:"30px"}}>Good afternoon, {dashboardData.user}!</h1>
        
      
        <div className="flex items-center border border-gray-300 rounded-lg p-2 px-4">
          <div className="flex flex-col items-center mr-4">
            <span className="text-xs text-gray-600">Current time</span>
            <span className="text-lg font-semibold text-blue-950">{formatTime(currentTime)}</span>
          </div>
          <FaRegClock className="w-6 h-6 text-blue-900" />
        </div>
      </div>

      <p className='-mt-5 text-xs text-gray-600'>You have {dashboardData.leaveRequests} leave requests pending.</p>

      <div className=" flex justify-between gap-4 mt-4 responsive-grid">
        <div className='AttendanceR'><Attendance/></div>

        <div><AttendanceCard/></div>

        <div><AttendanceSummary/></div>
      </div>
      <div className="flex justify-between gap-4 mt-2 responsive-grid">
        <MyTeam/>
        <WorkingHistory/>
      </div>
      
    </div>
  );
};

export default Dashboard;