class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainMenuScene");
    }

    preload() {
        // load assets
        this.load.path = "./assets/";

        // load JSON (dialog)
        this.load.json('dialog', 'json/dialog.json');

        // load images
        this.load.image('textbox', 'img/textbox.png');
        this.load.image('robotOne', 'img/robotOne.png');
        this.load.image('robotTwo', 'img/robotTwo.png');
        this.load.image('menu_screen', 'img/menu_screen.png');
        this.load.image('ending_screen', 'img/ending_screen.png');
        this.load.image('gamePlay_background', 'img/gamePlay_background.png');

        // load audio
        this.load.audio('transition_sound', 'audio/transition_sound.wav');
        this.load.audio('ending_sound', 'audio/ending_sound.wav');
        this.load.audio('mainMenu_sound', 'audio/mainMenu_sound.wav'); 
        this.load.audio('dialog_sound', 'audio/dialog_sound.wav');

        // load bitmap font
        this.load.bitmapFont('the_font', 'font/font.png', 'font/font.xml');
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'menu_screen').setOrigin(0, 0);

        // create input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.loopingAudio = this.sound.add("mainMenu_sound");
        
        // Set looping to true in the sound config object and play the audio
        this.loopingAudio.play({
            loop: true
        });
    }

    update() {
        // wait for player input
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.stopAll();
            this.scene.start("instructionsScene");
        }
    }
}
