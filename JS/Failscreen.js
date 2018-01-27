var FailScreen = {
    preload : function() {},
    create : function() {
      var style = { font: "32px Arial", fill: "#ffffff", align: "center" };
      game.add.text(300, 200, "Your moves have run out!", style);
      game.add.text(300,250, "Plan your intial infection carefully to infect all the patients", style);
      this.restartButton = game.add.button(game.world.centerX,game.world.centerY+30, 'imgRestartButton', function() { return this.restartLevel(game.levelSelected);}, this, 1,0);
      this.restartButton.anchor.setTo(0.5,0.5);

    },
    update : function() {},

    restartLevel: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
