var MoveCounter = function(game){
  var _initial = 5;
  var _moves = _initial;

  var title = game.add.text(1175, 50, 'Moves:', { fontSize: '16px', fill: '#000' });
  var scoreText = game.add.text(1175, 64, _moves, { fontSize: '90px', fill: '#000' });

  this.useMove = function(){
    return --_moves;
  }

  this.resetMoves = function(){
    _moves = _initial;
  }
}
