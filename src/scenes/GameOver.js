class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'ending_screen').setOrigin(0, 0);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.loopingAudio = this.sound.add("ending_sound");
        // Set looping to true in the sound config object and play the audio
        this.loopingAudio.play({
            loop: true
        });
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            perm = "";
            this.sound.stopAll();
            this.sound.play('transition_sound');
            this.scene.start('mainMenuScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            perm = "";
            this.sound.stopAll();
            this.sound.play('transition_sound');
            this.scene.start('gamePlayScene');
        }
    }
}
