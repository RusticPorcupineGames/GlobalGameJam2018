const Directions = Object.freeze({
  UP:     Symbol("up"),
  DOWN:   Symbol("down"),
  LEFT:   Symbol("left"),
  RIGHT:  Symbol("right")
});

class Person {

  constructor(game, initialIndex, image, patrol, direction = Directions.DOWN) {
    this._game = game;
    this._index = initialIndex;
    this._direction = direction;
    //this._image = image;
    this._patrol = patrol;
    this._isMainPlayer = false;

    this.sprite = game.add.isoSprite(
      isoGroup.children[this.index]._isoPosition.x,
      isoGroup.children[this.index]._isoPosition.y,
      0, image, 0, isoGroup);

    isoGroup.children[this.index].hasAHuman = true; // ########## BAD CODE.

    //this.sprite.anchor.setTo(-0.25, -0.62);
    this.sprite.anchor.set(-0.3, 0.2);
    //this.sprite.anchor.setTo(-0.25, -0.5);
    this.sprite.animations.add('up', [1], 10, true);
    this.sprite.animations.add('right', [2], 10, true);
    this.sprite.animations.add('left', [0], 10, true);
    this.sprite.animations.add('down', [3], 10, true);
    this.sprite.animations.play('down');
  }

  get game(){return this._game;}

  set index(value){this._index = value;}
  get index(){return this._index;}
  get upIndex(){    let value = this.index - 1;  return value >= 0 && value < 144 ? value : -1;}
  get downIndex(){  let value = this.index + 1;  return value >= 0 && value < 144 ? value : -1;}
  get leftIndex(){  let value = this.index - 12; return value >= 0 && value < 144 ? value : -1;}
  get rightIndex(){ let value = this.index + 12; return value >= 0 && value < 144 ? value : -1;}

  set direction(value){this._direction = value;}
  get direction(){return this._direction;}

  get patrol(){return this._patrol;}

  get isMainPlayer(){return this._isMainPlayer;}
  set isMainPlayer(value){this._isMainPlayer = value;}

  update() {
      game.iso.topologicalSort(isoGroup);

      console.log("tile " + isoGroup.children[this.index]._isoPosition.x + " " + isoGroup.children[this.index]._isoPosition.y + " " + isoGroup.children[this.index]._isoPosition.z);
      console.log("person " + this.sprite._isoPosition.x + " " + this.sprite._isoPosition.y + " " + this.sprite._isoPosition.z);
  }

  walkingAudio() {
    this.step1 = game.add.audio('step1');
    this.step2 = game.add.audio('step2');
    this.step1.play();
    this.step2.play();
  }


  infectAudio() {
    this.music = game.add.audio('infect');
    this.music.play();
  }

  infect(){
    this._isMainPlayer = true;

    this.infectAudio();
    game.killCounter.update();
    game.moveCounter.resetMoves();
    this.sprite.tint =  0x009933;
    mainPlayer = this;
    patients--;
    return true;
  }


  die(){
     isoGroup.children[this.index].hasAHuman = false;
     people.splice(this.index, 1);
  }


  heal(callback){

      if(game.Healed) return;
      game.Healed = true;

      var j = this.index;
      var p =isoGroup.children[j];


      var tween = game.add.tween(p);
      tween.to({
              alpha: 0
          },
          10,
          Phaser.Easing.Linear.none, false);

      var tween2 = game.add.tween(this.sprite);
      tween2.to({
              isoZ: -150
          },
          2000,
          Phaser.Easing.Linear.none, false);

     tween.start();
     tween2.start();

     tween2.onComplete.add(
         function(){
             game.Healed2 = true;

         });

       tween.chain(tween2);
  }

  doWalk(next) {

    if(game.Healed) return;

    var nextTilePosition = isoGroup.children[next]._isoPosition;
    this.walkingAudio();

    if (isoGroup.children[next].hasAHuman && this._isMainPlayer) {

        isoGroup.children[this.index].hasAHuman = false;

      for (var i = 0; i < people.length; i++) {
        if (people[i]._index == next) {
          var infected = people[i].infect();
          if(infected){
              this.die();
          }
          return;
        }
      }

    }else{


        isoGroup.children[this.index].hasAHuman = false;
        isoGroup.children[next].hasAHuman = true;
        this.index = next;
        var tween = game.add.tween(this.sprite);
        tween.to({
                isoZ: 0,
                isoX: (nextTilePosition.x),
                isoY: (nextTilePosition.y)
            },
            200,
            Phaser.Easing.Linear.none, false).to({
                isoZ: 0
            },
            200, Phaser.Easing.Linear.none, false);

        if (this.oldTween != undefined && this.oldTween.isRunning) {
            this.oldTween.chain(tween);
        }
        this.oldTween = tween;
        tween.start();
    }
  }

  goRight() {
    if (this.index < 132) {
      this.sprite.animations.play('right');

      var next = this.index + 12;
      if (this.checkCanWalk(next)) {
        this.doWalk(next);
        this.direction = Directions.RIGHT;
        return true;
      }
    }
    return false;
  }

  goLeft() {
    if (this.index > 11) {
      this.sprite.animations.play('left');
      var next = this.index - 12;
      if (this.checkCanWalk(next)) {
        this.doWalk(next);
        this.direction = Directions.LEFT;
        return true;
      }
    }
    return false;
  }

  checkCanWalk(next){
      if(this._isMainPlayer){
        if (isoGroup.children[next].isWalkable){
          return true;
        }
        return false;
      }
      if (!isoGroup.children[next].hasAHuman && isoGroup.children[next].isWalkable){
        return true;
      }
      return false;
  }

  goUp() {
    if (this.index % 12 != 0) {
      this.sprite.animations.play('up');
      var next = this.index - 1;
      if (this.checkCanWalk(next)) {
        this.doWalk(next);
        this.direction = Directions.UP;
        return true;
      }
    }
    return false;
  }

  goDown() {
    if (this.index % 12 != 11) {
      this.sprite.animations.play('down');
      var next = this.index + 1;
      if (this.checkCanWalk(next)) {
        this.doWalk(next);
        this.direction = Directions.DOWN;
        return true;
      }
    }
    return false;
  }

  movePlayer(direction) {
    switch (direction) {
      case Directions.UP:
        return this.goUp();
      case Directions.DOWN:
        return this.goDown();
      case Directions.LEFT:
        return this.goLeft();
      case Directions.RIGHT:
        return this.goRight();
    }

  }

  pathfind(){
    if (this._isMainPlayer) return;

    switch(this.patrol){
      case 'line':
          if (!this.movePlayer(this.direction)) {
            this.movePlayer(this.getOppositeDirection(this.direction));
          }
          break;
      case 'none':
      default:
          break;
    }
  }

  getOppositeDirection(){
    switch(this.direction){
      case Directions.UP:
        return Directions.DOWN;
      case Directions.DOWN:
        return Directions.UP;
      case Directions.LEFT:
        return Directions.RIGHT;
      case Directions.RIGHT:
        return Directions.LEFT;
    }
  }
}
