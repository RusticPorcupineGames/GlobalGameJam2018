var PreLoad = {
    preload : function() {
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		var loadingText = game.add.text(0, 0, "Loading", style);
		loadingText.setTextBounds(0, 385, 1024, 100);

    var barX = (this.game.width - 600) / 2;
    var barY = this.game.height - 200;
    this.add.sprite(barX, barY, 'preloaderBarGray');
		this.preloadBar = this.add.sprite(barX, barY, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);


		/** GAME ASSETS **/
		// Large BG images
    game.load.image('backgroundimg', 'Images/backgroundimg.png');
    game.load.image('tutorial', 'Images/tutorial.png');

		// Images
    game.load.image('w', 'Images/tiles/water.png');
    game.load.image('g', 'Images/tiles/grass.png');
    game.load.image('p', 'Images/tiles/path.png');
    game.load.image('d', 'Images/tiles/dirt.png');

    game.load.image('bh', 'Images/tiles/bhgrass.png');
    game.load.image('bc', 'Images/tiles/bcgrass.png');
    game.load.image('bc2', 'Images/tiles/bcgrass2.png');
    game.load.image('bc3', 'Images/tiles/bcgrass3.png');

    game.load.image('gh', 'Images/tiles/ghgrass.png');
    game.load.image('gc', 'Images/tiles/gcgrass.png');
    game.load.image('gc2', 'Images/tiles/gcgrass2.png');
    game.load.image('gc3', 'Images/tiles/gcgrass3.png');

		// Sprite sheets
		game.load.spritesheet('imgStartButton', 'Images/startButton.png', 193, 67);


    // UI (Clickable boxes)
    game.load.image('uibox', 'Images/ui/box.png');
    game.load.image('uid', 'Images/ui/dbox.png');
    game.load.image('uig', 'Images/ui/gbox.png');

    game.load.image('uibc', 'Images/ui/bcbox.png');
    game.load.image('uibcup', 'Images/ui/bcboxup.png');
    game.load.image('uibh', 'Images/ui/bhbox.png');

    game.load.image('uigc', 'Images/ui/gcbox.png');
    game.load.image('uigcup', 'Images/ui/gcboxup.png');
    game.load.image('uigh', 'Images/ui/ghbox.png');

    // UI (Help)
    game.load.image('uiq', 'Images/ui/question.png');
    game.load.image('uic', 'Images/ui/cross.png');

		// Audio
		// game.load.audio('sLaser', 'Audio/laser.wav');
		// game.load.audio('sMusic', 'Audio/noSleep.mp3');
    },

    create: function () {
    //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
    this.preloadBar.cropEnabled = false;

		// background image
		//this.bgImg = this.add.sprite(0, 0, 'imgStart');

    this.state.start('StartScreen');
    },
};
