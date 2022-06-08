// Game Name: Robot Friends
// Collaborators: Horacio Castillo Del Rio, Ethan Herrera, and Matthew Herrera
// Completed 06/07/2022
// Creative Tilt:
//            Our art and sound were all custom made and used permutations, all related to our game and help the players get immersed into
//            the journey of helping Freddie and Jose.

// BE STRIK
"use strict";

// game config
let config = {
    type: Phaser.AUTO,
    width: 840,
    height: 600,
    scene: [ MainMenu, GamePlay, GameOver, Credits, Instructions, FirstQuestion, SecondQuestion, NewFriend, Ending ]
};

const game = new Phaser.Game(config);

// globals
const centerX = game.config.width / 2;
const centerY = game.config.height / 2;
let keyUP, keyDOWN, keyRIGHT, keyLEFT, keySPACE;

let perm = ""
let thirdRobot = "";
let description = "";
