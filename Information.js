class Information extends Phaser.Scene{
  constructor(){
    super("InformationScene");
  }

  create(){
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);
    this.board = this.add.sprite(config.width / 2, config.height / 2 - 30, "board");
    this.board.setScale(0.7);
    this.pressenter = this.add.sprite(config.width/2, 320, "enter");
    this.pressenter.setScale(0.5);
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update(){
    this.background.tilePositionX += 0.5;

    if(Phaser.Input.Keyboard.JustDown(this.startKey)){
      this.scene.start("playGame");
    }
  }
}
