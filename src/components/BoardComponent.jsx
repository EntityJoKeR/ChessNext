'use client'
import CellComponent from "./CellComponent";


const BoardComponent = ({board, setBoard}) => {
    const renderBoard = (board) => {
        for(let r = 0; r<8; r++){
            for(let c = 0; c<8; c++){
                <CellComponent color={board.cells[r][c].color}></CellComponent>
                
            }
        }
    }

    return (
        <div className='flex flex-wrap w-[calc(64px*8)] h-[calc(64px*8)] border-3 border-emerald-300 bg-white'>
            {board.cells.map((row, index)=>{
                <>{
                row.map((item, index)=>{
                     <CellComponent color={item.color}/>
                })}
                </>
            })}
        </div>
    );
};

export default BoardComponent;