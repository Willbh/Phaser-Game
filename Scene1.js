class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload(){
    //MAIN
    this.load.image("background", "assets/images/background.jpg");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("menutext", "assets/images/text.png");
    this.load.image("enter", "assets/images/press-enter.png");
    this.load.image("board", "assets/images/board.png");
    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

    //OPTIONS IMAGES
    this.load.image("musicON", "assets/images/MusicON.png");
    this.load.image("musicOFF", "assets/images/MusicOFF.png");

    //ARROWS AND MISC FOR CHARACTERSELECTION
    this.load.image("leftSideArrow", "assets/images/arrow.png");
    this.load.image("rightSideArrow", "assets/images/arrow.png");
    this.load.image("arrowText", "assets/images/arrowText.png")
    this.load.image("robertText1", "assets/images/robertText1.png");
    this.load.image("robertText2", "assets/images/robertText2.png");

    //PLAYERS
    this.load.image("player", "assets/players/player.jpg");
    this.load.image("robert1", "assets/players/robert1.png");
    this.load.image("robert2", "assets/players/robert2.png");

    //OBSTICALES
    this.load.image("spike", "assets/obsticales/spike.png");
    this.load.image("triplespike", "assets/obsticales/spike2.png");
  }
  create() {
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    //TEXT
    this.menutext = this.add.sprite(config.width/2, 100, "menutext");
    this.pressenter = this.add.sprite(config.width/2, 300, "enter");
    this.pressenter.setScale(0.5);

    //GOTO NEXT SCENE
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    //OPTIONS
    this.optionsKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
  }
  update(){
    this.background.tilePositionX += 0.5;

    if(Phaser.Input.Keyboard.JustDown(this.startKey)){
      this.scene.start("characterSelection");
    }
    if(Phaser.Input.Keyboard.JustDown(this.optionsKey)){
      this.scene.start("options")
    }
  }
}
