var game;

game = new Phaser.Game(1380, 680, Phaser.AUTO, 'phaserGame');

game.state.add('PreBoot', PreBoot);
game.state.add('PreLoad', PreLoad);
game.state.add('StartScreen', StartScreen);
game.state.add('FailScreen', FailScreen);
game.state.add('EndScreen', EndScreen);
game.state.add('Game', Game.Boot);
game.state.start('PreBoot');