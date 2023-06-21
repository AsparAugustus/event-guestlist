"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GuestList({ onSwitch }) {
  const [guests, setGuests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      await fetchGuests();
    }
  
    fetchData();
  }, []);


  async function fetchGuests() {
    try {
      const response = await axios.get('/api/getGuests');
      setGuests(response.data);

      console.log("Guests", response.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCheckIn(full_name) {
    try {
        console.log(full_name, "full_name here")
      await axios.put(`/api/updatecheckIn`, { full_name });
      await fetchGuests();
    } catch (error) {
      console.error(error, "error here");
    }
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  const [filteredGuests, setFilteredGuests] = useState([]);

  useEffect(()=> {

    const _filteredGuests = guests.filter((guest) =>
    guest.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  setFilteredGuests(_filteredGuests)
  }, [searchQuery, guests])

  

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl">
        <div className="max-h-[80vh] overflow-y-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="block w-full py-2 px-3 mb-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
            style={{ minWidth: '200px' }}
          />

          <ul>
            {!searchQuery ? (
              <>
                {/* Code for rendering when searchQuery is false */}
              </>
            ) : (
              filteredGuests.map((guest) => (
                <li key={guest.full_name} className="flex items-center justify-between py-2">
                  <div>{guest.full_name}</div>
                  {guest.checked_in === 1 ? (
                    <button className="bg-green-500 border border-black px-4 py-2 rounded-md">
                      &#10003; Checked-In
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCheckIn(guest.full_name)}
                      className="bg-white border border-black px-4 py-2 rounded-md"
                    >
                      Check-In
                    </button>
                  )}
                </li>
              ))
            )}
          </ul>

          <button
            onClick={() => {
              onSwitch();
            }}
            className="bg-white border border-black px-4 py-2 rounded-md"
          >
            + Add Guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestList;
