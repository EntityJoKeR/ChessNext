'use client'
import CellComponent from "./CellComponent";


const BoardComponent = ({board, setBoard}) => {
    const arr = board.getArray()
       
    

    return (
        <div className='flex flex-wrap w-[calc(64px*8)] h-[calc(64px*8)] border-3 border-emerald-300 bg-white' key={board.id}>
           {arr.map((cell)=>{
                return <CellComponent color={cell.color} key={cell.id}></CellComponent>
           })}
        </div>
    );
};

export default BoardComponent;