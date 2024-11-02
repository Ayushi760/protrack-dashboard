import React from 'react'
import calendar from "../utils/calendar.json";
import arrow from "../assets/arrow.svg";

const CalenderCard = () => {
  // Get today's date in 'YYYY-MM-DD' format for comparison
  const today = new Date().toISOString().split("T")[0];

  // Find the date for the current Sunday (start of the week)
  const todayDate = new Date(today);
  const dayOfWeek = todayDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const startOfWeek = new Date(todayDate);
  startOfWeek.setDate(todayDate.getDate() - dayOfWeek); // Adjust back to Sunday

  // Create an array of dates from Sunday to Saturday of the current week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
  });

  // Filter calendar to include only dates in the current week
  const currentWeek = calendar.calendar.filter((item) =>
    weekDates.includes(item.date)
  );
  return (
    <div className="w-full bg-gray-50">
      <div className='flex justify-between'>
        <h2 className="mb-2 text-xl font-semibold leading-none text-secondary">Calendar</h2>
        <div className='border-[1.5px] border-[#7B68EE] w-[25px] h-[26px] rounded-[10px] flex items-center justify-center'><img src={arrow} alt='arrow' className='h-4' /></div>
      </div>
      <div className="flex items-center justify-center gap-5 mb-5">
        {currentWeek.map((item, index) => (
          <div
            key={index}
            className={`${item.date === today ? "w-[60px] h-[80px]" : "w-[48px] h-[62px]"
              } rounded-xl overflow-hidden bg-white border border-solid border-[#E6E4F0] shadow-md shadow-gray-200`}
          >
            <div
              className={`w-full h-4 ${item.date === today ? "bg-[#FD71AF]" : "bg-[#FEC6DF]"
                }`}
            ></div>
            <h2
              className={`font-semibold ${item.date === today
                ? "text-[20px] my-[8px]"
                : "text-[16px] mt-[4px] mb-1"
                }  text-[#56555C] leading-none text-center`}
            >
              {item.date.slice(-2)}
            </h2>
            <p
              className={`font-normal ${item.date === today ? "text-sm" : "text-xs"
                } text-[#56555C] leading-none text-center`}
            >
              {item.day}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full h-20 gap-4">
        <div className="w-full h-full p-3 bg-[#B2E6F84D] border border-[#49CCF9] border-solid rounded-lg flex justify-center flex-col">
          <h2 className="text-[18px] font-normal text-[#49CCF9]">To-Do</h2>
          <h1 className="text-[30px] font-semibold text-[#49CCF9]">20</h1>
        </div>
        <div className="flex flex-col justify-center w-full h-full p-3 bg-purple-100 border border-purple-500 border-solid rounded-lg">
          <h2 className="text-[18px] font-normal text-purple-500 text-">In-Progress</h2>
          <h1 className="text-[30px] font-semibold text-purple-500">15</h1>
        </div>
        <div className="flex flex-col justify-center w-full h-full p-3 bg-green-100 border border-green-500 border-solid rounded-lg">
          <h2 className="text-[18px] font-normal text-green-500">Complete</h2>
          <h1 className="text-[30px] font-semibold text-green-500">03</h1>
        </div>
      </div>
    </div>
  )
}

export default CalenderCard