'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import EmployeeNav from '../../../../../componets/employeeNav'
const page = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    department: 'Production',
    phone: '',
    email: '',
    leaveReason: 'Annual Leave',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server or perform desired actions
    console.log(formData);
  };
  return (
    <>
    <EmployeeNav />
    <div className="bg-white text-blackshadow-md p-6 rounded-lg shadow-md p-4 w-[64rem] ml-[20rem]">
      <h2 className="text-3xl text-center font-bold mb-4">Leave Application Form</h2>
      <p className="text-gray-600 mb-6">
        Please fill in the form below if you need to leave work. All leave applications need to be
        approved by both the applicant and the manager.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="applicantName" className="block font-medium mb-1">
              Applicant Name
            </label>
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div></div>
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block font-medium mb-1">
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Production">Production</option>
            {/* Add more options for other departments */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Reason for Leave</label>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="emergencyLeave"
                name="leaveReason"
                value="Emergency Leave"
                checked={formData.leaveReason === 'Emergency Leave'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="emergencyLeave" className="ml-2">
                Emergency Leave
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="annualLeave"
                name="leaveReason"
                value="Annual Leave"
                checked={formData.leaveReason === 'Annual Leave'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="annualLeave" className="ml-2">
                Annual Leave
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="leaveReason"
                value="Other"
                checked={formData.leaveReason === 'Other'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="other" className="ml-2">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <div>
            <label htmlFor="startDate" className="block font-medium mb-1">
              First day of absence
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block font-medium mb-1">
              Last day of absence
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default page