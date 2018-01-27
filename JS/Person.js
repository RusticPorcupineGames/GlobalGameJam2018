var Person = function(game, x, y, image) {

    this.isMainPlayer = false;

    var person = game.add.isoSprite(x, y, 0, image, 0, isoGroup);
    person.anchor.setTo(0.5, 0.5);

    game.physics.isoArcade.enable(person);


    


    this.update = function(){
        // Move the player at this speed.
        var speed = 100;

        if(this.isMainPlayer) {

            if (cursors.up.isDown || wasd.w.isDown) {
                person.body.velocity.y = -speed;
            }
            else if (cursors.down.isDown || wasd.s.isDown) {
                person.body.velocity.y = speed;
            }
            else {
                person.body.velocity.y = 0;
            }

            if (cursors.left.isDown || wasd.a.isDown) {
                person.body.velocity.x = -speed;
            }
            else if (cursors.right.isDown || wasd.d.isDown) {
                person.body.velocity.x = speed;
            }
            else {
                person.body.velocity.x = 0;
            }
        }else {
            this.walkAround();
        }



    },

    this.walkAround = function(){
        //Overwrite ?
    }



}