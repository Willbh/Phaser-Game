var config = {
  width: 1428,
  height: 358,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  physics: {
    default: "arcade",
    arcade:{
      debug: true,
      debugShowVelocity: true
    }
  }
}


var game = new Phaser.Game(config);
