class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    create() {

        // add background
        this.add.tileSprite(0, 0, 840, 600, 'instructions_screen').setOrigin(0, 0);
        
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {

            this.sound.stopAll();

            this.sound.play('transition_sound');

            this.scene.start('gamePlayScene');
        }
    }
}
