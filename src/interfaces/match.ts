export interface MatchData {
  player1: string;
  player2: string;
  rounds: RoundResult[];
}

export interface RoundResult {
  player1Score: number;
  player2Score: number;
}

export interface Player {
  playerId: string;
  name: string;
  wins: number;
  losses: number;
  primaryPoints: number;
  secondaryPoints: number;
  previousOpponents: string[];
  matchIds: string[];
}

export interface Pairing {
  player1: string;
  player2: string;
}
