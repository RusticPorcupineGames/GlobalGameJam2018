var FailScreen = {
    preload: function () {},
    create: function () {
        var style = {
            font: "32px Arial",
            fill: "#ffffff",
            align: "center"
        };

        this.logo = game.add.sprite(game.world.centerX, 100, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);

        var endText;
        switch (game.failReason) {
        case 'moves':
            endText = "Your moves have run out!";
            break;
        case 'doctor':
            endText = "You have been healed by the doctor!";
            break;
        }

        game.add.text(300, 200, endText, style);
        game.add.text(300, 250, "Plan your intial infection carefully to infect all the patients", style);
        this.restartButton = game.add.button(game.world.centerX - 100, game.world.centerY + 50,
            'imgRestartButton',
            function () {
                return this.restartLevel(game.levelSelected);
            }, this, 1, 0);
        this.restartButton.anchor.setTo(0.5, 0.5);

        this.homeButton = game.add.button(game.world.centerX + 100, game.world.centerY + 50, 'imgHomeButton',
            function () {
                return this.startScreen();
            }, this, 1, 0);
        this.homeButton.anchor.setTo(0.5, 0.5);

    },
    update: function () {},

    restartLevel: function (level) {
        game.levelSelected = level;
        this.state.start('Game');
    },

    startScreen: function () {
        this.state.start('StartScreen');
    }
};