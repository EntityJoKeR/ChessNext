
export class Figure{
    color
    logo
    cell
    name
    id

    constructor(color, cell){
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = figureNames.figure
        this.id = Math.random()
    }

    canMove(target){
        return true
    }

    moveFigure(target){
        ``
    }
}


export const figureNames = {
    figure: 'Фигура',
    king: 'Король',
    knight: 'Конь',
    pawn: 'Пешка',
    queen: 'Ферзь',
    rook: 'Ладья',
    bishop: 'Слон',
}

