var abChess = {};
var options = {
    imagesPath: "../images/chess-pieces/",
    animated: false,
    width: 500,
    markLastMove: false,
    animationSpeed: 5
};
abChess = new AbChess("chessboard", options);
abChess.setFEN();