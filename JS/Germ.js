var Germ = function(game,  x, image) {
    var something = new Person(game,  x, image);
    var apple = something.die;
    something.die = function (p) {
        apple.call(this, p);
        var t = game.add.tween(p).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None);
        t.start();

    }

    return something;
}


