var isoGroup, water = [];
var selected = new Selected();
var ui;

var Grid = function(game){
  isoGroup = game.add.group();
  ui = new UI();

  this.grid = [
    ['w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'g', 'g', 'g', 'g', 'g', 'w'],
    ['w', 'd', 'g', 'g', 'g', 'd', 'w'],
    ['w', 'gh', 'd', 'g', 'd', 'bh', 'w'],
    ['w', 'd', 'g', 'g', 'g', 'd', 'w'],
    ['w', 'g', 'g', 'g', 'g', 'g', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w']];

  // Add tiles to map
  var size = 76;
  var i=0, j, tile;
  for (var xx = 0; xx < size*7; xx += size) {
    j=0;
    for (var yy = 0; yy < size*7; yy += size) {
      // Create a tile using the new game.add.isoSprite factory method at the specified position.
      // The last parameter is the group you want to add it to (just like game.add.sprite)
      tile = game.add.isoSprite(xx, yy, 0, this.grid[i][j], 1, isoGroup);
      tile.isoGroupIndex = (7*i)+j;
      tile.changeTo = changeTo;
      tile.changeTo(this.grid[i][j]);

      j+=1;
    }
    i+=1;
  }

  // click event
  game.input.tapRate = 500;
  game.input.onTap.add(function () {
    var nothingClicked = true;

    if (!ui.isBeingUsed()){
      ui.clear();
      selected.clearNeighbours();

      game.iso.unproject(game.input.activePointer.position, cursorPos); // bug fix to ensure mobile devices always update cursor position

      isoGroup.forEach(function (tile) {
        var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
        if(inBounds){
          nothingClicked = false;
          selected.setToTile(tile);

          tile.tint = game.turn.tint();
          ui.addPopUp(tile);
        }
      });
      if (nothingClicked) {
        selected.setInactive();
      }
    }
  }, this);

  this.update = function(){
    // Unselected/ not-neighbour tiles allow scroll over animations.
    isoGroup.forEach(function (tile) {
      if ((tile !== selected.get()) && !selected.checkNeighbours(tile.isoGroupIndex)){
        var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
        if (!tile.selected && inBounds && !ui.isBeingUsed()) {
          tile.selected = true;
          game.add.tween(tile).to({ isoZ: 12 }, 200, Phaser.Easing.Quadratic.InOut, true);
        }
        else if (!inBounds) {
          tile.tint = 0xffffff;

          if (tile.selected){
            tile.selected = false;
            game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
          }
        }
      }
    });

    // Wobble water tiles
    water.forEach(function (w) {
        w.isoZ = (-2 * Math.sin((game.time.now + (w.isoX * 7)) * 0.004)) + (-1 * Math.sin((game.time.now + (w.isoY * 8)) * 0.005));
        w.alpha = Phaser.Math.clamp(1 + (w.isoZ * 0.05), 0.2, 1);
    });
  }
}
