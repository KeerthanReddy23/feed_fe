import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logout from '../Pages/Logout';

const SideNavbar = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="fixed inset-y-0 left-0 bg-gray-800 text-white flex flex-col p-4 transition-all duration-300 ease-in-out md:w-64 w-48 sm:w-56">
        <h1 className="text-2xl font-bold mb-6">My Feed</h1>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'mb-4 p-2 bg-gray-700 rounded text-white'
              : 'mb-4 p-2 hover:bg-gray-700 rounded text-gray-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/new-post"
          className={({ isActive }) =>
            isActive
              ? 'mb-4 p-2 bg-gray-700 rounded text-white'
              : 'mb-4 p-2 hover:bg-gray-700 rounded text-gray-300'
          }
        >
          New Post
        </NavLink>
        <NavLink
          to="/my-posts"
          className={({ isActive }) =>
            isActive
              ? 'mb-4 p-2 bg-gray-700 rounded text-white'
              : 'mb-4 p-2 hover:bg-gray-700 rounded text-gray-300'
          }
        >
          My Posts
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? 'mb-4 p-2 bg-gray-700 rounded text-white'
              : 'mb-4 p-2 hover:bg-gray-700 rounded text-gray-300'
          }
        >
          Account
        </NavLink>
        <div className="mt-auto">
          <Logout />
        </div>
      </div>

      <div className="flex-1 ml-64 p-6 overflow-y-auto transition-all duration-300 ease-in-out md:ml-64 sm:ml-56 ml-48">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavbar;