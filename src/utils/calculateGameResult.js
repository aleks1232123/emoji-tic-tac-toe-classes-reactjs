import countBoardValue from "./countBoardValues";

export default function calculateGameResult(boardState, gameColorScheme) {
  
  let gameResult = 0; // 0 - game countines, 1-2 - player 1-2 wins, 3 - draw;
 
  for (let i = 0; i < boardState.length; i++){
    if (boardState[i][0] && boardState[i][0] === boardState[i][1] && boardState[i][0] === boardState[i][2]){
      // gameColorScheme[i][0] = gameColorScheme[i][1] = gameColorScheme[i][2] = 1;
      gameResult = boardState[i][0];
      return gameResult;
    }
    if (boardState[0][i] && boardState[0][i] === boardState[1][i] && boardState[0][i] === boardState[2][i]){
      // gameColorScheme[0][i] = gameColorScheme[1][i] = gameColorScheme[2][i] = 1;
      gameResult = boardState[0][i];
      return gameResult;
    }
  }
  if (boardState[0][0] && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]){
    // gameColorScheme[0][0] = gameColorScheme[1][1] = gameColorScheme[2][2] = 1;
    gameResult = boardState[0][0];
    return gameResult;
  }
  if (boardState[0][2] && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]){
    // gameColorScheme[0][2] = gameColorScheme[1][1] = gameColorScheme[2][0] = 1;
    gameResult = boardState[0][2];
    return gameResult;
  }
  if (countBoardValue(boardState)['0']){
    gameResult = 0;
    return gameResult;
  }
  else{
    gameResult = 3;
    return gameResult;
  }
}
