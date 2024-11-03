import React from 'react'
import calendar from "../utils/calendar.json";
import arrow from "../assets/arrow.svg";

const CalenderCard = () => {
  const today = new Date().toISOString().split("T")[0];

  const todayDate = new Date(today);
  const dayOfWeek = todayDate.getDay();
  const startOfWeek = new Date(todayDate);
  startOfWeek.setDate(todayDate.getDate() - dayOfWeek);

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  const currentWeek = calendar.calendar.filter((item) =>
    weekDates.includes(item.date)
  );
  return (
    <div className="w-full bg-gray-50">
      <div className='flex justify-between'>
        <h2 className="mb-2 text-xl font-semibold leading-none text-secondary">Calendar</h2>
        <div className='border-[1.5px] border-customPurple w-[25px] h-[26px] rounded-[10px] flex items-center justify-center'><img src={arrow} alt='arrow' className='h-4' /></div>
      </div>
      <div className="flex items-center justify-center gap-5 mb-5">
        {currentWeek.map((item, index) => (
          <div
            key={index}
            className={`${item.date === today ? "w-[60px] h-[80px]" : "w-[48px] h-[62px]"
              } rounded-xl overflow-hidden bg-white border border-solid border-customGrey shadow-md shadow-gray-200`}
          >
            <div
              className={`w-full h-4 ${item.date === today ? "bg-[#FD71AF]" : "bg-[#FEC6DF]"
                }`}
            ></div>
            <h2
              className={`font-semibold ${item.date === today
                ? "text-[20px] my-[8px]"
                : "text-[16px] mt-[4px] mb-1"
                }  text-secondary leading-none text-center`}
            >
              {item.date.slice(-2)}
            </h2>
            <p
              className={`font-normal ${item.date === today ? "text-sm" : "text-xs"
                } text-secondary leading-none text-center`}
            >
              {item.day}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full h-20 gap-4">
        <div className="w-full h-full p-3 bg-[#B2E6F84D] border border-customBlue border-solid rounded-lg flex justify-center flex-col">
          <h2 className="text-[18px] font-normal text-customBlue">To-Do</h2>
          <h1 className="text-[30px] font-semibold text-customBlue">20</h1>
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