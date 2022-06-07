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
            color: '#000',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
          }
          this.add.text(centerX, centerY - 40, thirdRobot, questionConfig).setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.stopAll();
            this.sound.play('transition_sound');
            this.scene.start('creditsScene');
        }
    }
}
