var isoGroup = [];

var Grid = function(game){
  isoGroup = game.add.group();

  this.grid = getLevel(2);

  // Add tiles to map - pretty awful hacked together function.
  // Size = size of tile. 12 is grid size supported.
  var size = 59;
  var i=0, j, tile;
  for (var xx = 0; xx < size*12; xx += size) {
    j=0;
    for (var yy = 0; yy < size*12; yy += size) {
      // Create a tile using the new game.add.isoSprite factory method at the specified position.
      // The last parameter is the group you want to add it to (just like game.add.sprite)
      tile = game.add.isoSprite(xx, yy, 0, this.grid[i][j], 1, isoGroup);
      tile.isoGroupIndex = (12*i)+j;
      j+=1;


    }

    i+=1;
  }

  // click event
  game.input.tapRate = 500;
  game.input.onTap.add(function () {
    isoGroup.forEach(function (tile) {
      if(tile.isoBounds.containsXY(cursorPos.x, cursorPos.y)){}
    });
  }, this);

  this.update = function(){
    isoGroup.forEach(function (tile) {
        //var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
        //game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
    });
  }
}
