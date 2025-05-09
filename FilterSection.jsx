import React from 'react';

const FilterSection = () => {
  return (
    <div className="p-4">     
     <p className="text-gray-600">
        Improve your design  skills through interactive, hands-on professional courses.
      </p>
      <div className="flex  space-x-2 px-4 pb-4">
      <button className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-sm">
          For you
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-sm">
          Beginner
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 text-sm">
          Intermediate
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 text-sm">
          Advanced
        </button>
         <p className=" inline px-3 py-1 text-gray-700 hover:bg-gray-300 text-sm ml-auto pl-2 pr2 ">status</p>
        <select className=" inline px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 text-sm ml-0 pr-2 pl-2">
          <option value="">  All </option> 
          </select>
      </div>
    </div>
  );
};

export default FilterSection;