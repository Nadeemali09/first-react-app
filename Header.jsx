import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">Hi, User</span>
        {/*<div className="w-10 h-10 bg-gray-300 rounded-full"></div> */}
      </div>
    </header>
  );
};

export default Header;