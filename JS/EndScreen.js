var EndScreen = {
    preload : function() {},
    create : function() {
        var style = { font: "32px Arial", fill: "#ffffff", align: "center" };
        game.add.text(300, 200, "Congradulations. You've won the level!", style);
        game.add.text(300,250, "Wooohooooo", style);
        this.buttonStartLevel1 = game.add.button(game.world.centerX - 200, 400, 'imgLevel1Button', function(){ return this.startGame(1);}, this, 1,0);
        this.buttonStartLevel2 = game.add.button(game.world.centerX - 50, 400, 'imgLevel2Button', function(){ return this.startGame(2);}, this, 1,0);

    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    }
};
