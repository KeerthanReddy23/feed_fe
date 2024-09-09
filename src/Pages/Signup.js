import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/signup/`, {
        'first_name':firstname,
        'last_name':lastname,
        email,
        password,
      })
        .then(resp => {
            localStorage.setItem('access', resp.data.access);
            localStorage.setItem('refresh', resp.data.refresh);
            navigate('/');
        })
        .catch(error => {
          console.error(error.response.data);
        });
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-2">First Name</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Re-enter Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Re-enter your password"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">Already have an account?</p>
          <button
            onClick={handleLoginRedirect}
            className="text-blue-500 font-semibold hover:underline mt-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;