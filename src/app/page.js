'use client'
import BoardComponent from "@/components/BoardComponent";
import { Board } from "@/models/Board";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [board, setBoard] = useState(new Board())

  useEffect(()=>{
    restart()
  }, [])

  function restart(){
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }
  


  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}
