import React from "react";
import TasksCard from "./TasksCard";
import CalenderCard from "./CalenderCard";

const Rightbar = () => {
    return (
        <div className="flex flex-col items-center bg-gray-50 p-[20px] w-[35%] h-full justify-between">
            <CalenderCard/>
            <hr className='border-[1px] border-[#E6E4F0] my-6 w-full' />
            <TasksCard/>
        </div>
    );
};

export default Rightbar;