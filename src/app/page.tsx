'use client'; // Enables interactivity

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [variants, setVariants] = useState([]); // Holds our fetched variants
  const [loading, setLoading] = useState(true); // Shows loading while fetching

  useEffect(() => {
    // Fetch from our Catalyst Function - add ?modelID=YourID for other models later
    fetch('https://carguideindia-60057529683.development.catalystserverless.in/server/GetBasaltVariantsByMileage/execute')
      .then(res => res.json())
      .then(data => {
        setVariants(data); // Save results
        setLoading(false); // Done loading
      })
      .catch(error => {
        console.log('Fetch error:', error);
        setLoading(false);
      });
  }, []); // Runs once on page load

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
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button className="rounded-full bg-blue-200 px-6 py-3 text-blue-800 hover:bg-blue-300">Budget?</button>
        <button className="rounded-full bg-green-200 px-6 py-3 text-green-800 hover:bg-green-300">Fuel Type?</button>
        <button className="rounded-full bg-purple-200 px-6 py-3 text-purple-800 hover:bg-purple-300">Body Type?</button>
        <button className="rounded-full bg-yellow-200 px-6 py-3 text-yellow-800 hover:bg-yellow-300">Driver Profile?</button>
      </div>

      {/* Display fetched Basalt variants - top 5 by mileage */}
      <div className="text-center">
        {loading ? (
          <p>Loading Basalt variants...</p>
        ) : variants.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Top Basalt Variants by Mileage</h2>
            {variants.map((variant, index) => (
              <p key={index} className="mb-2">
                {variant.Variants.VariantID} - {variant.Fuel.FuelEfficiency} kmpl
              </p> // Pulls from your query results
            ))}
          </div>
        ) : (
          <p>No variants found – check Catalyst logs if needed.</p>
        )}
      </div>
    </div>
  );
}
