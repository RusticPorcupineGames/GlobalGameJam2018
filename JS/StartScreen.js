

var StartScreen = {
    preload : function() {},

    create: function () {
        this.buttonStartLevel1 = game.add.button(game.world.centerX - 200, 200, 'imgLevel1Button', function(){ return this.startGame(1);}, this, 1,0);
        this.buttonStartLevel2 = game.add.button(game.world.centerX - 50, 200, 'imgLevel2Button', function(){ return this.startGame(2);}, this, 1,0);

        this.music = game.add.audio('menuScreenMusic');
        this.music.play();
        //game.input.onDown.add(changeVolume, this);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
