import blackLogo from '..assets/black-knight/png'
import whiteLogo from '..assets/white-knight/png'
import { Figure, figureNames } from '../Figure'

export class Knight extends Figure{
    constructor(color, cell) {
        super(color, cell)
        this.logo = color==='white' ? whiteLogo : blackLogo
        this.name = figureNames.knight
    }
}