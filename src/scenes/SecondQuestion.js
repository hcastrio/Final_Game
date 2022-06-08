class SecondQuestion extends Phaser.Scene {
    constructor() {
        super("secondQuestionScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'secondquestion_screen').setOrigin(0, 0);
        
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            perm = perm + "c";
            if(perm === "ac") {
                thirdRobot = "Bob";
                description = "I love pineapple on pizza and dogs.";
            } else if(perm === "bc") {
                thirdRobot = "John";
                description = "I love boba and dogs.";
            }
            this.scene.start("newFriendScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            perm = perm + "d";
            if(perm === "ad") {
                thirdRobot = "Mary";
                description = "I love pineapple on pizza and cats.";
            } else if(perm === "bd") {
                thirdRobot = "Jessica";
                description = "I love boba and cats.";
            }
            this.scene.start("newFriendScene");
        }
        
    }
}
