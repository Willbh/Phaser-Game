class Scene2 extends Phaser.Scene{
  constructor(){
    super("playGame");
  }

  create(){
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);
    config.score = 0;
    var scoreFormated = this.zeroPad(config.score, 6);
    this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE " + scoreFormated  , 16);

    //PLAYER
    this.player = this.physics.add.sprite(config.width/4 - 50, config.height/2 +50, config.playermodel);
    this.player.setGravityY(800);
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(60, 110, 100, 15);

    //CONTROLS
    //JUMP
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //GROUND
    this.ground = this.add.tileSprite(config.width /2, config.height, config.width, 130 , "ground");
    this.physics.add.existing(this.ground);
    this.ground.body.setSize(1500, 100, 50, 15);
    this.ground.body.immovable = true;

    //OBSTICALES
    //Collision Checking
    this.obsticales = this.add.group();
    //REGULAR SPIKE
    this.spike = this.physics.add.sprite(config.width - 50, config.height-87, "spike");
    this.spike.body.setSize(40, 100, 50, 15);
    this.spike.setScale(0.8);
    this.spike.body.immovable = true;
    //REGULAR SPIKE II
    this.spike2 = this.physics.add.sprite(config.width + 350, config.height-87, "spike");
    this.spike2.body.setSize(40, 100, 50, 15);
    this.spike2.setScale(0.8);
    this.spike2.body.immovable = true;
    //REGULAR SPIKE III
    this.spike3 = this.physics.add.sprite(config.width - 650, config.height-87, "spike");
    this.spike3.body.setSize(40, 100, 50, 15);
    this.spike3.setScale(0.8);
    this.spike3.body.immovable = true;
    //TRIPLE SPIKE
    this.triplespike = this.physics.add.sprite(config.width + 900, config.height - 87, "triplespike");
    this.triplespike.body.setSize(60, 100, 50, 15);
    this.triplespike.setScale(0.8);
    this.triplespike.body.immovable = true;
    //TRIPLE SPIKE II
    this.triplespike2 = this.physics.add.sprite(config.width + 1400, config.height - 87, "triplespike");
    this.triplespike2.body.setSize(60, 100, 50, 15);
    this.triplespike2.setScale(0.8);
    this.triplespike2.body.immovable = true;
    //UPSIDEDOWN REGULAR SPIKE
    this.uSpike = this.physics.add.sprite(config.width - 50, config.height - 320, "spike");
    this.uSpike.body.setSize(40, 100, 50, 15);
    this.uSpike.setScale(0.8);
    this.uSpike.body.immovable = true;
    this.uSpike.flipY = true;
    //UPSIDEDOWN REGULAR SPIKE II
    this.uSpike2 = this.physics.add.sprite(config.width - 350, config.height - 320, "spike");
    this.uSpike2.body.setSize(40, 100, 50, 15);
    this.uSpike2.setScale(0.8);
    this.uSpike2.body.immovable = true;
    this.uSpike2.flipY = true;
    //UPSIDEDOWN REGULAR SPIKE III
    this.uSpike3 = this.physics.add.sprite(config.width - 750, config.height - 320, "spike");
    this.uSpike3.body.setSize(40, 100, 50, 15);
    this.uSpike3.setScale(0.8);
    this.uSpike3.body.immovable = true;
    this.uSpike3.flipY = true;
    //UPSIDEDOWN REGULAR SPIKE IIII
    this.uSpike4 = this.physics.add.sprite(config.width - 1250, config.height - 320, "spike");
    this.uSpike4.body.setSize(40, 100, 50, 15);
    this.uSpike4.setScale(0.8);
    this.uSpike4.body.immovable = true;
    this.uSpike4.flipY = true;
    //UPSIDEDOWN REGULAR SPIKE IIIII
    this.uSpike5 = this.physics.add.sprite(config.width - 1750, config.height - 320, "spike");
    this.uSpike5.body.setSize(40, 100, 50, 15);
    this.uSpike5.setScale(0.8);
    this.uSpike5.body.immovable = true;
    this.uSpike5.flipY = true;
    //ADD ALL OBSTICALES HERE
    this.obsticales.add(this.spike);
    this.obsticales.add(this.spike2);
    this.obsticales.add(this.spike3);
    this.obsticales.add(this.uSpike);
    this.obsticales.add(this.uSpike2);
    this.obsticales.add(this.uSpike3);
    this.obsticales.add(this.uSpike4);
    this.obsticales.add(this.uSpike5);
    this.obsticales.add(this.triplespike);
    this.obsticales.add(this.triplespike2);

    //USE IN DEBUG TO DISPLAY if playing music or not
    //this.add.text(20, 20, '"' + config.activeMusic + '"', {font: "25px Arial", fill: "yellow"});
  }

  update(){
    this.timedEvent = this.time.addEvent({ delay: 2000, callback: this.updateScore(), callbackScope: this, repeat: 1 });

    //COLLIDERS
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.overlap(this.player, this.obsticales, this.playerDIE, null, this);

    //MOVING BACKGROUNDS
    this.background.tilePositionX += 0.5;
    this.ground.tilePositionX += 8;

    //CONTROLS
    if(this.spaceBar.isDown){
      this.player.body.velocity.y = -356;
    }

    this.moveObsticales();
  }
  moveObsticales(obsticale, spike){

    var speed = -500;

    this.spike.body.velocity.x = speed;
    this.spike2.body.velocity.x = speed;
    this.spike3.body.velocity.x = speed;
    this.uSpike.body.velocity.x = speed;
    this.uSpike2.body.velocity.x = speed;
    this.uSpike3.body.velocity.x = speed;
    this.uSpike4.body.velocity.x = speed;
    this.uSpike5.body.velocity.x = speed;
    this.triplespike.body.velocity.x = speed;
    this.triplespike2.body.velocity.x = speed;

    //RESETING
    if(this.spike.x < 0){
      this.spikeReachEnd();
    }
    if(this.spike2.x < 0){
      this.spike2ReachEnd();
    }
    if(this.spike3.x < 0){
      this.spike3ReachEnd();
    }

    if(this.triplespike.x < 0){
      this.tripleSpikeReachEnd();
    }
    if(this.triplespike2.x < 0){
      this.tripleSpike2ReachEnd();
    }

    if(this.uSpike.x < 0){
      this.uSpikeReachEnd();
    }
    if(this.uSpike2.x < 0){
      this.uSpike2ReachEnd();
    }
    if(this.uSpike3.x < 0){
      this.uSpike3ReachEnd();
    }
    if(this.uSpike4.x < 0){
      this.uSpike4ReachEnd();
    }
    if(this.uSpike5.x < 0){
      this.uSpike5ReachEnd();
    }
  }

  spikeReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.spike.x = config.width+400;
          this.spike.y = config.height-87;
        },
        loop: false
    })
  }
  spike2ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.spike2.x = config.width+400;
          this.spike2.y = config.height-87;
        },
        loop: false
    })
  }
  spike3ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.spike3.x = config.width+400;
          this.spike3.y = config.height-87;
        },
        loop: false
    })
  }

  uSpikeReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.uSpike.x = config.width+400;
          this.uSpike.y = config.height-320;
        },
        loop: false
    })
  }
  uSpike2ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.uSpike2.x = config.width+400;
          this.uSpike2.y = config.height-320;
        },
        loop: false
    })
  }
  uSpike3ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.uSpike3.x = config.width+400;
          this.uSpike3.y = config.height-320;
        },
        loop: false
    })
  }
  uSpike4ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.uSpike4.x = config.width+400;
          this.uSpike4.y = config.height-320;
        },
        loop: false
    })
  }
  uSpike5ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.uSpike5.x = config.width+400;
          this.uSpike5.y = config.height-320;
        },
        loop: false
    })
  }

  tripleSpikeReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.triplespike.x = config.width+400;
          this.triplespike.y = config.height-87;
        },
        loop: false
    })
  }
  tripleSpike2ReachEnd(){
    var rand = Phaser.Math.Between(10, 1000);
    this.time.addEvent({
        delay: rand,
        callback: ()=>{
          this.triplespike2.x = config.width+400;
          this.triplespike2.y = config.height-87;
        },
        loop: false
    })
  }


  updateScore(){
    config.score += 1;

    var scoreFormated = this.zeroPad(config.score, 6);
    this.scoreLabel.text = "SCORE " + scoreFormated;
  }

  zeroPad(number, size){
      var stringNumber = String(number);
      while(stringNumber.length < (size || 2)){
        stringNumber = "0" + stringNumber;
      }
      return stringNumber;
  }

  playerDIE(){
    this.scene.start("gameOverScene");
    scene.scene.remove("playGame"); //THIS STARTS AN ERROR WHICH IS NESECARY TO EXIT THE SCENE QUICKLY (DONT ASKI ME WHY)
  }
}
