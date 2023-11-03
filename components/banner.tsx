"use client"


import { useState } from "react";


export default function Banner(){

    const [player, setPlayer] = useState("x")
    const [list, setList] = useState([
        "","","",
        "","","",
        "","","",
    ])

    function marcar(index:number){
        if(list[index] != "")return
        setList([...list])
        setPlayer(player == "x" ? "o" : "x")
    }
    
    return(
        <section>
            <table className="flex justify-center">
                <tbody className="flex flex-col">
                    <tr className="justify-center">
                        <td id="a" onClick={() =>(marcar(0))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[0]}
                        </td>
                        <td id ="b" onClick={() =>(marcar(1))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[1]}
                        </td>
                        <td id="c" onClick={() =>(marcar(2))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition"> 
                        {list[2]}
                        </td>
                    </tr>
                    <tr>
                        <td id="d" onClick={() =>(marcar(3))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[3]}
                        </td>
                        <td id="e" onClick={() =>(marcar(4))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[4]}
                        </td>
                        <td id="f" onClick={() =>(marcar(5))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[5]}
                        </td>
                    </tr>
                    <tr>
                        <td id="g" onClick={() =>(marcar(6))} className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[6]}
                        </td>
                        <td id="h" onClick={() =>(marcar(7))}className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[7]}
                        </td>
                        <td id="i" onClick={() =>(marcar(8))}className="bg-black border text-white border-white hover:scale-100 h-20 text-3x1 text-center w-20 cursor-pointer transition">
                        {list[8]}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        
    )
}