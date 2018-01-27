var cursorPos, cursor;

var cursors, wasd;

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

   // game.physics.isoArcade.gravity.setTo(0, 0, -500);
    cursorPos = new Phaser.Plugin.Isometric.Point3();

    this.putPeopleIn(game);
  },
  update: function () {

      for(var i = 0; i < this.people.length; i++){
          this.people[i].update();
      }

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
        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN
        ]);

        wasd = {
            w: game.input.keyboard.addKey(Phaser.Keyboard.W),
            s: game.input.keyboard.addKey(Phaser.Keyboard.S),
            a: game.input.keyboard.addKey(Phaser.Keyboard.A),
            d: game.input.keyboard.addKey(Phaser.Keyboard.D),
            space: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        };

        var peopleArray = [
            [128,128,'doctor'],
            [288, 288, 'doctor']]

        this.people = [];

        for(var i = 0; i < peopleArray.length; i++){
            this.people.push(new Person(game, peopleArray[i][0], peopleArray[i][1], peopleArray[i][2]));
        }

        //set one player to be active
        this.people[0].isMainPlayer = true;

    }
};
