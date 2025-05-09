import React from 'react';

const CourseCard = ({ title, description, level, duration, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 w-full max-w-sm">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
      <div className="flex space-x-2 text-sm text-gray-500">
        <span>{level}</span>
        <span>•</span>
        <span>{duration}</span>
        </div>
      {/*<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm font-medium">
        Start Course
      </button> */}
    </div>
  );
};

export default CourseCard;