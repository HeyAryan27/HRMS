
export const dashboardData = {
    user: 'Saurav',
    currentTime: '2:30 PM',
    leaveRequests: 3,
    attendance: {
      today: {
        status: 'present',
        timeLeft: '3h 45m',
        days: 63
      },
      averageHours: '8h 30m',
      averageCheckIn: '9:05 AM',
      averageCheckOut: '5:45 PM',
      onTimeArrivalPercentage: 80,
      details: {
        onTime: 150,
        workFromHome: 40,
        lateAttendance: 40,
        absent: 60,
        currentCount: 20,
        totalDays: 270,
      },
      performance: {
        betterThanPercentage: 70,
        
      },
    },   
  };
  export const team = [
    {
      "name": "Aryan",
      "profileImage": "https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg",
      "dates": generateDates()
    },
    {
      "name": "Aman",
      "profileImage": "https://cdn.openart.ai/published/S7jOXsdB3tMDFy6JNfak/-nmXB1M1_vvaY_1024.webp",
      "dates": generateDates()
    },
    {
      "name": "Aniket",
      "profileImage": "https://i.pinimg.com/474x/8c/44/07/8c44070959b012caa775ee4929c15ffe.jpg",
      "dates": generateDates()
    },
    {
      "name": "Shreya",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cartoon-of-a-young-woman-smiling-on-a-black-background-image_2680954.jpg",
      "dates": generateDates()
    },
    {
      "name": "Sunil",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-in-the-style-of-dark-turquoise-and-light-navy-image_2698692.jpg",
      "dates": generateDates()
    },
  ];
  
  function generateDates() {
    const dates = ['today', '25/9', '24/9', '23/9'];
    const statuses = ['in office', 'work from home', 'on leave', 'absent', 'holiday'];
  
    return dates.map(date => {
      const status = getRandomStatus(statuses);
      return {
        date,
        arrivalTime: status === 'in office' || status === 'work from home' ? getRandomTime() : '-',
        status
      };
    });
  }
  
  function getRandomTime() {
    const hours = Math.floor(Math.random() * 2) + 9; 
    const minutes = Math.floor(Math.random() * 60); 
    const period = hours < 11 ? 'AM' : 'AM'; 
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
  }
  
  function getRandomStatus(statuses) {
    return statuses[Math.floor(Math.random() * statuses.length)];
  }


export const workingHistoryData = [
  {
    date: '4/9/23', 
    arrivalTime: 'leave',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '3/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '2/9/23',
    arrivalTime: 'holiday',
    departureTime: '-',
    effectiveTime: '-',
  },
  {
    date: '1/9/23',
    arrivalTime: '9:00 AM',
    departureTime: '5:00 PM',
    effectiveTime: '8:00',
  },
  
];   

  
