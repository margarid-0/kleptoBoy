import { fase1 } from "./fase1.js"

export class start extends Phaser.Scene{
    constructor() {
        super({key: 'start'})
    }

    preload() {
        this.load.image('background', '/src/assets/fundo_start.png')
        this.load.spritesheet('playButton', '/src/assets/play_button.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.image('setas', '/src/assets/setas.png')

        
    }

    create() {
        this.add.image(500, 320, 'background')
        var button = this.add.sprite(500, 320, 'playButton', 0).setInteractive()
        button.on('pointerover', function(event){
            this.setFrame(1)
        })

        button.on('pointerout', function(event){
            this.setFrame(0)
        })

        button.on('pointerdown', function(event){
            this.scene.start('fase1')
        }, this)

        this.add.image(500, 520, 'setas').setScale(0.5)
    }

    update() {
        
    }


}