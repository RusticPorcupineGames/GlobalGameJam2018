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
    let tile;
    for (var yy = 0; yy < size * 12; yy += size) {
      // Create a tile using the new game.add.isoSprite factory method at the specified position.
      // The last parameter is the group you want to add it to (just like game.add.sprite)
      tile = game.add.isoSprite(xx, yy, 0, this.grid[i][j], 1, isoGroup);
      //tile = game.add.isoSprite(xx - 100, yy - 100, 0, this.grid[i][j], 1, isoGroup);
      //tile.iso.anchor.setTo(0.5, 0.62)
      //tile.anchor.setTo(0, 0)

      switch (this.grid[i][j]) {
        case 'p':
        case 'drawersSE':
        case 'tilepurpledoorNW':
        case 'tilepurpledoorNWwallLHS':
        case 'tilepurpledoorNWwallRHS':
        case 'tilepurpleemergencydoorSW':
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
}
