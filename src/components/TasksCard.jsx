import React, { useEffect, useState } from "react";
import tasksData from "../utils/tasks.json";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";
import moreIcon from "../assets/more.svg";
import plusIcon from "../assets/plusIcon.svg"
import arrow from "../assets/arrow.svg";
import tags from "../assets/tags.svg";

const TasksCard = () => {
  const [tasks, setTasks] = useState(tasksData.tasks);
  const [tagColors, setTagColors] = useState({});

  const colorClasses = [
    { bg: "bg-[#fef08a4d]", text: "text-[#facc15]" },
    { bg: "bg-[#bbf7d0]", text: "text-[#22c55e]" },
    { bg: "bg-[#fecaca]", text: "text-[#f87171]" },
    { bg: "bg-[#e9d5ff]", text: "text-[#c084fc]" },
  ];

  const assignTagColors = () => {
    const colors = {};
    tasks.forEach((task) => {
      task.tags.forEach((tag) => {
        if (!colors[tag]) {
          const { bg, text } = getRandomColor();
          colors[tag] = { bg, text };
        }
      });
    });
    setTagColors(colors);
  };

  const getRandomColor = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  };

  useEffect(() => {
    assignTagColors();
  }, []);

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const isCompleted = !task.isCompleted;
        const updatedSubTasks = task.subTasks.map((sub) => ({
          ...sub,
          isCompleted,
        }));
        return { ...task, isCompleted, subTasks: updatedSubTasks };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSubTaskToggle = (taskId, subTaskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const updatedSubTasks = task.subTasks.map((sub) => {
          if (sub.id === subTaskId) {
            return { ...sub, isCompleted: !sub.isCompleted };
          }
          return sub;
        });

        const isCompleted = updatedSubTasks.every((sub) => sub.isCompleted);
        return { ...task, isCompleted, subTasks: updatedSubTasks };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="w-full bg-gray-50 flex flex-col gap-[6px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-none text-secondary">Tasks for the day</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-[#B1DBF6] w-[25px] h-[26px] rounded-[5px] flex items-center justify-center"><img src={plusIcon} alt="plusIcon" className="h-4"/></div>
            <div className='border-[1.5px] border-[#7B68EE] w-[25px] h-[26px] rounded-[10px] flex items-center justify-center'><img src={arrow} alt='arrow' className='h-4' /></div>
          </div>
        </div>
        {tasks.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full rounded-[10px] border border-solid border-[#E6E4F0] p-3 flex relative"
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <label
                  className="text-[#008080] cursor-pointer flex gap-2 items-center justify-center"
                  htmlFor={`tick-${item.id}`}
                >
                  <input
                    id={`tick-${item.id}`}
                    name={`tick-${item.id}`}
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleTaskToggle(item.id)}
                    className="appearance-none h-[14px] w-[14px] rounded-sm border border-gray-300 flex items-center justify-center after:content-['\2713'] after:text-white after:font-semibold after:text-xs checked:border-none checked:bg-[#49CCF9]"
                  />
                  <p
                    className={`font-medium text-xs leading-none text-[#49CCF9] ${item.isCompleted ? "line-through" : "no-underline"
                      }`}
                  >
                    {item.title}
                  </p>
                </label>
                {item.subTasks.length > 0 && (
                  <p className="absolute right-3 top-[14px] font-medium text-xs leading-none text-[#BBBABE]">
                    {`${item.subTasks.filter((sub) => sub.isCompleted).length
                      }/${item.subTasks.length} Completed`}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-between pl-14">
                  {item.subTasks.map((sub, i) => (
                    <label
                      key={i}
                      className="text-[#008080] cursor-pointer flex gap-2 items-center mt-[5px]"
                      htmlFor={`subtick-${sub.id}`}
                    >
                      <input
                        id={`subtick-${sub.id}`}
                        name={`subtick-${sub.id}`}
                        type="checkbox"
                        checked={sub.isCompleted}
                        onChange={() => handleSubTaskToggle(item.id, sub.id)}
                        className="appearance-none h-[14px] w-[14px] rounded-sm border border-gray-300 flex items-center justify-center after:content-['\2713'] after:hidden after:text-white after:font-semibold after:text-xs checked:border-none checked:bg-[#49CCF9] checked:after:block"
                      />
                      <p
                        className={`font-medium text-xs leading-none text-[#49CCF9] ${sub.isCompleted ? "line-through" : "no-underline"
                          }`}
                      >
                        {sub.title}
                      </p>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src={tags} alt="tag"/>
                {item.tags.map((tag, i) => {
                  const { bg, text } = tagColors[tag] || { bg: "", text: "" };
                  return (
                    <span
                      key={i}
                      className={`${bg} ${text} py-2 px-3 leading-none rounded-full text-[10px] font-semibold tracking-wide`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={editIcon} alt="edit" />
              <img src={deleteIcon} alt="delete" />
              <img src={moreIcon} alt="more" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksCard;