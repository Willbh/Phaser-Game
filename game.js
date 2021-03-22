var height = 358;
var width = window.outerWidth;

var config = {
  width: width,
  height: height,
  playermodel: "robert1", //just base if something in characterSelection goes wrong
  score: 0,
  activeMusic: true,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2, Character, Options, Information, Gameover],
  physics: {
    default: "arcade",
    arcade:{
      debug: false,
      debugShowVelocity: false
    }
  }
}

var game = new Phaser.Game(config);
