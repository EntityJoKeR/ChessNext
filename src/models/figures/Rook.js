import blackLogo from '..assets/black-rook/png'
import whiteLogo from '..assets/white-rook/png'
import { Figure, figureNames } from '../Figure'

export class Rook extends Figure{
    constructor(color, cell) {
        super(color, cell)
        this.logo = color==='white' ? whiteLogo : blackLogo
        this.name = figureNames.rook
    }
}