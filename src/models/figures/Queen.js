import blackLogo from '..assets/black-queen/png'
import whiteLogo from '..assets/white-queen/png'
import { Figure, figureNames } from '../Figure'

export class Queen extends Figure{
    constructor(color, cell) {
        super(color, cell)
        this.logo = color==='white' ? whiteLogo : blackLogo
        this.name = figureNames.queen
    }
}