// BE STRIK
"use strict";

// game config
let config = {
    type: Phaser.AUTO,
    width: 840,
    height: 600,
    scene: [ MainMenu, GamePlay, GameOver, Credits, Instructions, FirstQuestion, SecondQuestion, NewFriend ]
};

const game = new Phaser.Game(config);

// globals
const centerX = game.config.width / 2;
const centerY = game.config.height / 2;
let keyUP, keyDOWN, keyRIGHT, keyLEFT, keySPACE;

let perm = ""
let thirdRobot = "";