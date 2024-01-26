import React, { useState } from "react";
import axios from "axios";
import { MatchData } from "../interfaces/match";

const MatchForm: React.FC = () => {
  const [formData, setFormData] = useState<MatchData>({
    player1: "",
    player2: "",
    rounds: [
      { player1Score: 0, player2Score: 0 },
      { player1Score: 0, player2Score: 0 },
    ],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    roundIndex: number,
    player: string
  ) => {
    const updatedRounds = [...formData.rounds];
    updatedRounds[roundIndex] = {
      ...updatedRounds[roundIndex],
      [player]: parseInt(e.target.value),
    };
    setFormData({ ...formData, rounds: updatedRounds });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
      await axios.post(`${serverUrl}/matches`, formData);
      alert("Match results submitted successfully");
      setFormData({
        player1: "",
        player2: "",
        rounds: [
          { player1Score: 0, player2Score: 0 },
          { player1Score: 0, player2Score: 0 },
        ],
      });
    } catch (error) {
      console.error("Error submitting match results", error);
      alert("Failed to submit match results");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player 1 Name"
        value={formData.player1}
        onChange={(e) => setFormData({ ...formData, player1: e.target.value })}
      />
      <input
        type="text"
        placeholder="Player 2 Name"
        value={formData.player2}
        onChange={(e) => setFormData({ ...formData, player2: e.target.value })}
      />
      {formData.rounds.map((round, index) => (
        <div key={index}>
          <label>Round {index + 1}</label>
          <input
            type="number"
            placeholder="Player 1 Score"
            value={round.player1Score}
            onChange={(e) => handleInputChange(e, index, "player1Score")}
          />
          <input
            type="number"
            placeholder="Player 2 Score"
            value={round.player2Score}
            onChange={(e) => handleInputChange(e, index, "player2Score")}
          />
        </div>
      ))}
      <button type="submit">Submit Match Results</button>
    </form>
  );
};

export default MatchForm;
