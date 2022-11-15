export default function countBoardValue(boardState){

  const boardValuesCounter = {
    '0': 0,
    '1': 0,
    '2': 0,
  };
  
  for (let i = 0; i < boardState.length; i++){
    for (let j = 0; j < boardState.length; j++){
      if (!boardState[i][j]) boardValuesCounter['0'] += 1;
      else boardValuesCounter[boardState[i][j]] += 1;
    }
  };

  return boardValuesCounter;

}


