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

  		// Images
      game.load.image('g', 'Images/tiles/grass.png');
      game.load.image('p', 'Images/tiles/placeholder.png');
      game.load.image('c', 'Images/tiles/concrete.png');

  		// Sprite sheets
      game.load.spritesheet('imgStartButton', 'Images/startButton.png', 193, 67);
      //game.load.spritesheet('doctor', 'Images/tiles/Sheets/doctor_sheet.png', 64, 74, 4);

      //Hospital
      game.load.image('doctor', 'images/doctor.png');

      //furniture
      game.load.image('drawersSE', 'Images/furniture/drawersSE.png');
    },

    create: function () {
      //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
      this.preloadBar.cropEnabled = false;

      this.state.start('StartScreen');
    },
};
