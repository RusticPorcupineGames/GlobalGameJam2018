class Doctor extends Person{

  constructor(game, initialIndex, image, patrol) {
    super(game, initialIndex, image, patrol);

    this.colorInFront(true);
  }

  doTint(t, setIt){
    if(t > -1 && t < isoGroup.children.length &&  isoGroup.children[t].isWalkable){
        if(setIt){
            isoGroup.children[t].tint =  0xe06773;
            isoGroup.children[t].willHealYou = true;
        } else{
            isoGroup.children[t].tint = 0xffffff;
            isoGroup.children[t].willHealYou = false;
        }
    }
  }

  colorInFront(setIt) {
      switch(this.direction){
          case Directions.DOWN:
              this.doTint(this.index + 1, setIt);
              this.doTint(this.index + 13, setIt);
              this.doTint(this.index - 11, setIt);
              this.doTint(this.index - 12, setIt);
              this.doTint(this.index + 12, setIt);
              break;
          case Directions.UP:
              this.doTint(this.index - 1, setIt);
              this.doTint(this.index - 13, setIt);
              this.doTint(this.index + 11, setIt);
              this.doTint(this.index - 12, setIt);
              this.doTint(this.index + 12, setIt);
              break;
          case Directions.LEFT:
              this.doTint(this.index - 12, setIt);
              this.doTint(this.index - 13, setIt);
              this.doTint(this.index - 11, setIt);
              this.doTint(this.index - 1, setIt);
              this.doTint(this.index + 1, setIt);
              break;
          case Directions.RIGHT:
              this.doTint(this.index + 12, setIt);
              this.doTint(this.index + 13, setIt);
              this.doTint(this.index + 11, setIt);
              this.doTint(this.index - 1, setIt);
              this.doTint(this.index + 1, setIt);
              break;
      }
  }

  infect(){
    return false;
  }

  movePlayer(direction){
    this.colorInFront(false); // CLEAN THIS UP!
    var response = super.movePlayer(direction);
    this.colorInFront(true);
    return response;
  }
}
