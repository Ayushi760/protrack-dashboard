import React from 'react'
import protrackIcon from "../assets/protrackIcon.svg"
import searchIcon from "../assets/search.svg"
import plusIcon from "../assets/plusIcon.svg"
import bellicon from "../assets/bell.svg"
import reddot from "../assets/reddot.svg"
import profile from "../assets/profile.png"
const Header = () => {
  return (
    <div className='bg-header-gradient h-[92px] w-full flex items-center px-[38px] justify-between absolute top-0 left-0'>
      <div className='flex items-center gap-20'>
        <div className='flex gap-3'>
          <img src={protrackIcon} alt='icon' />
          <p className='text-2xl font-[500]'>Protrack</p>
        </div>
        <div className="flex items-center border rounded-full p-5 bg-white w-[404px] h-[46px] gap-4">
          <img src={searchIcon} alt='searchicon' />
          <input
            type="search"
            placeholder="Search"
            className="flex-1 border-none outline-none text-[#9896A3] bg-white text-base"
          />
        </div>
      </div>
      <div className='flex items-center gap-5 '>
        <button className='w-[138px] flex items-center gap-[10px] p-[13px] justify-center bg-button_primary border-none rounded-[10px] focus:outline-none'>
          <img src={plusIcon} alt='plus' className='h-4' />
          <p className='text-xs font-semibold'>ADD TASK</p>
        </button>
        <div className='relative'>
          <img src={bellicon} alt='bell' />
          <img src={reddot} alt="notification" className='absolute top-0 right-[2px]' />
        </div>
        <img src={profile} alt='profile' className='bg-[#B1DBF6] h-12 w-12'/>
      </div>
    </div>
  )
}

export default Header