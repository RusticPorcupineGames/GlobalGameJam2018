var FailScreen = {
    preload : function() {},
    create : function() {
      var style = { font: "32px Arial", fill: "#ffffff", align: "center" };
      game.add.text(300, 200, "Your moves have run out!", style);
      game.add.text(300,250, "Plan your intial infection carefully to infect all the patients", style);
    },
    update : function() {},
};
