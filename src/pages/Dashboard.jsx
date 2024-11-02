import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Middle from '../components/Middle'
import Rightbar from '../components/Righbar'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen overflow-hidden bg-white'>
      <Header />
      <div className='flex pt-[92px] w-full h-full'>
        <Sidebar />
        <Middle/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard