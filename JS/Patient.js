var Patient = function(game,  x, image) {
    var something = new Person(game,  x, image);
    var apple = something.movePlayer;
    something.movePlayer = function (direction) {
        apple.call(this, direction);
        game.moveCounter.useMove();

    };

    var d = something.movePlayer;
    something.die = function (p) {
        d.call(this, p);
        var tween = game.add.tween(p);
        tween.to({
                isoZ: 500,
                alpha: 0
            },
            2500,
            Phaser.Easing.Linear.none, false);
        tween.start();

    };

    return something;
}








