import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pairing } from "../interfaces/match";

const Pairings: React.FC = () => {
  const [pairings, setPairings] = useState<Pairing[]>([]);

  useEffect(() => {
    const fetchPairings = async () => {
      try {
        const serverUrl =
          import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
        const response = await axios.get(`${serverUrl}/pairings`);
        if (Array.isArray(response.data)) {
          setPairings(response.data);
        } else {
          console.error("Received data is not an array", response.data);
          setPairings([]);
        }
      } catch (error) {
        console.error("Error fetching pairings data", error);
      }
    };

    fetchPairings();
  }, []);

  return (
    <div>
      <h2>Next Round Pairings</h2>
      <ul>
        {pairings.map((pairing, index) => (
          <li key={index}>
            {pairing.player1} vs {pairing.player2}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pairings;
