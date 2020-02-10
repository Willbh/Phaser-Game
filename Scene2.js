class Scene2 extends Phaser.Scene{
  constructor(){
    super("playGame");
  }

  create(){
    //BACKGROUND
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    //PLAYER
    this.player = this.physics.add.sprite(config.width/4 - 50, config.height/2 + 50, "player");
    this.player.setGravityY(800);
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(70, 120, 50, 15);

    //CONTROLS
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //GROUND
    this.ground = this.add.tileSprite(config.width /2, config.height, config.width, 130 , "ground");
    this.physics.add.existing(this.ground);
    this.ground.body.setSize(1500, 100, 50, 15);
    this.ground.body.immovable = true;

    //OBSTICALES
    this.spike = this.physics.add.sprite(config.width - 50, config.height-100, "spike");
    this.spike.body.setSize(90, 100, 50, 15);


    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
  }

  update(){
    //COLLIDERS
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.player, this.spike);

    //MOVING BACKGROUNDS
    this.background.tilePositionX += 0.5;
    this.ground.tilePositionX += 1;

    //CONTROLS
    if(this.spaceBar.isDown){
      this.player.body.velocity.y = -356;
    }

    this.moveSpike(this.spike, 1);
  }
  moveSpike(spike){
    this.spike.x -= 2;
    if(this.spike.x < 0){
      this.onEvent(spike);
    }
  }
  onEvent (spike){
      spike.x = config.width(delay: 500);
      spike.y = config.height-100(delay: 500);    
  }
}
