class Gameover extends Phaser.Scene{
  constructor(){
    super("gameOverScene");
  }
  create(){
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);
    this.gameOverLabel = this.add.bitmapText(config.width / 2 - 50, config.height / 2 - 80, "pixelFont", "GAME OVER", 40);
    this.gameOverLabel = this.add.bitmapText(config.width / 2 - 160, config.height / 2 , "pixelFont", "PRESS SPACE TO TRY AGAIN", 40);
    this.gameOverLabel = this.add.bitmapText(config.width / 2 - 160, config.height / 2 - 40, "pixelFont", "GREAT JOB! YOU GOT: " + config.score + " IN SCORE", 40);

    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  }
  update(){
        this.background.tilePositionX += 0.5;

        if(Phaser.Input.Keyboard.JustDown(this.startKey)){
          this.scene.start("bootGame");
        }
  }
}
