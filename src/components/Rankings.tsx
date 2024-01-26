import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "../interfaces/match";

const Rankings: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const serverUrl =
          import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
        const response = await axios.get(`${serverUrl}/api/rankings`);
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching player data", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>Player Rankings</h2>
      <ul>
        {players.map((player) => (
          <li key={player.playerId}>
            {player.name} - Points: {player.primaryPoints} (Secondary:{" "}
            {player.secondaryPoints})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rankings;
