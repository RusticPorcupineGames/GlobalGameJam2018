var cursorPos, cursor;

var cursors, wasd, mainPlayer;
var patients = 0;

people = [];

var angle = { min: 0, max: 0 };

var Game = function (game) { };

Game.Boot = function (game) { };

Game.Boot.prototype =
{
  preload: function () {
    game.time.advancedTiming = true;
    game.debug.renderShadow = false;
    game.stage.disableVisibilityChange = true;
    game.plugins.add(new Phaser.Plugin.Isometric(game));
    game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
    game.bgImg = game.add.sprite(0, 0, 'backgroundimg');
    game.bgImg.tint = 0xfdfd96;
    //game.stage.backgroundColor = "#fdfd96";
    game.iso.anchor.setTo(0.466, 0.035);

    game.time.desiredFps = 60;


  },
  create: function () {
    people = [];
    patients = 0;
      game.Healed = false;
      game.Healed2 = false;

    this.grid = new Grid(game);

    game.moveCounter = new MoveCounter(game);
    game.killCounter = new KillCounter(game);
    this.homeButton = game.add.button(1100, 550, 'imgHomeButton', function(){ return this.goToHome();}, this, 1,0);
    this.restartButton = game.add.button(200, 550, 'imgRestartButton', function(){ return this.restartLevel();}, this, 1,0);

    game.failReason = '';

    //add the angle change as a tween
    game.add.tween(angle).to(
        { max: 360 },
        5000, // Time duration
        "Linear",
        true,
        0,
        -1,
        false);

    cursorPos = new Phaser.Plugin.Isometric.Point3();
    this.putPeopleIn(game);
  },

  update: function () {
     if(game.Healed2){
         this.state.start('FailScreen');
     }

      for(var i = 0; i < people.length; i++){
      if (!people[i].isMainPlayer)
        people[i].update();
    } // wrong place - this calls sort - now player moves!!
    mainPlayer.update();

    if (!mainPlayer.isGerm){
      if (game.moveCounter.update() == 0){
        game.failReason = 'moves';
        this.state.start('FailScreen');
      }
    }
   else game.moveCounter.germUpdate();

    if(patients == 0){
        this.state.start('EndScreen');
    }

    if (game.moveCounter.checkForTurn()){


    }

    if(game.moveCounter.resetFlag){
        game.moveCounter.resetFlag =false;
        for(var i = 0; i < people.length; i++){
                  people[i].pathfind();
              }
    }

    //   for(var i = 0; i < people.length; i++){
    //       people[i].pathfind();
    //   }
    // }

    if(isoGroup.children[mainPlayer.currentTile].willHealYou){
        game.failReason = 'doctor';

if(!game.Healed){

    mainPlayer.heal(this);
}

    }

  },

  render: function () {
    game.debug.text(game.time.fps || '--', 2, 14, "#bbbbbb");
  },

  putPeopleIn: function (game) {
    var cursors = game.input.keyboard.createCursorKeys();

    var wasd = {
        w: game.input.keyboard.addKey(Phaser.Keyboard.W),
        s: game.input.keyboard.addKey(Phaser.Keyboard.S),
        a: game.input.keyboard.addKey(Phaser.Keyboard.A),
        d: game.input.keyboard.addKey(Phaser.Keyboard.D),
        left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
        right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
        up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
        down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        space: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    };

    wasd.w.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
        mainPlayer.movePlayer('u');
    });

    wasd.s.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
        mainPlayer.movePlayer('d');
    });

    wasd.a.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
        mainPlayer.movePlayer('l');
    });

    wasd.d.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
        mainPlayer.movePlayer('r');
    });

    wasd.up.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
        mainPlayer.movePlayer('u');
    });

    wasd.down.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
        mainPlayer.movePlayer('d');
    });

    wasd.left.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
      mainPlayer.movePlayer('l');
    });

    wasd.right.onDown.add(function () {
      for(var i = 0; i < people.length; i++){
          people[i].pathfind();
      }
      mainPlayer.movePlayer('r');
    });

    var peopleArray = getPeopleLevel(game.levelSelected);

    for(var i = 0; i < peopleArray.length; i++){

        var p;

        switch(peopleArray[i][2]){
            case 'germ':
                p = new Germ(game, peopleArray[i][0], peopleArray[i][1], peopleArray[i][3]);
                break;
            case 'patient':
                p = new Patient(game, peopleArray[i][0], peopleArray[i][1], peopleArray[i][3]);
                break;
            case 'doctor':
                p = new Doctor(game, peopleArray[i][0], peopleArray[i][1], peopleArray[i][3]);
                break;
            default:
                p = new Person(game, peopleArray[i][0], peopleArray[i][1], peopleArray[i][3]);
                break;
        }



        people.push(p);
    }

    //set one player to be active
    people[0].isMainPlayer = true;
    mainPlayer = people[0];
  },

  goToHome: function(){
    this.state.start('StartScreen');
  },

  restartLevel: function(){
    this.state.start('Game');
  }
};
