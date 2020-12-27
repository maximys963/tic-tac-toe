import './App.css';
import { TicTacToe } from "./components/TicTacToe/TicTacToe";
import { useApp } from "./useApp";

function App() {
    const {
      gameArray,
      setGameArray
    } = useApp()

  return (
    <div className="App">
      <div className="game_title">Tic Tac Toe</div>
        <TicTacToe gameArray={gameArray} />
    </div>
  );
}

export default App;
