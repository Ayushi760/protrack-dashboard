import React from 'react';
import plusIcon from "../assets/plusIcon.svg";
import arrow from "../assets/arrow.svg";
import { notesData } from '../utils/notes';

const NotesCard = () => {
  return (
    <div className="w-full gap-[10px] flex flex-col h-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold leading-none text-secondary">Notes</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-[#B1DBF6] w-[25px] h-[26px] rounded-[5px] flex items-center justify-center">
            <img src={plusIcon} alt="plusIcon" className="h-4" />
          </div>
          <div className='border-[1.5px] border-[#7B68EE] w-[25px] h-[26px] rounded-[10px] flex items-center justify-center'>
            <img src={arrow} alt='arrow' className='h-4' />
          </div>
        </div>
      </div>
      <div className='flex w-full h-full gap-2'>
        {notesData?.map((note, index) => (
          <div key={index} className='w-full border-[1px] border-[#E6E4F0] p-[10px] flex flex-col justify-between rounded-[10px]'>
            <div className='flex flex-col gap-[8px]'>
              <h3 className='text-[#56555C] text-[16px]'>{note.title}</h3>
              <ul className='text-[#888793] text-[12px]'>
                {note?.points?.map((point, idx) => (
                  <li key={idx} className='line-clamp-6'>{point}</li>
                ))}
              </ul>
              <div className='flex flex-col gap-2'>
                {note?.attachments?.length !== 0 && (
                  <div className='flex flex-col'>
                    <div className='text-[#56555C] text-[14px] font-semibold'>Attachments</div>
                    <div className='flex flex-col gap-1'>
                      {note.attachments.slice(0, 2).map((attachment, attIndex) => (
                        <div key={attIndex} className='flex items-center gap-1'>
                          <img src={attachment.url} alt={attachment.description} className='rounded-[6px] w-[71px] h-[36px]' />
                          <p className='text-[10px] text-[#888793]'>{attachment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {note?.attachments?.length === 0 && (
                  <div className='flex items-center justify-center w-full'>
                    <p className='text-[12px] text-[#888793]'></p>
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-end justify-between'>
              <p className='text-[10px] text-[#BBBABE] font-medium flex-1 truncate'>
                {note?.date}
              </p>
              <div className='border-[1.5px] border-[#7B68EE] w-[25px] h-[26px] rounded-[10px] flex items-center justify-center'>
                <img src={arrow} alt='arrow' className='h-4' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesCard;
