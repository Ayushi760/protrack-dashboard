import React from 'react'
import calendarIcon from "../assets/calendarIcon.svg"
import HomeIcon from "../assets/HomeIcon.png"
import tasks from "../assets/tasks.svg"
import notes from "../assets/notes.svg"
import protrack from "../assets/protrackSidebar.svg"
import profile from "../assets/profile.png"
import setting from "../assets/Setting.svg"
const Sidebar = () => {
  return (
    <div className='min-w-[271px] h-full justify-between bg-white flex flex-col items-center border-r border-customGrey gap-[100px]'>
      <ul className='flex flex-col gap-[18px] mt-[44px]'>
        <li className='flex flex-row gap-2 bg-button_primary w-[217px] h-[50px] rounded-[10px] items-center'>
          <img src={HomeIcon} alt='home' className='pl-5' />
          <p className='font-medium text-white'>Home</p>
        </li>
        <li className='flex flex-row gap-2'>
          <img src={calendarIcon} alt='calendar' className='pl-5' />
          <p className='font-medium text-secondary'>Calendar</p>
        </li>
        <li className='flex flex-row gap-2'>
          <img src={tasks} alt='tasks' className='pl-5' />
          <p className='font-medium text-secondary'>Tasks</p>
        </li>
        <li className='flex flex-row gap-2'>
          <img src={notes} alt='notes' className='pl-5' />
          <p className='font-medium text-secondary'>Notes</p>
        </li>
        <hr className='h-[1px] bg-customGrey' />
      </ul>
      <div className='bg-sidebar-gradient w-[228px] h-[178px] rounded-[24px] flex flex-col justify-center items-center relative'>
        <div className='absolute bg-white w-[94px] h-[94px] rounded-full -top-10'></div>
        <div className='absolute bg-sidebar-gradient w-[80px] h-[80px] rounded-full -top-8'></div>
        <img src={protrack} alt="protrack" className='absolute -top-3' />
        <p className='mt-[72px] text-[16px] font-bold'>Upgrade to PRO</p>
        <p className='text-sm font-medium'>to get access to all features!</p>
        <p className='text-sm font-medium'>Connect with protrack world!</p>
      </div>
      <div className='bottom-0 mb-[24px] border-[1px] border-customGrey w-[223px] p-2 rounded-[10px] relative flex flex-row items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={profile} alt='profile' className='w-12 h-12 bg-[#B1DBF6] rounded-[5px]' />
          <div className='bg-[#00B884] w-[18px] h-[18px] rounded-[2px] border-[3px] border-white absolute bottom-1 left-11'></div>
          <div>
            <p className='text-[#53515B] text-sm font-medium'>Dalton Smith</p>
            <p className='text-[#A0A0A3] text-sm font-normal'>Free Account</p>
          </div>
        </div>
        <img src={setting} alt='setting' />
      </div>
    </div>
  )
}

export default Sidebar