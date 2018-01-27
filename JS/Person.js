


var Person = function(game, x, image) {

    this.isMainPlayer = false;
    this.currentTile = x;

    this.oldTween;

    var myTilePosition = isoGroup.children[x]._isoPosition;

var stack = [];


    var person = game.add.isoSprite(myTilePosition.x, myTilePosition.y, 0, image, 0, isoGroup);
    person.anchor.setTo(-0.25,0.4);

var flag = true;

    this.update = function(){


        game.iso.topologicalSort(isoGroup);


        if(stack.length > 0 && flag) {
            var f = stack.pop();
            flag = false;

            f.start().onComplete.add(function () {
                flag = true;
            });

        }

    },


        this.doWalk = function(next){


            var nextTilePosition = isoGroup.children[next]._isoPosition;

            this.currentTile = next;

            var tween = game.add.tween(person);

            tween.to({ isoZ: 0, isoX: (nextTilePosition.x), isoY: (nextTilePosition.y) },
                200,
                Phaser.Easing.Linear.none,             false          ).to(             { isoZ: 0 },
                200,              Phaser.Easing.Linear.none,              false         );


            if(this.oldTween != undefined && this.oldTween.isRunning){
                this.oldTween.chain(tween);
            }

            this.oldTween = tween;
            tween.start();

        },

   this.goRight = function(){
      var next = this.currentTile + 12;
       if(isoGroup.children[next].isWalkable && this.currentTile < 132){
           this.doWalk(next);
       }

   },

   this.goLeft = function () {
      var next = this.currentTile - 12;
        if(isoGroup.children[next].isWalkable && this.currentTile > 11){
            this.doWalk(next);
        }


   },

    this.goUp = function () {
      var next = this.currentTile - 1;
      if(isoGroup.children[next].isWalkable && this.currentTile%12 != 0){
          this.doWalk(next);
      }

    },

    this.goDown = function () {
      var next = this.currentTile + 1;
        if(isoGroup.children[next].isWalkable && this.currentTile%12 != 11){
            this.doWalk(next);
        }

    },


    this.movePlayer = function(direction){
        switch(direction){
            case 'u':
                this.goUp();
                break;
            case 'd':
                this.goDown();
                break;
            case 'l':
                this.goLeft();
                break;
            case 'r':
                this.goRight();
                break;


        }



    }


}
