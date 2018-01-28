var Person = function(game, x, image) {

  this.isMainPlayer = false;
  this.currentTile = x;
  this.oldTween;
  var myTilePosition = isoGroup.children[x]._isoPosition;
  isoGroup.children[x].hasAHuman = true;
  var person = game.add.isoSprite(myTilePosition.x, myTilePosition.y, 0, image, 0, isoGroup);
  person.anchor.setTo(-0.25, 0.4);
  person.animations.add('up', [1], 10, true);
  person.animations.add('right', [2], 10, true);
  person.animations.add('left', [0], 10, true);
  person.animations.add('down', [3], 10, true);
  person.animations.play('down');

  this.update = function() {
      game.iso.topologicalSort(isoGroup);
  },

  this.walkingAudio = function() {
    this.step1 = game.add.audio('step1');
    this.step2 = game.add.audio('step2');
    this.step1.play();
    this.step2.play();

  },

  this.infect = function(){
    this.isMainPlayer = true;
    person.tint =  0xb4ead1;
    mainPlayer = this;
    game.moveCounter.resetMoves();
  },


  this.die = function(p){
     isoGroup.children[this.currentTile].hasAHuman = false;
     people.splice(this.currentTile, 1);
  },


  this.doWalk = function(next) {
    var nextTilePosition = isoGroup.children[next]._isoPosition;
    this.walkingAudio();

    //switch control to a new human instead of working
    if (isoGroup.children[next].hasAHuman) {

        isoGroup.children[this.currentTile].hasAHuman = false;

      for (var i = 0; i < people.length; i++) {
        if (people[i].currentTile == next) {
          people[i].infect(person);
          this.die(person);
          return;
        }
      }
    }else {
        isoGroup.children[this.currentTile].hasAHuman = false;
        isoGroup.children[next].hasAHuman = true;
        this.currentTile = next;
        var tween = game.add.tween(person);
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


  },

  this.goRight = function() {
    if (this.currentTile < 132) {
      person.animations.play('right');

      var next = this.currentTile + 12;
      if (isoGroup.children[next].isWalkable && this.currentTile < 132) {
        this.doWalk(next);
      }
    }
  },

  this.goLeft = function() {
    if (this.currentTile > 11) {
      person.animations.play('left');
      var next = this.currentTile - 12;
      if (isoGroup.children[next].isWalkable && this.currentTile > 11) {
        this.doWalk(next);
      }
    }
  },

  this.goUp = function() {
    if (this.currentTile % 12 != 0) {
      person.animations.play('up');
      var next = this.currentTile - 1;
      if (isoGroup.children[next].isWalkable && this.currentTile % 12 != 0) {
        this.doWalk(next);
      }
    }
  },

  this.goDown = function() {
    if (this.currentTile % 12 != 11) {
      person.animations.play('down');
      var next = this.currentTile + 1;
      if (isoGroup.children[next].isWalkable && this.currentTile % 12 != 11) {
        this.doWalk(next);
      }
    }
  },



  this.movePlayer = function(direction) {
    switch (direction) {
      case 'u':
        this.goUp();
        break;
      case 'd':
        this.goDown();
        break;
      case 'l':
        this.goLeft();
        break;
      case 'r':
        this.goRight();
        break;
    }

  }



}



