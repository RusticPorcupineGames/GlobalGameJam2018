var Patient = function(game,  x, image) {
    var something = new Person(game,  x, image);
    var apple = something.movePlayer;
    something.movePlayer = function (direction) {
        apple.call(this, direction);

        

    }

    return something;
}








