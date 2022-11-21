export default function generateGameStatus(gameResult, gameCharacters, turn) {
  let status = "";
  if (gameResult === gameCharacters[0] || gameResult === gameCharacters[1]) {
    status = "The Winner Is " + gameResult;
  } else if (gameResult === "Continue") {
    status = "Next Turn: " + turn;
  } else {
    status = "It's a Draw";
  }
  return status;
}
