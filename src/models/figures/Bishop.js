import blackLogo from '..assets/black-bishop/png'
import whiteLogo from '..assets/white-bishop/png'
import { Figure, figureNames } from '../Figure'

export class Bishop extends Figure{

    constructor(color, cell) {
        super(color, cell)
        this.logo = color==='white' ? whiteLogo : blackLogo
        this.name = figureNames.bishop
    }
}