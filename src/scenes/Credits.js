class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'credits_screen').setOrigin(0, 0);
        
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.stopAll();
            this.sound.play('transition_sound');
            this.scene.start('gameOverScene');
        }
    }
}
