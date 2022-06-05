class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {
        
        // add text
        this.add.text(centerX, centerY - 32, 'The End', {fontSize: '100px'}).setOrigin(0.5);
        this.add.text(centerX, centerY + 42, 'Press <- to Main Menu', {fontSize: '40px'}).setOrigin(0.5);
        this.add.text(centerX, centerY + 88, 'Press -> to Play Again', {fontSize: '40px'}).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.sound.play('transition_sound');
            this.scene.start('mainMenuScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.sound.play('transition_sound');
            this.scene.start('gamePlayScene');
        }
    }
}
