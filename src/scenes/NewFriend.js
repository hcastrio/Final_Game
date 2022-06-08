class NewFriend extends Phaser.Scene {
    constructor() {
        super("newFriendScene");
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'newFriend_screen').setOrigin(0, 0);
        
        // define keys
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        let questionConfig = {
            fontFamily: 'dpcomic',
            fontSize: '40px',
            color: '#fff ',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

          this.add.text(centerX + 70, centerY - 50 , thirdRobot, questionConfig).setOrigin(0.5);

          this.add.text(centerX - 8 , centerY + 114, description, questionConfig).setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {

            this.sound.play('transition_sound');

            this.scene.start('endingScene');
        }
    }
}
