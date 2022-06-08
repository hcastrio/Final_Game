class FirstQuestion extends Phaser.Scene {
    constructor() {
        super("firstQuestionScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'firstquestion_screen').setOrigin(0, 0);
        
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            perm = perm + "a";
            this.scene.start("secondQuestionScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            perm = perm + "b";
            this.scene.start("secondQuestionScene");
        }
    }
}
