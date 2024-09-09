import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors"
    >
      Logout
    </button>
  );
};

export default Logout;