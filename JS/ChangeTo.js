// Used to change tiles.
changeTo = function(changeCode){

  this.code = changeCode;
  this.loadTexture(changeCode);

  switch(changeCode){
    case 'w':
      water.push(this);
    case 'c':
    case 'p':
    case 'd':
      this.anchor.set(0.5, 0);
      break;

    case 'drawersSE':
    case 'gh':
      this.anchor.set(0.5, 0.31);
      break;

    case 'bc':
    case 'gc':
      this.anchor.set(0.5, 0.20);
      break;

    case 'bc2':
    case 'gc2':
      this.anchor.set(0.5, 0.29);
      break;

    case 'bc3':
    case 'gc3':
      this.anchor.set(0.5, 0.38);
      break;
  }
}
