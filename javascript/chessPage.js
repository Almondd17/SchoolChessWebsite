var abChess = {};
var options = {
    imagesPath: "../images/chess-pieces/",
    AnimationEffect: true,
    width: 750,
    markLastMove: false,
    animationSpeed: 20,

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
    if (abChess.isCheckmate(movesCount) === true){
        status = " got checkmated! :(";
    }
    
    notify.innerText = turn + status;
}
abChess.setFEN();
abChess.onMovePlayed(updateboard);