// src/Pages/Account.js

import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/atoms';

const Account = () => {
  const user = useRecoilValue(userState);

  if (!user) {
    return <div className="p-4 text-red-500">User not logged in</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Account Information</h2>
        <div className="mb-4">
          <span className="font-semibold">First Name:</span> {user.firstname}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Last Name:</span> {user.lastname}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Email:</span> {user.email}
        </div>
        <div className="mb-4">
          <span className="font-semibold">User ID:</span> {user.userid}
        </div>
      </div>
    </div>
  );
};

export default Account;