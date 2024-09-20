import { dashboardData } from '../utils/constant';
import "./AttendanceSummary.css"
const AttendanceSummary = () => {
  const data = dashboardData;
  return (
    <div className="max-w-100 mx-200 p-4 bg-white rounded-lg shadow-md border h-auto md:h-[51vh]"style={{height:"320px"}} >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg text-blue-900">My Attendance</h2>
        <span className="px-2 py-1 font-semibold text-blue-600 text-sm rounded cursor-pointer hover:bg-blue-100">
          View Status
        </span>
      </div>

      <hr className="mb-4" />

      <div className="w-full max-w-md bg-white md:flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
    
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 "> 
          <li className="flex items-center py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
            {data.attendance.details.onTime} On time
          </li>
          <li className="flex items-center py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>
            {data.attendance.details.workFromHome} Work from home
          </li>
          <li className="flex items-center py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>
            {data.attendance.details.lateAttendance} Late attendance
          </li>
          <li className="flex items-center py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-500 mr-2"></span>
            {data.attendance.details.absent} Absent
          </li>
        </ul>
        
        <div className="relative flex justify-center circle">
          <svg className="w-28 h-28 sm:w-36 sm:h-36 responsive" viewBox="0 0 80 80">
            
          <circle
          className="text-gray-200"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
            <circle
              className="text-green-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.onTime / 365) * 226} 226`}
              strokeDashoffset="0"
              strokeLinecap="round"
              stroke="lightgreen"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              transform="rotate(-90 40 40)"
            />
            <circle
              className="text-yellow-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.workFromHome / 365) * 226} ${226 - (data.attendance.details.workFromHome / 365) * 226}`}
              strokeDashoffset={`${226 - (data.attendance.details.onTime / 365) * 226}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              transform="rotate(-90 40 40)"
            />
            <circle
              className="text-red-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.lateAttendance / 365) * 226} ${226 - (data.attendance.details.lateAttendance / 365) * 226}`}
              strokeDashoffset={`${185 - (data.attendance.details.workFromHome / 365) * 226}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
            <circle
              className="text-gray-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.absent / 365) * 226} ${226 - (data.attendance.details.absent / 365) * 226}`}
              strokeDashoffset={`${156 - (data.attendance.details.lateAttendance / 365) * 226}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
            
          </svg>

          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-xl font-semibold text-gray-700">
              {data.attendance.details.onTime +
                data.attendance.details.workFromHome +
                data.attendance.details.lateAttendance +
                data.attendance.details.absent}
            </span>
            <span className="text-sm font-semibold text-gray-500">/ 365</span>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <svg
          className="w-6 h-6 text-green-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        
        
        <p className="text-sm text-gray-600">
          Better than <span className='text-black font-semibold'>{data.attendance.performance.betterThanPercentage}%</span> of employees!
        </p>
      </div>
      
    </div>
  );
}

export default AttendanceSummary;