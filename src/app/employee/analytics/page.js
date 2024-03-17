import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import EmployeeNav from '../../../../componets/employeeNav';
const data = [
  { name: 'P1', value: 0.28 },
  { name: 'P2', value: 0.32 },
  { name: 'P3', value: 0.24 },
  { name: 'P4', value: 0.16 },
];

const dailyProgressData = [
  { name: '1', value: 15 },
  { name: '2', value: 20 },
  { name: '3', value: 25 },
  { name: '4', value: 20 },
  { name: '5', value: 12 },
  { name: '6', value: 27 },
  { name: '7', value: 15 },
  { name: '8', value: 24 },
  { name: '9', value: 30 },
  { name: '10', value: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <> 
    <EmployeeNav />
    <div className="bg-gray-100 min-h-screen p-8 w-[77rem] ml-[18rem]">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome Amanda 👋</h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-600">No of projects currently working</p>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-600">Performance</p>
            <p className="text-3xl font-bold">92%</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-600">Attendance</p>
            <p className="text-3xl font-bold">91.37%</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-600">Recent</p>
            <p className="text-3xl font-bold">8.63%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Employee Status</h2>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Daily Progress</h2>
            <BarChart
              width={500}
              height={300}
              data={dailyProgressData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
      

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Areas to Improve</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Finalsite Training</td>
              <td className="py-2 px-4 border-b">
                Composer CMS training courses, webinars & live events
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Finalsite Training</td>
              <td className="py-2 px-4 border-b">
                Composer CMS knowledge base, announcements & downloads
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Dashboard;