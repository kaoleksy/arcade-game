"use strict";
//the value of enemy speed that will be random
const speed = [150, 300, 500, 550];

var Enemy = function (x, y) {
    this.x = x;
    this.y = y;
    this.speed = speed[Math.floor(Math.random() * speed.length)];
    this.sprite = 'images/enemy-bug.png';
    console.log(this.speed);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    if (this.x > 500) {
        this.x = -100;
    } else {
        this.x += this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';

};

Player.prototype.update = function (dt) {
    return this.y;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
    switch (key) {
        case "right":
            if (this.x < 400) {
                this.x += 100;
            }
            break;
        case "left":
            if (this.x > 0) {
                this.x -= 100;
            }
            break;
        case "up":
            if (this.y > -35) {
                this.y -= 85;
            }
            break;
        case "down":
            if (this.y < 390) {
                this.y += 85;
            }
            break;
    }
};

//Create enemies
//let enemy11   = new Enemy(-400, 225);
let enemy12   = new Enemy(-300, 225);
let enemy21   = new Enemy(-100, 145);
let enemy22   = new Enemy(-150, 145);
let enemy31 = new Enemy(0, 60);
let enemy32 = new Enemy(-50, 60);


const allEnemies = [enemy12, enemy21, enemy22, enemy31, enemy32];


const player = new Player(200, 315);


document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
