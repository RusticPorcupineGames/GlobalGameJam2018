


var Person = function(game, x, image) {

    this.isMainPlayer = false;
    this.currentTile = x;

    this.oldTween;

    var myTilePosition = isoGroup.children[x]._isoPosition;

    isoGroup.children[x].hasAHuman = true;


    var person = game.add.isoSprite(myTilePosition.x, myTilePosition.y, 0, image, 0, isoGroup);
    person.anchor.setTo(-0.25,0.4);

    person.animations.add('up', [1], 10, true);
    person.animations.add('right', [2], 10, true);
    person.animations.add('left', [0], 10, true);
    person.animations.add('down', [3], 10, true);
    person.animations.play('down');




    this.update = function(){


        game.iso.topologicalSort(isoGroup);







    },



        this.doWalk = function(next){


            var nextTilePosition = isoGroup.children[next]._isoPosition;

            //switch control to a new human instead of working
            if(isoGroup.children[next].hasAHuman){

                debugger;

                for(var i = 0; i < people.length; i ++){


                    console.log(people[i].currentTile);
                    console.log(next);


                    if(people[i].currentTile == next){
                        mainPlayer = people[i];
                        return;
                    }



                }



            }


            isoGroup.children[this.currentTile].hasAHuman = false;
            isoGroup.children[next].hasAHuman = true;



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

       if(this.currentTile < 132){
           this.doWalk(this.currentTile + 12);
           person.animations.play('right');
       }

   },

   this.goLeft = function () {

        if(this.currentTile > 11){
            this.doWalk(this.currentTile - 12);
            person.animations.play('left');
        }


   },

    this.goUp = function () {

        if(this.currentTile%12 != 0){
            this.doWalk(this.currentTile - 1);
            person.animations.play('up');
        }

    },

    this.goDown = function () {
        if(this.currentTile%12 != 11){
            this.doWalk(this.currentTile + 1);
            person.animations.play('down');
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