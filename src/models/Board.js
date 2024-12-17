import { Cell } from "./Cell"

export class Board {
    cells = []

    initCells(){
        for(let row=0;row<8; row++){
            let totalRow = []
            for(let col=0;col<8; col++){
                if((row+col)%2!==0){
                    totalRow.push(new Cell(this, row, col, 'black', null)) //black cells
                }else{
                    totalRow.push(new Cell(this, row, col, 'white', null)) //white cells
                }
            }
            this.cells.push(totalRow)
        }
    }
}