class SecondQuestion extends Phaser.Scene {
    constructor() {
        super("secondQuestionScene");
    }

    create() {

        // adds background
        this.add.tileSprite(0, 0, 840, 600, 'secondquestion_screen').setOrigin(0, 0);
        
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {

            // for permutations 
            perm = perm + "c";

            // if they selected up and up
            if(perm === "ac") {

                thirdRobot = "Bob"; // new friend name

                description = "I love pineapple on pizza and dogs."; // new friend description
            }

            // if they selected down and up 
            else if(perm === "bc") { 

                thirdRobot = "John"; // new friend name

                description = "I love boba and dogs."; // new friend description
            }
            this.scene.start("newFriendScene"); // show new friend
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {

            // for permutations 
            perm = perm + "d";

            // if they selected up and down
            if(perm === "ad") {

                thirdRobot = "Mary"; // new friend name

                description = "I love pineapple on pizza and cats."; // new friend description
            } 
            
            // if they selected down and down
            else if(perm === "bd") {

                thirdRobot = "Jessica"; // new friend name

                description = "I love boba and cats."; // new friend description
            }
            this.scene.start("newFriendScene"); // show new friend
        }
        
    }
}
