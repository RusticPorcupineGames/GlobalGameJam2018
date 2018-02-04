class Patient extends Person{
    constructor(game, initialIndex, image, patrol) {
      super(game, initialIndex, image, patrol);
      patients++; // AWFUL CODE!!!
    }

    die(){
      let gravePosition = isoGroup.children[this.index];

      let tween = this.game.add.tween(this.sprite);
      tween.to({
              isoZ: 500,
              alpha: 0
          },
          2500,
          Phaser.Easing.Linear.none, false);
      tween.start();

      let grave = game.add.isoSprite(gravePosition._isoPosition.x, gravePosition._isoPosition.y, 0, 'grave', 0, isoGroup);
      grave.alpha = 0;
      grave.anchor.setTo(-0.1, -0.3);

      let tween1 = game.add.tween(grave);
      tween1.to(
          { alpha: 1 },
          1500,
          Phaser.Easing.Linear.none, false);
      tween1.start();

      isoGroup.children[this.index].isWalkable = false;

      super.die();
    }

    movePlayer(direction){
      if (this.isMainPlayer)
        this._game.moveCounter.useMove();
      return super.movePlayer(direction);
    }
}
