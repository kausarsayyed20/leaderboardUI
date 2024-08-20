import './App.css';
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
      <div className="App">
          <Leaderboard topK={5}/> {/* Fetches and displays top 5 scores */}
      </div>
  );
}

export default App;
