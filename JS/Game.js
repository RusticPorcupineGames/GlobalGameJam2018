var cursorPos, cursor;

var cursors, wasd, mainPlayer;

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
    game.iso.anchor.setTo(0.466, 0.02);
  },
  create: function () {
    this.grid = new Grid(game);
    this.homeButton = game.add.button(1100, 550, 'g', function(){ return this.goToHome();}, this, 1,0);
    this.restartButton = game.add.button(200, 550, 'g', function(){ return this.restartLevel();}, this, 1,0);

    //game.physics.isoArcade.gravity.setTo(0, 0, -500);
    cursorPos = new Phaser.Plugin.Isometric.Point3();

    this.putPeopleIn(game);

  },
  update: function () {

      for(var i = 0; i < this.people.length; i++){
          this.people[i].update();
      }

     // playerGroup.sort('y', Phaser.Group.SORT_ASCENDING);

      //
    //
    // // Update the cursor position.
    // // It's important to understand that screen-to-isometric projection means you have to specify a z position manually, as this cannot be easily
    // // determined from the 2D pointer position without extra trickery. By default, the z position is 0 if not set.
    // game.iso.unproject(game.input.activePointer.position, cursorPos);
    //
    // this.grid.update();
  },
  render: function () {
    game.debug.text(game.time.fps || '--', 2, 14, "#bbbbbb");
  },

    putPeopleIn: function (game) {
        //Add Keyboard controls

        cursors = game.input.keyboard.createCursorKeys();


        wasd = {
            w: game.input.keyboard.addKey(Phaser.Keyboard.W),
            s: game.input.keyboard.addKey(Phaser.Keyboard.S),
            a: game.input.keyboard.addKey(Phaser.Keyboard.A),
            d: game.input.keyboard.addKey(Phaser.Keyboard.D),
            space: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        };



        wasd.w.onDown.add(function () {
            mainPlayer.movePlayer('u');
        })

        wasd.s.onDown.add(function () {
            mainPlayer.movePlayer('d');
        })

        wasd.a.onDown.add(function () {
            mainPlayer.movePlayer('l');
        })

        wasd.d.onDown.add(function () {
            mainPlayer.movePlayer('r');
        })



        var peopleArray = [
            [0,'doctor'],
            [5, 'doctor']]

        this.people = [];

        for(var i = 0; i < peopleArray.length; i++){
            var p = new Person(game, peopleArray[i][0], peopleArray[i][1], peopleArray[i][2]);
            this.people.push(p);

        }


        //set one player to be active
        this.people[0].isMainPlayer = true;
        mainPlayer = this.people[0];

    },






    goToHome: function(){
      this.state.start('StartScreen');
    },

    restartLevel: function(){
      this.state.start('Game');
    }

};
