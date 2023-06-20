"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function AddGuest({ onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkedIn, setCheckedIn] = useState(false);
  const router = useRouter();

  async function handleCheckIn() {
    try {
        const checked_in = 1
      await axios.post('/api/addGuest', {
        full_name: name,
        email: email,
        company: company,
        mobile_number: mobileNumber,
        checked_in: checked_in,
      });
      setCheckedIn(true);
    } catch (error) {
    //   console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Add Guest</h1>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="sr-only">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="button"
          onClick={handleCheckIn}
          disabled={checkedIn}
          className={`w-full py-2 px-4 rounded-md ${checkedIn ? 'bg-green-500' : 'bg-white'} border border-black`}
        >
          {checkedIn ? (
            <>
              &#10003; Checked-In
            </>
          ) : (
            <>
              Check-In
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default AddGuest;
