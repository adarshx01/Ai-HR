'use client'
import React, { useState } from 'react';
import EmployeeNav from '../../../../componets/employeeNav';
const ProfilePage = () => {
  const [showCertificationModal, setShowCertificationModal] = useState(false);

  const toggleCertificationModal = () => {
    setShowCertificationModal(!showCertificationModal);
  };

  return (
    <> 
      <EmployeeNav />
      <div className=" w-[69rem] ml-[10rem]">
      <main className="flex justify-between">
        <div className=" w-[21rem]">
                <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                <img
                    src="user-avatar.jpg"
                    alt="User Avatar"
                    className="rounded-full w-20 h-20 mr-4"
                />
                </div>
                <div>
                    <h2 className="text-xl font-bold">Jay Rutherford</h2>
                    <p className="text-gray-600">Role</p>
                    <p className="text-gray-600">UX Research · UI Design · Web Design</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                {/* Personal Info fields */}
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex justify-between items-center">
                <div>
                <h2 className="text-xl font-bold mb-2">Profile link</h2>
                <a
                    href="https://www.profilelink.com"
                    className="text-purple-700 underline"
                >
                    https://www.profilelink.com
                </a>
                </div>
                <div className="flex items-center">
                {/* Connect avatars */}
                <button className="bg-purple-700 text-white py-2 px-4 rounded-md ml-4">
                    Edit profile
                </button>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                <ul className="space-y-4">
                {/* Certification list */}
                </ul>
                <button
                className="bg-purple-700 text-white py-2 px-4 rounded-md mt-4"
                onClick={toggleCertificationModal}
                >
                Add New Certification
                </button>
            </section>

            {showCertificationModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Add New Certification</h2>
                    <div>
                    <label className="block text-gray-700 font-bold mb-2">
                        Certificate Name
                    </label>
                    <input
                        type="text"
                        className="w-full border-gray-400 border rounded-md py-2 px-3"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        className="w-full border-gray-400 border rounded-md py-2 px-3"
                    />
                    </div>
                    <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-2"
                        onClick={toggleCertificationModal}
                    >
                        Cancel
                    </button>
                    <button className="bg-purple-700 text-white py-2 px-4 rounded-md">
                        Create
                    </button>
                    </div>
                </div>
                </div>
            )}
        </div>
        <div className='w-[38rem]'>
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Personal Info</h2>
            <input type="text" placeholder="Name" /> 
            <input type="text" placeholder="Email" /> 
            <input type="text" placeholder="Phone Number" /> 
            <input type="text" placeholder="Address" /> 
            <input type="text" placeholder="Company ID" /> 
            <input type="text" placeholder="VAT Number" />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
   <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <p className="text-gray-600 text-xl">Skill:</p>
      </div>
      <div className="mb-4 flex">
        <button className="text-gray-800 mx-2 border-2 rounded-lg px-2">All</button>
        <button className="text-gray-600 mx-2 border-2 rounded-lg px-2">Industry knowledge:</button>
        <button className="text-gray-800 mx-2 border-2 rounded-lg px-2">Tools & Technologies</button>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Design Software (5 years of experience)</p>
        <p className="text-gray-800">Endorsements: 20</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Research (3 years of experience)</p>
        <p className="text-gray-800">Endorsements: 1</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">User Experience (3 years of experience)</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">User Interface Design (5 years of experience)</p>
      </div>
    </div>
        </section>
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Project Experience</h2>
            <ul className="space-y-4">
              {/* Project Experience list */}
            </ul>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <ul>
              {/* Education list */}
            </ul>
          </section>
        </div>
      </main>
    </div>
    </>
  );
};

export default ProfilePage;