import cax from 'cax'
import Cylinder from '../../src/index'

const stage = new cax.Stage(700, 420, '#canvasCtn')



const colors = ['#2781BD', '#22A387', '#9ABC5B', '#F59D1F', '#BF3A2D']

function random() {
    stage.empty()
    for (let i = 0; i < 5; i++) {
        let cy = new Cylinder(60, 200, Math.random(), colors[i])
        cy.x = 100 + 100 * i
        cy.y = 100

        let text = new cax.Text(Math.round(cy.value * 100) + '%', {
            font: '20px Arial',
            color: 'white'
        })
        text.x = cy.x + cy.width / 2 - text.getWidth() / 2
        text.y = cy.y + cy.surfaceY
        stage.add(cy, text)
    }
}

random()

cax.tick(stage.update.bind(stage))

document.querySelector('#randomBtn').addEventListener('click', random)