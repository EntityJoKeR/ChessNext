import blackLogo from '..assets/black-king/png'
import whiteLogo from '..assets/white-king/png'
import { Figure, figureNames } from '../Figure'

export class King extends Figure{
    constructor(color, cell) {
        super(color, cell)
        this.logo = color==='white' ? whiteLogo : blackLogo
        this.name = figureNames.king
    }
}