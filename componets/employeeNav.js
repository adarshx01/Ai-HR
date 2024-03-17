'use client'
import React, { useState } from 'react';

const employeeNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-purple-700 text-black w-full h-16 shadow-lg z-10 py-1 px-8 flex items-center justify-between">
        {/* Logo and buttons on the left */}
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold px-4 ">Logo</div>
          <nav>
            <ul className="flex space-x-4 ">
              <li>
                <a href="/employee" className="hover:text-purple-300 px-4">
                  Home
                </a>
              </li>
              <li className="ml-4">
                <a href="/employee/leave" className="hover:text-purple-300 px-4">
                  Leave
                </a>
              </li>
              <li className="ml-4">
                <a href="/employee/payroll" className="hover:text-purple-300 px-4">
                  Payroll
                </a>
              </li>
              <li className="ml-4">
                <a href="/employee/calendar" className="hover:text-purple-300 px-4">
                  Calendar
                </a>
              </li>
              <li className="ml-4">
                <a href="/employee/training" className="hover:text-purple-300 px-4">
                  Training
                </a>
              </li>
              <li className="ml-4">
                <a href="/employee/analytics" className="hover:text-purple-300 px-4">
                  Analytics
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search bar and profile section on the rightmost */}
        <div className="flex items-center space-x-4 ">
          <div className="relative w-full px-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md text-black bg-slate-600 border-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search"
            />
          </div>
          <div className="relative ml-4 px-4">
            <button
              className="flex items-center  focus:outline-none "
              onClick={toggleDropdown}
            >
              <img src="https://via.placeholder.com/32" alt="Profile" className="rounded-full w-8 h-8 " />
              <span>Amanda Smith</span>
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Log Out
                </a>
                <a
                  href="/employee/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  My Account
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default employeeNav;