class FirstQuestion extends Phaser.Scene {
    constructor() {
        super("firstQuestionScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'gamePlay_background').setOrigin(0, 0);
        
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        let questionConfig = {
            fontFamily: 'system-ui ',
            fontSize: '42px',
            color: '#000',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
          }
          this.add.text(centerX, centerY - 40, 'Smart?', questionConfig).setOrigin(0.5);
          this.add.text(centerX, centerY + 40, 'Average?', questionConfig).setOrigin(0.5);  
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
