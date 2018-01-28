

var StartScreen = {
    preload : function() {},

    create: function () {

      this.logo = game.add.sprite(game.world.centerX, 100, 'logo');
      this.logo.anchor.setTo(0.5,0.5);

    var totalLevels = 2;

  // TO DECLAN - function(){return this.startGame(level);} will take the value of level after
  // the for loop has been executed (ie 3) - youll need to think about this a bit more :/
  // Not overly sure. Tried scoping a variable into that - but didnt work :/
    // for (var level = 1; level < (totalLevels+1); level++)
    // {
    //    var xWidthOffset = level * (game.world.width / (totalLevels +2));
    //    var buttonName = 'imgLevel' + level + 'Button';
    //    game.add.button(xWidthOffset, 200, buttonName, function(){return this.startGame(level);}, this, 1, 1);
    //  };

     game.add.button(game.world.centerX - 200, 200, 'imgLevel1Button', function(){ return this.startGame(1);}, this, 1,0);
     game.add.button(game.world.centerX - 50, 200, 'imgLevel2Button', function(){ return this.startGame(2);}, this, 1,0);

        //this.music = game.add.audio('menuScreenMusic');
        //this.music.play();
        //game.input.onDown.add(changeVolume, this);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
