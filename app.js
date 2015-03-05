var Game = {
  width: 320,
  height: 480,
  scaleValue: 0
}

Game.game = new Phaser.Game(Game.width, Game.height, Phaser.CANVAS, "scaling", { preload: preload, create: create } )

function preload() {
  this.load.image('bg', '/assets/bg.png');
}

function create() {
  var playGroup = this.game.add.group(),
      bg        = new Phaser.TileSprite(this.game, 0, 0, 300, 300, 'bg');

  resizeGame(this.game);

  playGroup.add(bg);
  playGroup.scale = new PIXI.Point(Game.scaleValue, Game.scaleValue);
  playGroup.position = new PIXI.Point((this.game.width / 2) - (playGroup.width / 2), 100);

  this.scale.pageAlignHorizontally = true;
}

function resizeGame(game) {
  var widthScale, heightScale;

  if(game.device.desktop) {
    height = window.innerHeight - 70;
    scale = height / Game.height;
    game.scale.setGameSize(Game.width * scale, window.innerHeight - 70);
    Game.scaleValue = scale;
  } else {
    game.scale.setGameSize(window.innerWidth, window.innerHeight);

    widthScale = window.innerWidth / Game.width;
    heightScale = window.innerHeight / Game.height;

    if(widthScale > heightScale) {
      Game.scaleValue = heightScale;
    } else {
      Game.scaleValue = widthScale;
    }
  }
}
