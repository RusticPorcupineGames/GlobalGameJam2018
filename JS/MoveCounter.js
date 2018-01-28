var MoveCounter = function(game){
  var _initial = 9;
  var _moves = _initial;
  var _turnFlag = false;
  this.resetFlag = false;

  var title = game.add.text(1175, 50, 'Moves:', { fontSize: '16px', fill: '#000' });
  var countText = game.add.text(1175, 64, _moves, { fontSize: '90px', fill: '#000' });
  title.visible = false;
  countText.visible = false;

  var radialProgressBar = game.add.graphics(1202, 100);
  radialProgressBar.lineStyle(18, 0xff0000);
  radialProgressBar.clear();
  var angleMax = 0;

  this.useMove = function(){
    angleMax=0;
    countText.text =--_moves;
    _turnFlag = true;
  }

  this.useGermMove = function(){
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
    title.visible = true;
    countText.visible = true;

    radialProgressBar.clear();
    radialProgressBar.lineStyle(18, 0xffffff);
    radialProgressBar.lineColor = Phaser.Color.interpolateColor(0x80ff00, 0xff0000, 360, angleMax, 1);
    radialProgressBar.arc(0, 0, 80, 0, game.math.degToRad(angleMax), false);
    radialProgressBar.endFill();

    angleMax += 1;
    if(angleMax > 360) {
      countText.text = --_moves;
      angleMax = 0;
      _turnFlag = true;
      this.resetFlag =true;
    };
    return _moves;
  }

  this.germUpdate = function(){
    angleMax = 0;
    //_turnFlag = true;
    radialProgressBar.clear();
    title.visible = false;
    countText.visible = false;
  }
}
