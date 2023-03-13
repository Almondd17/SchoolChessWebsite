var board = Chessboard('board', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true,
  pieceTheme: 'images/chess-pieces/{piece}.png'
});

var game = new Chess();
var legalMoves = game.moves({ verbose: true }).map(function(move) {
  return Chessboard.objToFen(move.from) + '-' + Chessboard.objToFen(move.to);
});

function onDragStart(source, piece, position, orientation) {
  // only allow piece movement if it's a legal move
  if (legalMoves.indexOf(source + '-' + position) === -1) {
      return false;
  }
}

function onDrop(source, target, piece, newPos, oldPos, orientation) {
  // only make the move if it's a legal move
  var move = game.move({
      from: source,
      to: target,
      promotion: 'q' // always promote to a queen for simplicity
  });

  if (move === null) {
      return 'snapback';
  }
}

// update the board position after the piece snap 
// for castling, en passant, pawn promotion, etc.
function onSnapEnd() {
  board.position(game.fen());
}

// configure the board event handlers
board.on('dragStart', onDragStart);
board.on('drop', onDrop);
board.on('snapEnd', onSnapEnd);

// set the initial board position
board.position(game.fen());







