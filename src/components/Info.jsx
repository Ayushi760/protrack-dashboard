import React from 'react';
import graph from '../assets/graph.svg';
import uparrow from '../assets/uparrow.svg';
import done from '../assets/done.svg';
import book from '../assets/book.svg';
import CanvasJSReact from "@canvasjs/react-charts";
import toolTipPink from "../assets/tooltip-pink.svg";
import toolTipBlue from "../assets/tooltip-blue.svg";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Info = () => {

  // Weekdays
  const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const options = {
    animationEnabled: true,
    height: 150,
    axisY: {
      labelFontSize: 0,
      labelFontColor: "white",
      gridThickness: 0,
      lineThickness: 0,
      tickThickness: 0,
    },
    axisX: {
      labelFontSize: 0,
      labelFontColor: "white",
      gridThickness: 0,
      lineThickness: 0,
      tickThickness: 0,
      viewportMinimum: -0.05,
      viewportMaximum: 5.05,
    },
    toolTip: {
      shared: false,
      borderThickness: 0,
      backgroundColor: "#ffffff00",
      contentFormatter: function (e) {
        const entry = e.entries[0];
        const backgroundColor = entry.dataSeries.color;
        const toolTipImage =
          backgroundColor === "#FD71AF" ? toolTipPink : toolTipBlue;
        const textColor = "white";
        return `<div style="position:absolute;top:-27px;left:100%;transform:translateX(-35%);height:34px;border-radius:4px;display:flex;align-items:center;justify-content:center;width:70px;font-size:16px;">
        <img src="${toolTipImage}" alt="Tooltip Image" style="max-height:100%; max-width:100%; border-radius:4px;" />
        <div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;color:${textColor};font-size:12px;">
        ${entry.dataPoint.y}
        </div>
    </div>`;
      },
    },
    data: [
      {
        type: "spline",
        color: "#FD71AF",
        markerSize: 0,
        markerColor: "white",
        markerBorderColor: "#FD71AF",
        markerBorderThickness: 2,
        dataPoints: [
          { label: "Mon", y: 10 },
          { label: "Tues", y: 17 },
          { label: "Wed", y: 12 },
          { label: "Thur", y: 20 },
          { label: "Fri", y: 12 },
          { label: "Sat", y: 20 },
        ],
      },
      {
        type: "spline",
        color: "#49ccf9",
        markerSize: 0,
        markerColor: "white",
        markerBorderColor: "#49ccf9",
        markerBorderThickness: 2,
        dataPoints: [
          { label: "Mon", y: 4 },
          { label: "Tues", y: 12 },
          { label: "Wed", y: 2 },
          { label: "Thur", y: 16 },
          { label: "Fri", y: 1 },
          { label: "Sat", y: 16 },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col w-full h-auto bg-gray-50">
      <div className='text-[16px] font-medium text-secondary'>Welcome Back!</div>
      <div className='text-[24px] font-semibold text-secondary'>Dalton's Home</div>
      <div className='border-[1px] border-[#ECEBF3] shadow-custom rounded-[10px] p-[15px] bg-white gap-2 flex flex-col'>
        <div className='flex justify-between w-full'>
          <p className='text-xl font-medium text-secondary'>Weekly Overview</p>
          <div className='border-[1px] border-[#E7E6F0] rounded-[10px] w-[33px] h-[33px] flex items-center justify-center'>
            <img src={graph} alt='graph' />
          </div>
        </div>
        <div className='flex justify-between gap-10'>
          <div>
            <div className='flex items-center'>
              <p className='text-[34px] font-bold text-[#888793] leading-none'>20</p>
              <img src={uparrow} alt='uparrow' />
              <p className='text-[#05CD99] text-[12px] font-bold'>+2.45%</p>
            </div>
            <p className='text-sm text-[#888793] font-medium'>Tasks Completed</p>
            <div className='flex items-center justify-center gap-1 my-3'>
              <div className='w-4 h-4 rounded-full bg-[#05CD99] items-center justify-center flex'>
                <img src={done} alt='done' />
              </div>
              <p className='text-[16px] font-bold text-[#05CD99]'>On Track</p>
            </div>
            <div className='border-[1px] border-[#7B68EE] rounded-[10px] w-[131px] p-3 flex justify-between'>
              <img src={book} alt='book' />
              <p className='text-[12px] font-semibold text-[#7B68EE]'>OPEN TASKS</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <div className='flex items-center justify-center w-[90%] border-[1px] border-[#E6E4F0] rounded-[10px] p-2'>
              <CanvasJSChart options={options} />
            </div>
            {/* Weekdays Display */}
            <div className='flex justify-between w-[80%] mb-2'>
              {weekdays.map((day, index) => (
                <span key={index} className='text-[#888793] text-[12px] font-medium'>{day}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
