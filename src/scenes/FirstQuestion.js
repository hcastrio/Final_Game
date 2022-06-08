class FirstQuestion extends Phaser.Scene {
    constructor() {
        super("firstQuestionScene");
    }

    create() {

        // adds background
        this.add.tileSprite(0, 0, 840, 600, 'firstquestion_screen').setOrigin(0, 0);
        
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {

        // pressed up key
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            perm = perm + "a"; // for permutations 
            this.scene.start("secondQuestionScene"); // next scene
        }

        // pressed down key
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            perm = perm + "b"; // for permutations 
            this.scene.start("secondQuestionScene"); // next scene
        }
    }
}
