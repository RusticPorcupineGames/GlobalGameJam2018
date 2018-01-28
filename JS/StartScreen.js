

var StartScreen = {
    preload : function() {},

    create: function () {

      this.logo = game.add.sprite(game.world.centerX, 100, 'logo');
      this.logo.anchor.setTo(0.5,0.5);

    var totalLevels = 2;
    for (var level = 1; level < (totalLevels+1); level++)
    {
       var xWidthOffset = level * (game.world.width / (totalLevels+1));
       var buttonName = 'imgLevel' + level + 'Button';
       game.add.button(xWidthOffset, 250, buttonName, function(){return this.startGame(level);}, this, 1, 0).anchor.setTo(0.5,0);
     };

     // game.add.button(game.world.centerX - 200, 200, 'imgLevel1Button', function(){ return this.startGame(1);}, this, 1,0);
     // game.add.button(game.world.centerX - 50, 200, 'imgLevel2Button', function(){ return this.startGame(2);}, this, 1,0);

        //this.music = game.add.audio('menuScreenMusic');
        //this.music.play();
        //game.input.onDown.add(changeVolume, this);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
