
let w , h;

function resizeScreen() {
   w = $(window).width();
   h = $(window).height();
   console.log(w + '***' + h);
}
resizeScreen(); // on load
$(window).resize(resizeScreen); // on window resize


let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let platforms;
// let cursors;

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', '../images/staff/sky.png');
    this.load.image('ground', '../images/staff/platform.png');
    this.load.image('star', '../images/staff/star.png');
    this.load.image('bomb', '../images/staff/bomb.png');
    this.load.spritesheet('dude', '../images/green-dragon/test_strip3.png',{ frameWidth: 220, frameHeight: 90 });
}

function create ()
{
    // if(w > 800)
    // this.add.image(500,300, 'sky');
    // else
    this.add.image(500,300, 'sky');


    platforms = this.physics.add.staticGroup();

    platforms.create(400, h- h/7, 'ground').setScale(Math.round(w/200)).refreshBody();

    player = this.physics.add.sprite(200, 50, 'dude');

player.setBounce(0.2);
player.setCollideWorldBounds(true);

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
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1
});

cursors = this.input.keyboard.createCursorKeys();

this.physics.add.collider(player, platforms);
}

function update ()
    {
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        } 
}