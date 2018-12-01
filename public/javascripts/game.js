var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: '#a1f2ec',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 600 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  } 
};

var platforms;
var cursors;

var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('otherPlayer', 'assets/player-sprite/otherdude.png', {frameWidth: 32, frameHeight: 48 });
  this.load.image('star', 'assets/player-sprite/star_gold.png');
  this.load.spritesheet('dude', 'assets/player-sprite/dude.png', {frameWidth: 32, frameHeight: 48 });

  //background
  this.load.image('ground', 'assets/player-sprite/platform.png');
  this.load.image('background', 'assets/Magic-Cliffs-Environment/PREVIEWS/magic-cliffs.png');
  this.load.image('sky', 'assets/Magic-Cliffs-Environment/PNG/sky.png');
  this.load.image('clouds', 'assets/Magic-Cliffs-Environment/PNG/clouds.png');
}

function create() {
  var self = this;
  this.socket = io();

  this.add.image(800, 500, 'background').setScale(1);

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 538, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'clouds').setScale(.3, .2);
        platforms.create(50, 250, 'clouds').setScale(.7, .2);
        platforms.create(750, 220, 'clouds').setScale(.5, .2);

  this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

  this.otherPlayers = this.physics.add.group();
  this.socket.on('currentPlayers', function (players) {
    Object.keys(players).forEach(function (id) {
      if (players[id].playerId === self.socket.id) {
        addPlayer(self, players[id]);
      } else {
        addOtherPlayers(self, players[id]);
      }
    });
  });
  this.socket.on('newPlayer', function (playerInfo) {
    addOtherPlayers(self, playerInfo);
  });
  this.socket.on('disconnect', function (playerId) {
    self.otherPlayers.getChildren().forEach(function (otherPlayer) {
      if (playerId === otherPlayer.playerId) {
        otherPlayer.destroy();
      }
    });
  });
  this.socket.on('playerMoved', function (playerInfo) {
    self.otherPlayers.getChildren().forEach(function (otherPlayer) {
      if (playerInfo.playerId === otherPlayer.playerId) {
        otherPlayer.setRotation(playerInfo.rotation);
        otherPlayer.setPosition(playerInfo.x, playerInfo.y);
      }
    });
  });
  this.cursors = this.input.keyboard.createCursorKeys();

  this.blueScoreText = this.add.text(16, 16, '', { fontSize: '32px', fill: '#0000FF' });
  this.redScoreText = this.add.text(584, 16, '', { fontSize: '32px', fill: '#FF0000' });
  
  this.socket.on('scoreUpdate', function (scores) {
    self.blueScoreText.setText('Blue: ' + scores.blue);
    self.redScoreText.setText('Red: ' + scores.red);
  });

  this.socket.on('starLocation', function (starLocation) {
    if (self.star) self.star.destroy();
    self.star = self.physics.add.image(starLocation.x, starLocation.y, 'star');
    self.physics.add.overlap(self.dude, self.star, function () {
      this.socket.emit('starCollected');
    }, null, self);
  });
}

function addPlayer(self, playerInfo) {
  self.dude = self.physics.add.sprite(playerInfo.x, playerInfo.y, 'dude').setOrigin(0.5, 0.5);
  if (playerInfo.team === 'blue') {
    self.dude.setTint(0x0000ff);
  } else {
    self.dude.setTint(0xff0000);
  }

  self.dude.setBounce(0.2);
  self.physics.add.collider(self.dude, platforms);

}

function addOtherPlayers(self, playerInfo) {
  const otherPlayer = self.add.sprite(playerInfo.x, playerInfo.y, 'otherPlayer').setOrigin(0.5, 0.5);
  if (playerInfo.team === 'blue') {
    otherPlayer.setTint(0x0000ff);
  } else {
    otherPlayer.setTint(0xff0000);
  }
  otherPlayer.playerId = playerInfo.playerId;

  self.physics.add.collider(otherPlayer, platforms);
  self.otherPlayers.add(otherPlayer);
}

function update() {

let player = this.dude
  if (player) {
    if (this.cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }

    this.input.keyboard.on('keydown_UP', function (event) {
        player.setVelocityY(-400);
        jumpCount = 1;
        jumpTime = new Date().getTime();
    if (jumpCount === 1 && ((new Date().getTime() - jumpTime) < 1500)) {
        player.setVelocityY(-300);
        jumpCount = 0;
    }
});
  
    this.physics.world.wrap(player, 5);

    // emit player movement
    var x = player.x;
    var y = player.y;
    if (player.oldPosition && (x !== player.oldPosition.x || y !== player.oldPosition.y)) {
      this.socket.emit('playerMovement', { x: player.x, y: player.y });
    }
    // save old position data
    player.oldPosition = {
      x: player.x,
      y: player.y,
    };
  }
}