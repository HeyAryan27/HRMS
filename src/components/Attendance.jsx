
import { dashboardData } from '../utils/constant'; 
import { useState } from 'react';
import "./Attendance.css"  
const Attendance = () => {
  const data = dashboardData; 
  const [isPresent, setIsPresent] = useState(false);

  const handleMarkPresent = () => {
    setIsPresent(true); 
  };
   
  const getStrokeDashOffset = (percentage) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    return circumference - (percentage / 100) * circumference;
  };

  return (    
    <div className='Red'>
    <div className="max-w-100 mx-200 p-4 bg-white rounded-lg shadow-md border h-auto md:h-[49vh]">
      <div className="flex justify-between items-center Today">
        <h2 className="font-semibold text-lg text-blue-900">Today</h2>
        <span className={`px-2 py-1 text-sm rounded ${isPresent ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {isPresent ? 'Present' : 'Absent'}
        </span>
      </div>
      

      <hr className="mb-4" />

      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className='blue'>
        <div className="flex flex-col flex-1 mb-4 md:mb-0 md:mr-4">
          <div className="flex items-center text-gray-600 mb-2">
          <div className='Text'>  
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8a6 6 0 1112 0v3h1a2 2 0 110 4h-4a1 1 0 110-2h4v-2H3v3a1 1 0 11-2 0v-4.021l.001-3a.93.93 0 01.01-.184L2 8z" />
            </svg>
                      
              <span className="text-sm sm:text-base mx-2">
              You have not marked yourself as {isPresent ? 'Present' : 'Absent'} today!
            </span>
          </div>
          </div>
<div className='Button'>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 md:mt-12 w-full" onClick={handleMarkPresent}>
            Mark Present
          </button>
          </div>
          

        </div>
        </div>
<div className='Circle'>
        <div className="relative flex-shrink-0 md:mt-0 mt-4">
          <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 80 80">
            <circle
              className="text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
            <circle
              className="text-yellow-500"
              strokeWidth="8"
              strokeDasharray="226"
              strokeDashoffset={`${getStrokeDashOffset(data.attendance.today.days)}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              transform="rotate(-90 40 40)"
            />
          </svg>    
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-semibold text-gray-800">{data.attendance.today.days}</span>
            <span className="text-xs sm:text-sm text-gray-500">in office</span>
            <span className="text-xs sm:text-sm text-yellow-500">POOR</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Attendance;
