import blackLogo from '..assets/black-pawn/png'
import whiteLogo from '..assets/white-pawn/png'
import { Figure, figureNames } from '../Figure'

export class Pawn extends Figure{
    constructor(color, cell) {
        super(color, cell)
        this.logo = color==='white' ? whiteLogo : blackLogo
        this.name = figureNames.pawn
    }
}