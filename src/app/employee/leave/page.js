'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import EmployeeNav from '../../../../componets/employeeNav';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  const handleMonthChange = (e) => {
    setCurrentDate(new Date(currentDate.getFullYear(), e.target.value, 1));
  };

  const handleYearChange = (e) => {
    setCurrentDate(new Date(e.target.value, currentDate.getMonth(), 1));
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4 ml-6">
        <div>
          <select value={currentDate.getMonth()} onChange={handleMonthChange} className="px-2 py-1 border rounded mr-2">
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <select value={currentDate.getFullYear()} onChange={handleYearChange} className="px-2 py-1 border rounded">
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
        {/* Add buttons or icons for navigation */}
        <p className=''>{months[currentDate.getMonth()]+" "+currentDate.getFullYear()}</p>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = 'EEE';
    const days = [];
    let startDate = startOfWeek(startOfMonth(currentDate));

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-gray-500">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 -mb-0">{days}</div>;
  };

  const renderDates = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        const statusIndicator = () => {
          if (isSameDay(day, new Date(2022, 11, 2))) return <span className="bg-pink-500 text-white rounded-full px-2">Aaron</span>;
          if (isSameDay(day, new Date(2022, 11, 12))) return <span className="bg-green-500 text-white rounded-full px-2">Aaron</span>;
          if (isSameDay(day, new Date(2022, 11, 24))) return <span className="bg-yellow-500 text-white rounded-full px-2">Aaron</span>;
          return formattedDate;
        };

        days.push(
          <div key={day} className={`pl-24 pb-12 flex justify-center items-center  border-2 rounded-lg mx-0.5 my-0.5 text-gray-700 ${isSameMonth(day, monthStart) ? '' : 'text-gray-400'}`}>
            {statusIndicator()}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div key={day} className="grid h-[5rem] grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }

    return <div className="flex-1  ">{rows}</div>;
  };

  return (
    <>
    <EmployeeNav/>
    <div className="bg-white text-black rounded-lg shadow-md p-4 w-[64rem] mt-[1rem] ml-[20rem]">
    <div  className="flex flex-col h-20 mb-2">
        <p className='text-3xl font-bold text-center mb-1'>Leave Management</p>
        <div className='flex space-x-20 ml-6 text-xl mt-2 font-extrabold'>
            <p>Remaining Leaves : <span className='border-2 w-8 rounded-md ml-1 px-2 absolute'>0</span></p>
            <p>Leaves Taken : <span className='border-2 w-8 rounded-md ml-1 px-2 absolute'>0</span></p>
            <button className='bg-blue-500 text-white rounded-md px-4 py-1 -mt-1'><Link href='/employee/leave/apply'>Apply Leave</Link></button>
            <button className='bg-blue-500 text-white rounded-md px-4 py-1 -mt-1' >Apply Leave</button>
        </div>
    </div>
      {renderHeader()}
      {renderDays()}
      {renderDates()}
    </div>
    </>
  );
};

export default Calendar;