import countBoardValue from "./countBoardValues";

export default function calculateGameResult(boardState) {
  let winningCellsBacklight = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameResult = "Continue";
  for (let i = 0; i < boardState.length; i++) {
    if (
      boardState[i][0] &&
      boardState[i][0] === boardState[i][1] &&
      boardState[i][0] === boardState[i][2]
    ) {
      winningCellsBacklight[i][0] = winningCellsBacklight[i][1] = winningCellsBacklight[i][2] = 1;
      gameResult = boardState[i][0];
      return {gameResult, winningCellsBacklight};
    }
    if (
      boardState[0][i] &&
      boardState[0][i] === boardState[1][i] &&
      boardState[0][i] === boardState[2][i]
    ) {
      winningCellsBacklight[0][i] = winningCellsBacklight[1][i] = winningCellsBacklight[2][i] = 1;
      gameResult = boardState[0][i];
      return {gameResult, winningCellsBacklight};
    }
  }
  if (
    boardState[0][0] &&
    boardState[0][0] === boardState[1][1] &&
    boardState[0][0] === boardState[2][2]
  ) {
    winningCellsBacklight[0][0] = winningCellsBacklight[1][1] = winningCellsBacklight[2][2] = 1;
    gameResult = boardState[0][0];
    return {gameResult, winningCellsBacklight};
  }
  if (
    boardState[0][2] &&
    boardState[0][2] === boardState[1][1] &&
    boardState[0][2] === boardState[2][0]
  ) {
    winningCellsBacklight[0][2] = winningCellsBacklight[1][1] = winningCellsBacklight[2][0] = 1;
    gameResult = boardState[0][2];
    return {gameResult, winningCellsBacklight};
  }
  if (countBoardValue(boardState)["emptyValues"]) {
    gameResult = "Continue";
    return {gameResult, winningCellsBacklight};
  } else {
    gameResult = "Draw";
    return {gameResult, winningCellsBacklight};
  }
}
