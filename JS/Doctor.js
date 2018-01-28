var Doctor = function(game,  x, image) {
    var something = new Person(game, x, image);

    isoGroup.children[5].tint =  0xe06773;

    console.log(isoGroup.children[5]);

    var move = something.movePlayer;
    something.movePlayer = function (direction) {

        //remove red tiles

        move.call(this, direction);



        //add red tiles in front

        isoGroup.children[this.currentTile + 1].tint =  0xDCFBE6;




    };



    return something;
}