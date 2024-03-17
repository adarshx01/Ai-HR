import React from 'react';
import EmployeeNav from '../../../../componets/employeeNav';
const EmployeePayroll = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      salary: 80000,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      department: 'Product',
      salary: 90000,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Designer',
      department: 'Design',
      salary: 70000,
    },
  ];

  return (
    <>
    <EmployeeNav/>
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-medium text-gray-800 mb-8">Employee Payroll</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Position</th>
            <th className="px-4 py-2 text-left text-gray-600">Department</th>
            <th className="px-4 py-2 text-left text-gray-600">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2 text-gray-600">{employee.id}</td>
              <td className="border px-4 py-2 text-gray-600">{employee.name}</td>
              <td className="border px-4 py-2 text-gray-600">{employee.position}</td>
              <td className="border px-4 py-2 text-gray-600">{employee.department}</td>
              <td className="border px-4 py-2 text-gray-600">{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EmployeePayroll;