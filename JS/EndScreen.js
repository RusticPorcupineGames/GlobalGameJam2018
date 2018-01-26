var EndScreen = {
    preload : function() {
    },

    create: function () {
      var style = { font: "32px Arial", fill: "#ffffff", align: "center" };

      if (winner === 0)
        game.add.text(450, 200, "Draw", style);
      else if (winner === 1)
        game.add.text(300, 200, "Well done player one (yellow)", style);
      else if (winner === 2)
        game.add.text(300, 200, "Well done player two (red)", style);

      this.buttonStart = game.add.button(game.world.centerX - 95, 400, 'imgStartButton', this.startGame, this, 1,0);
    },

    startGame: function () {
        this.state.start('Game');
    },
};
