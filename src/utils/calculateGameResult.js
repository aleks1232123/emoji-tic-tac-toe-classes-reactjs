import countBoardValue from "./countBoardValues";

export default function calculateGameResult(boardState) {
  
  let gameColorScheme = [[null, null, null], [null, null, null], [null, null, null]];
  let gameResult = 'Continue';
  for (let i = 0; i < boardState.length; i++){
    if (boardState[i][0] && boardState[i][0] === boardState[i][1] && boardState[i][0] === boardState[i][2]){
      gameColorScheme[i][0] = gameColorScheme[i][1] = gameColorScheme[i][2] = 1;
      gameResult = boardState[i][0];
      return [gameResult, gameColorScheme];
    }
    if (boardState[0][i] && boardState[0][i] === boardState[1][i] && boardState[0][i] === boardState[2][i]){
      gameColorScheme[0][i] = gameColorScheme[1][i] = gameColorScheme[2][i] = 1;
      gameResult = boardState[0][i];
      return [gameResult, gameColorScheme];
    }
  }
  if (boardState[0][0] && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]){
    gameColorScheme[0][0] = gameColorScheme[1][1] = gameColorScheme[2][2] = 1;
    gameResult = boardState[0][0];
    return [gameResult, gameColorScheme];
  }
  if (boardState[0][2] && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]){
    gameColorScheme[0][2] = gameColorScheme[1][1] = gameColorScheme[2][0] = 1;
    gameResult = boardState[0][2];
    return [gameResult, gameColorScheme];
  }
  if (countBoardValue(boardState)['emptyValues']){
    gameResult = 'Continue';
    return [gameResult, gameColorScheme];
  }
  else{
    gameResult = 'Draw';
    return [gameResult, gameColorScheme];
  }
}
