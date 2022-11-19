export default function countBoardValue(boardState){

  const boardValuesCounter = {
    'emptyValues': 0,
    'XValues': 0,
    'OValues': 0,
  };
  
  for (let i = 0; i < boardState.length; i++){
    for (let j = 0; j < boardState.length; j++){
      if (!boardState[i][j]) boardValuesCounter['emptyValues'] += 1;
      else boardValuesCounter[boardState[i][j]] += 1;
    }
  };

  return boardValuesCounter;

}


