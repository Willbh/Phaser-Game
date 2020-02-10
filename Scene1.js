class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload(){
    //MAIN
    this.load.image("background", "assets/images/background.jpg");
    this.load.image("player", "assets/images/player1.png");
    this.load.image("ground", "assets/images/ground.png");

    //OBSTICALES
    this.load.image("spike", "assets/obsticales/spike.png");
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
