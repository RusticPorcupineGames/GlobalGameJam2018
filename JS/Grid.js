var isoGroup = [];

var Grid = function (game) {
  isoGroup = game.add.group();
  this.grid = getLevel(game.levelSelected);

  // Add tiles to map - pretty awful hacked together function.
  // Size = size of tile. 12 is grid size supported.
  var size = 59;
  var i = 0, j, tile;

  for (var xx = 0; xx < size * 12; xx += size) {
    j = 0;
    for (var yy = 0; yy < size * 12; yy += size) {
      var yax = 0;

      switch (this.grid[i][j]) {
        case 'drawersSE':
          yax = 52; //x axis the y axis
          break;
        case 'tilepurpledoorNW':
        case 'tilepurpledoorNWwallLHS':
        case 'tilepurpledoorNWwallRHS':
        case 'tilepurpleemergencydoorSW':
          yax = 74;
          break;
        case 'b':
        case 'd':
          yax = 30;
        default:
      }

      // Create a tile using the new game.add.isoSprite factory method at the specified position.
      // The last parameter is the group you want to add it to (just like game.add.sprite)
      tile = game.add.isoSprite(xx - yax, yy - yax, 0, this.grid[i][j], 1, isoGroup);

      switch (this.grid[i][j]) {
        case 'p':
        case 'drawersSE':
        case 'tilepurpledoorNW':
        case 'tilepurpledoorNWwallLHS':
        case 'tilepurpledoorNWwallRHS':
        case 'b':
        case 'd':
        case 'e':
          tile.isWalkable = false;
          break;
        default:
          tile.isWalkable = true;
      }
      tile.isoGroupIndex = (12 * i) + j;
      j += 1;
    }
    i += 1;
  }

  // click event
  game.input.tapRate = 500;
  game.input.onTap.add(function () {
    isoGroup.forEach(function (tile) {
      if (tile.isoBounds.containsXY(cursorPos.x, cursorPos.y)) { }
    });
  }, this);

  this.update = function () {
    isoGroup.forEach(function (tile) {
      //var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
      //game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
    });
  }
}
