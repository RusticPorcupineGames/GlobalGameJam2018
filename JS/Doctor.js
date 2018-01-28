var Doctor = function(game,  x, image) {
    var something = new Person(game, x, image);



    // this.colorInFront = function (pos) {
    //     var front = pos + 1;
    //     console.log(front);
    //
    //     isoGroup.children[front].tint =  0xe06773;
    // };
    // // isoGroup.children[5].tint =  0xe06773;
    //
    // console.log(this.currentTile)
    // this.colorInFront(this.currentTile);

    var move = something.movePlayer;
    something.movePlayer = function (direction) {

        //remove red tiles

        move.call(this, direction);



        //add red tiles in front

        isoGroup.children[this.currentTile + 1].tint =  0xDCFBE6;




    },


    // this.colorInFront = function(){
    //     var front = this.currentTile + 1;
    //
    //
    //     isoGroup.children[front].tint =  0xe06773;
    // },



    something.infect = function () {
        return false;
    };





    return something;
}