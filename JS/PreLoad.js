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
      game.load.image('p', 'Images/tiles/tile_purple.png');
      game.load.image('c', 'Images/tiles/tile_white.png');
      game.load.image('a', 'Images/greencurtain.png');

  		// Sprite sheets
      game.load.spritesheet('imgLevel1Button', 'Images/level1.png', 130, 122.101 , 2);
      game.load.spritesheet('imgLevel2Button', 'Images/level2.png', 130, 122.101 , 2);
      game.load.spritesheet('imgHomeButton', 'Images/home.png', 130, 122.101 , 2);
      game.load.spritesheet('imgRestartButton', 'Images/restart.png', 130, 122.101 , 2);
      game.load.spritesheet('doctor', 'Images/tiles/Sheets/doctor_sheet.png', 64, 74, 4);
      game.load.spritesheet('germ', 'Images/tiles/Sheets/germ_sheet.png', 64, 74, 4);
      game.load.spritesheet('patient1', 'Images/tiles/Sheets/patient_blonde_sheet.png', 64, 74, 4);

      //Hospital


      //furniture
      game.load.image('drawersSE', 'Images/furniture/drawersSE.png');

      //walls
      game.load.image('wallSW', 'Images/tiles/wallSW.png');

      //audio
      game.load.audio('menuScreenMusic', 'audio/intro.mp3');
      game.load.audio('step1',['audio/Step1.mp3','audio/Step1.ogg']);
      game.load.audio('step2',['audio/Step2.mp3','audio/Step2.ogg']);
    },

    create: function () {
      //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
      this.preloadBar.cropEnabled = false;

      this.state.start('StartScreen');
    },
};
