ar Selected = function(){
    var selected;
    var active = false;
    var highlightedNeighbours = [];

    this.isActive = function(){
      return active;
    };

    this.setInactive = function(){
      active = false;
    };

    this.setNeighbours = function(isoGroupIndex){
      highlightedNeighbours.push(isoGroupIndex);
    };

    this.checkNeighbours = function(isoGroupIndex){
      return highlightedNeighbours.includes(isoGroupIndex);
    };

    this.clearNeighbours = function(isoGroupIndex){
       highlightedNeighbours = [];
    };

    this.get = function(){
      return active ? selected : false;
    };

    this.setToTile = function(tile){
      selected = tile;
      active = true;
    };

    this.getPos = function(){
      return {
        x: selected.x,
        y: selected.y
      };
    };
}
