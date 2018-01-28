
var Patient = function(game,  x, image, patrol) {
    var something = new Person(game,  x, image, patrol);
    patients ++;
    var apple = something.movePlayer;
    something.movePlayer = function (direction) {
        if (this.isMainPlayer)
          game.moveCounter.useMove();
        return apple.call(this, direction);
    };

    var d = something.die;
    something.die = function (p) {
        patients --;

        var tween = game.add.tween(p);
        tween.to({
                isoZ: 500,
                alpha: 0
            },
            2500,
            Phaser.Easing.Linear.none, false);
        tween.start();

        var grave =  game.add.isoSprite(p._isoPosition.x, p._isoPosition.y, 0, 'grave', 0, isoGroup);
        grave.alpha = 0;
        grave.anchor.setTo(-0.25, 0.4);
        var tween1 = game.add.tween(grave);
        tween1.to(
            { alpha: 1 },
            1500,
            Phaser.Easing.Linear.none, false);
        tween1.start();

        isoGroup.children[this.currentTile].isWalkable = false;
        d.call(this, p);


    };

    return something;
}
