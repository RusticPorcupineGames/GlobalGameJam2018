var StartScreen = {
    preload : function() {},

    create: function () {
      this.buttonStart = game.add.button(game.world.centerX - 95, 400, 'imgStartButton', this.startGame, this, 1,0);
    },

    startGame: function () {
        this.state.start('Game');
    },
};
