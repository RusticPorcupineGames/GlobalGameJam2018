var cursorPos, cursor;

var cursors, wasd, mainPlayer;
var patients = 0;

people = [];

var angle = {
    min: 0,
    max: 0
};

var Game = function (game) {};

Game.Boot = function (game) {};

Game.Boot.prototype = {
    preload: function () {
        game.time.advancedTiming = true;
        game.debug.renderShadow = false;
        game.stage.disableVisibilityChange = true;
        game.plugins.add(new Phaser.Plugin.Isometric(game));
        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
        game.bgImg = game.add.sprite(0, 0, 'backgroundimg');
        game.bgImg.tint = 0xfdfd96;
        game.time.desiredFps = 60;
        game.input.tapRate = 500;
    },
    create: function () {
        people = [];
        patients = 0;
        game.Healed = false;
        game.Healed2 = false;

        this.grid = new Grid(game);

        game.moveCounter = new MoveCounter(game);
        game.killCounter = new KillCounter(game);
        this.homeButton = game.add.button(1050, 470, 'imgHomeButton2',
            function () {
                return this.goToHome();
            }, this, 1, 0);
        this.restartButton = game.add.button(50, 480,
            'imgRestartButton2',
            function () {
                return this.restartLevel();
            }, this, 1, 0);

        game.failReason = '';

        //add the angle change as a tween
        game.add.tween(angle).to({
                max: 360
            },
            5000, // Time duration
            "Linear",
            true,
            0, -1,
            false);

        cursorPos = new Phaser.Plugin.Isometric.Point3();
        this.putPeopleIn(game);
    },

    update: function () {
        if (game.Healed2) {
            this.state.start('FailScreen');
        }

        for (var i = 0; i < people.length; i++) {
            if (!people[i].isMainPlayer)
                people[i].update();
        }
        mainPlayer.update();

        if (!mainPlayer.isGerm) {
            if (game.moveCounter.update() == 0) {
                game.failReason = 'moves';
                this.state.start('FailScreen');
            }
        } else game.moveCounter.germUpdate();

        if (patients == 0) {
            this.state.start('EndScreen');
        }

        game.moveCounter.checkForTurn();

        if (game.moveCounter.resetFlag) {
            game.moveCounter.resetFlag = false;
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
        }

        if (isoGroup.children[mainPlayer.index].willHealYou) {
            game.failReason = 'doctor';
            if (!game.Healed) {
                mainPlayer.heal(this);
            }
        }
    },

    render: function () {
        game.debug.text(game.time.fps || '--', 2, 14, "#bbbbbb");
    },

    putPeopleIn: function (game) {
        game.wasd.w.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.UP);
        });

        game.wasd.s.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.DOWN);
        });

        game.wasd.a.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.LEFT);
        });

        game.wasd.d.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.RIGHT);
        });

        game.wasd.up.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.UP);
        });

        game.wasd.down.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.DOWN);
        });

        game.wasd.left.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.LEFT);
        });

        game.wasd.right.onDown.add(function () {
            for (var i = 0; i < people.length; i++) {
                people[i].pathfind();
            }
            mainPlayer.movePlayer(Directions.RIGHT);
        });

        game.input.onTap.add(function () {
            // bug fix to ensure mobile devices always update cursor position
            game.iso.unproject(game.input.activePointer.position,
                cursorPos);

            for (var index = 0; index < isoGroup.length; index++) {
                if (isoGroup.children[index].isoBounds.containsXY(
                        cursorPos.x, cursorPos.y)) {
                    if (mainPlayer.checkCanWalk(index)) {
                        if (index == mainPlayer.upIndex) {
                            for (var i = 0; i < people.length; i++) {
                                people[i].pathfind();
                            }
                            mainPlayer.movePlayer(Directions.UP);
                        } else if (index == mainPlayer.downIndex) {
                            for (var i = 0; i < people.length; i++) {
                                people[i].pathfind();
                            }
                            mainPlayer.movePlayer(Directions.DOWN);
                        } else if (index == mainPlayer.leftIndex) {
                            for (var i = 0; i < people.length; i++) {
                                people[i].pathfind();
                            }
                            mainPlayer.movePlayer(Directions.LEFT);
                        } else if (index == mainPlayer.rightIndex) {
                            for (var i = 0; i < people.length; i++) {
                                people[i].pathfind();
                            }
                            mainPlayer.movePlayer(Directions.RIGHT);
                        }
                    }
                }
            }
        }, this);

        var peopleArray = getPeopleLevel(game.levelSelected);

        for (var i = 0; i < peopleArray.length; i++) {
            let p;
            switch (peopleArray[i][2]) {
            case 'germ':
                p = new Germ(game, peopleArray[i][0], peopleArray[i][1],
                    peopleArray[i][3]);
                break;
            case 'patient':
                p = new Patient(game, peopleArray[i][0], peopleArray[i]
                    [1], peopleArray[i][3]);
                break;
            case 'doctor':
                p = new Doctor(game, peopleArray[i][0], peopleArray[i][
                    1
                ], peopleArray[i][3]);
                break;
            default:
                p = new Person(game, peopleArray[i][0], peopleArray[i][
                    1
                ], peopleArray[i][3]);
                break;
            }
            people.push(p);
        }

        //set one player to be active
        people[0].isMainPlayer = true;
        mainPlayer = people[0];
    },

    goToHome: function () {
        this.state.start('StartScreen');
    },

    restartLevel: function () {
        this.state.start('Game');
    }
};