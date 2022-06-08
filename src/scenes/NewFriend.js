class NewFriend extends Phaser.Scene {
    constructor() {
        super("newFriendScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'gamePlay_background').setOrigin(0, 0);
        
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        let questionConfig = {
            fontFamily: 'system-ui ',
            fontSize: '42px',
            color: '#fff ',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
          }
          this.add.text(centerX, centerY - 40, "The new friend is " + thirdRobot, questionConfig).setOrigin(0.5);

          this.add.text(centerX, centerY, description, questionConfig).setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.stopAll();
            this.sound.play('transition_sound');
            this.scene.start('endingScene');
        }
    }
}
