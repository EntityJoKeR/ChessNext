'use client'

const CellComponent = ({color}) => {
    const whiteStyles = "flex items-center justify-center w-[64px] h-[64px] bg-slate-50"
    const blackStyles = "flex items-center justify-center w-[64px] h-[64px] bg-green-400"
    return (
        <div className={color==='white'?whiteStyles:blackStyles}>
            
        </div>
    );
};

export default CellComponent;