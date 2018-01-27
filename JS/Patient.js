var Patient = function(game,  x, image) {
    var something = new Person(game,  x, image);
    var apple = something.movePlayer;
    something.movePlayer = function (direction) {
        game.moveCounter.useMove();
        apple.call(this, direction);


    };

    var d = something.die;
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








