var music;
var FILTER_VIGNETTE = 0;
var FILTER_FILMGRAIN = 1;
var StartScreen = {
    preload : function() {},

    create: function () {

    this.bgImg = game.add.sprite(0, 0, 'menubackgroundimg');
    //this.bgImg.anchor.setTo(0.5,0.5);
    this.logo = game.add.sprite(game.world.centerX, 150, 'logo');
    this.logo.anchor.setTo(0.5,0.5);
    //https://dzone.com/articles/why-does-javascript-loop-only-use-last-value
    var totalLevels = 6;

    this.filter= []
    this.filter[FILTER_VIGNETTE] = game.add.filter('Vignette');
    this.filter[FILTER_VIGNETTE].size = 0.3;
    this.filter[FILTER_VIGNETTE].amount = 0.5;
    this.filter[FILTER_VIGNETTE].alpha = 1.0;

    this.filter[FILTER_FILMGRAIN] = game.add.filter('FilmGrain');
    this.filter[FILTER_FILMGRAIN].color = 0.6;
    this.filter[FILTER_FILMGRAIN].amount = 0.04;
    this.filter[FILTER_FILMGRAIN].luminance = 0.8;

    game.stage.filters = [this.filter[FILTER_FILMGRAIN], this.filter[FILTER_VIGNETTE]];

    for (var level = 1; level < (totalLevels+1); level++)
    {
       let _level = level;
       var xWidthOffset = level * (game.world.width / (totalLevels+1));
       var buttonName = 'imgLevel' + level + 'Button';
       game.add.button(xWidthOffset, 250, buttonName,function(){return this.startGame(_level);}, this, 1, 0).anchor.setTo(0.5,0);
     };

   // debugger;
    if(music == undefined){
        music = game.add.audio('menuScreenMusic');
        music.loop = true;
        music.play();
   }

        var style = { font: "24px Arial", fill: "#55555", align: "center" };
       //game.add.text(200, 900, "Congratulations. You've won the level!", style);

        game.add.text(450, 600, "WASD to move.    Avoid doctors.    Infect Patients.", style);
    },

    startGame: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },
};
