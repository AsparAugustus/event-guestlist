"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

const Statistics = () => {
  const [guests, setGuests] = useState([]);

  async function fetchGuests() {
    try {
      const response = await axios.get("/api/getGuests");
      setGuests(response.data);

      console.log("Guests", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchGuests();
    }

    fetchData();

    // Fetch guests every 5 seconds
    const interval = setInterval(fetchGuests, 6000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Calculate the number of people checked in
  const numCheckedIn = guests.filter((guest) => guest.checked_in === 1).length;

  // Calculate the number of people not checked in yet
  const numNotCheckedIn = guests.filter(
    (guest) => guest.checked_in === 0
  ).length;

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center">
      <ul className="bg-white shadow-lg rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Guest List</h2>
        <li className="mb-2">Total number of attendees: {guests.length}</li>
        <li className="mb-2">Number of people checked in: {numCheckedIn}</li>
        <li className="mb-2">
          Number of people not checked in yet: {numNotCheckedIn}
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
