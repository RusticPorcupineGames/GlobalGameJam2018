

var StartScreen = {
    preload : function() {},

    create: function () {

    this.logo = game.add.sprite(game.world.centerX, 150, 'logo');
    this.logo.anchor.setTo(0.5,0.5);
    //https://dzone.com/articles/why-does-javascript-loop-only-use-last-value
    var totalLevels = 6;

    for (var level = 1; level < (totalLevels+1); level++)
    {
       let _level = level;
       var xWidthOffset = level * (game.world.width / (totalLevels+1));
       var buttonName = 'imgLevel' + level + 'Button';
       game.add.button(xWidthOffset, 250, buttonName,function(){return this.startGame(_level);}, this, 1, 0).anchor.setTo(0.5,0);
     };

        //this.music = game.add.audio('menuScreenMusic');
        //this.music.play();
        //game.input.onDown.add(changeVolume, this);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
