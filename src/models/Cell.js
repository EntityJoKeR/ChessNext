export class Cell {
    x
    y
    color
    figure
    id
    board
    available

    constructor(board, x, y, color, figure){
        this.board = board
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.available = false
        this.id = Math.random()
    }
}