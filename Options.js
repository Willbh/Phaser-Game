class Options extends Phaser.Scene{
  constructor(){
    super("optionsScene");
  }
  create(){
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    //IMAGES
    this.musicON = this.add.sprite(config.width / 2, config.height / 2, "musicON");
    this.musicOFF = this.add.sprite(config.width / 2, config.height / 2, "musicOFF");

    //ARRAYS
    //MUSIC
    this.playMusic = [true, false];
    this.musicPlace = 0;

    //CONTORLS
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this.musicKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
  }
  update(){
    this.background.tilePositionX += 0.5;

    if(Phaser.Input.Keyboard.JustDown(this.musicKey)){
      if(this.musicPlace == 0){
        this.musicPlace++;
      }
      else{
        this.musicPlace--;
      }
    }

    if(Phaser.Input.Keyboard.JustDown(this.startKey)){
      config.activeMusic = this.playMusic[this.musicPlace];
      this.scene.start("playGame");
    }
  }
}
