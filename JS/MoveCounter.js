var MoveCounter = function(game){
  var _initial = 9;
  var _moves = _initial;
  var _turnFlag = false;

  var title = game.add.text(1175, 50, 'Moves:', { fontSize: '16px', fill: '#000' });
  var countText = game.add.text(1175, 64, _moves, { fontSize: '90px', fill: '#000' });
  var radialProgressBar = game.add.graphics(1202, 100);
  radialProgressBar.lineStyle(18, 0xff0000);
  radialProgressBar.clear();
  var angleMax = 0;

  this.useMove = function(){
     angleMax=0;
    countText.text =--_moves;
    _turnFlag = true;
  }

  this.resetMoves = function(){
    _moves = _initial;
    countText.text =_moves;
    angleMax=0;
  }

  this.checkForTurn = function(){
    var flag = _turnFlag;
    _turnFlag = false;
    return flag;
  }

  this.update = function(){
    radialProgressBar.clear();
    radialProgressBar.lineStyle(18, 0xffffff);
    radialProgressBar.lineColor = Phaser.Color.interpolateColor(color1, color2, 360, angleMax, 1);
    radialProgressBar.arc(0, 0, 80, 0, game.math.degToRad(angleMax), false);
    radialProgressBar.endFill();

    angleMax += 10;
    if(angleMax > 360) {
      countText.text = --_moves;
      angleMax = 0;
      _turnFlag = true;
    };
    return _moves;
  }
}
