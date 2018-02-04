class Germ extends Person {
    constructor(game, initialIndex, image, patrol){
      super(game, initialIndex, image, patrol);
      this.isGerm = true; // ####### bad code
    }

    die(){
      super.die();
      var t = this.game.add.tween(this.sprite).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None);
      t.start();
    }

    movePlayer(direction){
      if (this.isMainPlayer)
        this.game.moveCounter.useGermMove();
      return super.movePlayer(direction);
    }
}
