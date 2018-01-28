

var StartScreen = {
    preload : function() {},

    create: function () {

    this.logo = game.add.sprite(game.world.centerX, 150, 'logo');
    this.logo.anchor.setTo(0.5,0.5);

    game.add.button(game.world.centerX - 500, 300, 'imgLevel1Button', function(){ return this.startGame(1);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX - 300, 300, 'imgLevel2Button', function(){ return this.startGame(2);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX - 100, 300, 'imgLevel2Button', function(){ return this.startGame(3);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX + 100, 300, 'imgLevel2Button', function(){ return this.startGame(4);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX + 300, 300, 'imgLevel2Button', function(){ return this.startGame(5);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX + 500, 300, 'imgLevel2Button', function(){ return this.startGame(6);}, this, 1,0).anchor.setTo(0.5,0);

    game.add.button(game.world.centerX - 500, 500, 'imgLevel2Button', function(){ return this.startGame(7);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX - 300, 500, 'imgLevel2Button', function(){ return this.startGame(8);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX - 100, 500, 'imgLevel2Button', function(){ return this.startGame(9);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX + 100, 500, 'imgLevel2Button', function(){ return this.startGame(10);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX + 300, 500, 'imgLevel2Button', function(){ return this.startGame(11);}, this, 1,0).anchor.setTo(0.5,0);
    game.add.button(game.world.centerX + 500, 500, 'imgLevel2Button', function(){ return this.startGame(12);}, this, 1,0).anchor.setTo(0.5,0);

        //this.music = game.add.audio('menuScreenMusic');
        //this.music.play();
        //game.input.onDown.add(changeVolume, this);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
