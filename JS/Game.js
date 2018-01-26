var cursorPos, cursor;

var doctor;


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
    game.iso.anchor.setTo(0.5, 0.02);
  },
  create: function () {
    this.grid = new Grid(game);

   // game.physics.isoArcade.gravity.setTo(0, 0, -500);
    cursorPos = new Phaser.Plugin.Isometric.Point3();



    //Add main player
      doctor = game.add.isoSprite(128, 128, 0, 'doctor', 0, isoGroup);
      doctor.anchor.setTo(0.5, 0.5);

      game.physics.isoArcade.enable(doctor);


      // Set up our controls.
      this.cursors = game.input.keyboard.createCursorKeys();

      this.game.input.keyboard.addKeyCapture([
          Phaser.Keyboard.LEFT,
          Phaser.Keyboard.RIGHT,
          Phaser.Keyboard.UP,
          Phaser.Keyboard.DOWN,
          Phaser.Keyboard.SPACEBAR
      ]);

      var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      space.onDown.add(function () {
          //TODO Spread germs
      }, this);


  },
  update: function () {
      // Move the player at this speed.
      var speed = 100;

      if (this.cursors.up.isDown) {
          doctor.body.velocity.y = -speed;
      }
      else if (this.cursors.down.isDown) {
          doctor.body.velocity.y = speed;
      }
      else {
          doctor.body.velocity.y = 0;
      }

      if (this.cursors.left.isDown) {
          doctor.body.velocity.x = -speed;
      }
      else if (this.cursors.right.isDown) {
          doctor.body.velocity.x = speed;
      }
      else {
          doctor.body.velocity.x = 0;
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
  }
};
