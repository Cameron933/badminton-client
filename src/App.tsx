import "./App.css";
import Rankings from "./components/Rankings";
import Pairings from "./components/Pairings";
import MatchForm from "./components/MatchForm";

function App() {
  return (
    <>
      <h1>Badminton Tournament Match Entry</h1>
      <MatchForm />
      <Rankings />
      <Pairings />
    </>
  );
}

export default App;
