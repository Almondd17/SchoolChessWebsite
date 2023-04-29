var abChess = {};
var options = {
    imagesPath: "../images/chess-pieces/",
    animated: false,
    width: 700,
    markLastMove: false,
    animationSpeed: 5,

};
//create the board
abChess = new AbChess("chessboard", options);
var movesCount = 0;
var notify = document.getElementById("notification");
function updateboard(){
    var status = " to move.";
    var turn = "White";
    movesCount += 1;
    if (abChess.getActiveColor(movesCount) === "b") {
        turn = "Black"
    }
    if (abChess.isCheck(movesCount)) {
        status = " is in check.";
    }
    notify.innerText = turn + status;
}
abChess.setFEN();
abChess.onMovePlayed(updateboard);