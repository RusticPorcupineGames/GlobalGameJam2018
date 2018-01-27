var StartScreen = {
    preload : function() {},

    create: function () {
        this.buttonStartLevel1 = game.add.button(game.world.centerX - 95, 200, 'imgStartButton', function(){ return this.startGame(1);}, this, 1,0);
        this.buttonStartLevel2 = game.add.button(game.world.centerX - 95, 400, 'imgStartButton', function(){ return this.startGame(2);}, this, 1,0);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
