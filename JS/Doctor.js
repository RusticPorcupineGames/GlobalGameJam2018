var Doctor = function(game,  x, image, patrol) {
    var something = new Person(game, x, image, patrol);

    var doTint = function (t, setIt) {
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


    var colorInFront = function (setIt) {
        switch(something.direction){
            case 'd':
                doTint(something.currentTile + 1, setIt);
                doTint(something.currentTile + 13, setIt);
                doTint(something.currentTile - 11, setIt);
                break;
            case 'u':
                doTint(something.currentTile - 1, setIt);
                doTint(something.currentTile - 13, setIt);
                doTint(something.currentTile + 11, setIt);
                break;
            case 'l':
                doTint(something.currentTile - 12, setIt);
                doTint(something.currentTile - 13, setIt);
                doTint(something.currentTile - 11, setIt);
                break;
            case 'r':
                doTint(something.currentTile + 12, setIt);
                doTint(something.currentTile + 13, setIt);
                doTint(something.currentTile + 11, setIt);
                break;

        }

    }

    colorInFront(true);

    var move = something.movePlayer;
    something.movePlayer = function (direction) {

        colorInFront(false);

        var r = move.call(this, direction);

        colorInFront(true);

        return r;

    }

    something.infect = function () {
        return false;
    };

    return something;
}
