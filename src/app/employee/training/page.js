import React from 'react';
import EmployeeNav from '../../../../componets/employeeNav';
const LearningPathways = () => {
  const pathways = [
    { name: 'Artificial intelligence' },
    { name: 'Blockchain' },
    { name: 'Design thinking' },
    { name: 'Professional skills' },
    { name: 'Cloud computing' },
  ];

  return (
    <>
    <EmployeeNav/>
    <div className="bg-gray-100 p-8 ">
      <h2 className="text-4xl font-medium text-center text-gray-800 mb-8">Training Plan For You</h2>
      <p className="text-xl text-center text-gray-600 mb-8">
        Discover interests you did not know you had and prepare for jobs, with a new skill, that are just beginning to exist with our free learning pathways
      </p>
      <div className="flex flex-wrap">
        {pathways.map((pathway) => (
          <div key={pathway.name} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
            <div className="bg-white p-4 h-60  rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png'></img>
              <p className="text-xl font-medium text-gray-800">{pathway.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue">
          View all learning pathways
        </button>
      </div>
    </div>
    </>
  );
};

export default LearningPathways;