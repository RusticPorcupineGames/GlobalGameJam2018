var PreBoot = {
	preload: function() {
		// Load image for start menu
		game.load.image('imgStart', 'Images/start.png');

    // and loading bar..
    game.load.image('preloaderBar', 'Images/load2.png');
    game.load.image('preloaderBarGray', 'Images/load1.png');
	},

	create: function () {
    this.state.start('PreLoad');
  },
}
