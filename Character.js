class Character extends Phaser.Scene {
  constructor() {
    super("characterSelection");
  }
  preload(){
  }
  create() {
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);
    this.lefSideArrow = this.add.sprite(config.width/2 -100, 200, "leftSideArrow");
    this.lefSideArrow.flipX = true;
    this.lefSideArrow.setScale(2.5);
    this.rightSideArrow = this.add.sprite(config.width/2 +100, 200, "rightSideArrow");
    this.rightSideArrow.setScale(2.5);

    //TEXT
    this.pressenter = this.add.sprite(config.width/2, 300, "enter");
    this.pressenter.setScale(0.5);
    this.arrowText = this.add.sprite(config.width/2, 50, "arrowText");

    //GOTO NEXT SCENE
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    //OPTIONS
    this.optionsKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

    //ARROWS
    this.leftArrowKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.rightArrowKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    //PLAYERS
    this.robert1 = this.add.sprite(config.width/2 , 200, "robert1");
    this.robert2 = this.add.sprite(config.width - 100000, 200, "robert2");

    //ARRAYS
    this.place = 0;
    this.players = ["robert1", "robert2"];
    this.players2 = [this.robert1, this.robert2];
    this.textArray = [this.robertText1, this.robertText2];

  }
  update(){
    this.background.tilePositionX += 0.5;

    if(Phaser.Input.Keyboard.JustDown(this.leftArrowKey)){
      if(this.place == 0){
        return;
      }
      else{
        this.switchPlayerModelDown();
        this.place--;
      }
    }

    if(Phaser.Input.Keyboard.JustDown(this.rightArrowKey)){
      if(this.place == 1){
        return;
      }
      else{
        this.switchPlayerModelUp();
        this.place++;
      }
    }

    if(Phaser.Input.Keyboard.JustDown(this.startKey)){
      config.playermodel = this.players[this.place];
      this.scene.start("InformationScene");
    }
    if(Phaser.Input.Keyboard.JustDown(this.optionsKey)){
      this.scene.start("optionsScene");
    }
  }
  switchPlayerModelUp(){
    //GET PLAYER
    this.currentSelectedModel = this.players2[this.place];
    this.nextSelectedModel = this.players2[this.place + 1];

    //GET TEXT
    this.currentTextSelected = this.textArray[this.place];
    this.nextSelectedText = this.textArray[this.place + 1];

    //UPDATE PLAYER
    this.currentSelectedModel.x = 10000;
    this.nextSelectedModel.x = config.width / 2;

    //UPDATE TEXT
    this.currentTextSelected.x = 10000;
    this.nextSelectedText.x = config.width / 2;
  }
  switchPlayerModelDown(){
    //GET PLAYER
    this.currentSelectedModel = this.players2[this.place];
    this.nextSelectedModel = this.players2[this.place - 1];

    //GET TEXT
    this.currentTextSelected = this.textArray[this.place];
    this.nextSelectedText = this.textArray[this.place - 1];

    //UPDATE PLAYER
    this.currentSelectedModel.x = 10000;
    this.nextSelectedModel.x = config.width / 2;

    //UPDATE TEXT
    this.currentTextSelected.x = 10000;
    this.nextSelectedText.x = config.width / 2;
  }
}
