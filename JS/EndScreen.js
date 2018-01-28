var EndScreen = {
    preload : function() {},
    create : function() {
        var style = { font: "32px Arial", fill: "#ffffff", align: "center" };
        game.add.text(300, 200, "Congratulations. You've won the level!", style);
        game.add.text(300,250, "Wooohooooo", style);

        var nextLevel = game.levelSelected +1;
        if(nextLevel > 6) nextLevel = 1;

        this.buttonStartLevel1 = game.add.button(game.world.centerX - 200, 400, 'nextLevelBtn', function(){ return this.startGame(nextLevel);}, this, 1,0);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    }
};
