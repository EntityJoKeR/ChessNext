import BoardComponent from "@/components/BoardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <BoardComponent></BoardComponent>
    </div>
  );
}
