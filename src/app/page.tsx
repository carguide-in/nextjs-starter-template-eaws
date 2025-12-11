'use client'; // Enables interactivity

import React from 'react';
import { useEffect, useState } from 'react';

// Inside Home function:
const [cars, setCars] = useState([]);

useEffect(() => {
  // Fetch from Catalyst - replace with your Function URL
  fetch('https://carguideindia-60057529683.development.catalystserverless.in/server/GetBasaltVariantsByMileage/execute') // E.g., query Cars table
    .then(res => res.json())
    .then(data => setCars(data));
}, []);

// Then display below bubbles: <div>{cars.map(car => <p key={car.ModelID}>{car.ModelName}</p>)}</div>

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Hero Banner - Add car image later */}
      <h1 className="text-4xl font-bold mb-8">Find Your Perfect Car in Seconds</h1>
      
      {/* Natural-Language Search Bar */}
      <input 
        type="text" 
        placeholder="Tell me: 'safe automatic SUV under 10 lakhs'" 
        className="w-full max-w-2xl p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
      />
      
      {/* Suggestion Bubbles Row - Clickable for filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="rounded-full bg-blue-200 px-6 py-3 text-blue-800 hover:bg-blue-300">Budget?</button>
        <button className="rounded-full bg-green-200 px-6 py-3 text-green-800 hover:bg-green-300">Fuel Type?</button>
        <button className="rounded-full bg-purple-200 px-6 py-3 text-purple-800 hover:bg-purple-300">Body Type?</button>
        <button className="rounded-full bg-yellow-200 px-6 py-3 text-yellow-800 hover:bg-yellow-300">Driver Profile?</button>
      </div>
    </div>
  );
}
