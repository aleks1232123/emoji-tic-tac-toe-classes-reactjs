import './App.css';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';

function App() {

  let charactersList = ['👻', '💀', '😈', '👹', '🤡', '💩', '👽', '👾', '🤖', '🎃'];
  let gameCharacters = [];

  while (true){
    let firstChar = Math.round(Math.random()*(charactersList.length - 1));
    let secChar = Math.round(Math.random()*(charactersList.length - 1));
    if (firstChar !== secChar){
      gameCharacters.push(charactersList[firstChar], charactersList[secChar]);
      break;
    };
    continue;
  }

  return (
    <div className="App">
      <Scoreboard />
      <Board characters={gameCharacters}/>
    </div>
  );
}

export default App;
