import React from 'react'
import NotesCard from './NotesCard'
import Info from './Info'

const Middle = () => {
  return (
    <div className='w-[65%] h-full flex flex-col items-center bg-gray-50 p-[20px] gap-3 justify-between'>
      <Info />
      <hr className='border-[0.5px] border-customGrey w-full' />
      <NotesCard />
    </div>
  )
}

export default Middle