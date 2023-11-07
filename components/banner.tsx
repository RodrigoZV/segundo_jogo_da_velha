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
        list[index] = player
        setList([...list])
        setPlayer(player == "x" ? "o" : "x")
    }
    
    return(
        <section className="bg-black">
            <table className="flex justify-center">
                <tbody className="flex flex-col p-9">
                    <tr className="justify-center">
                        <td id="a" onClick={() =>(marcar(0))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-center cursor-pointer transition text-9xl ">
                        {list[0]}
                        </td>
                        <td id ="b" onClick={() =>(marcar(1))} className="bg-red-700 border-4  border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[1]}
                        </td>
                        <td id="c" onClick={() =>(marcar(2))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition"> 
                        {list[2]}
                        </td>
                    </tr>
                    <tr>
                        <td id="d" onClick={() =>(marcar(3))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[3]}
                        </td>
                        <td id="e" onClick={() =>(marcar(4))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[4]}
                        </td>
                        <td id="f" onClick={() =>(marcar(5))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[5]}
                        </td>
                    </tr>
                    <tr>
                        <td id="g" onClick={() =>(marcar(6))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[6]}
                        </td>
                        <td id="h" onClick={() =>(marcar(7))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[7]}
                        </td>
                        <td id="i" onClick={() =>(marcar(8))} className="bg-red-700 border-4 border-white text-black hover:scale-105 h-52 w-52 text-9xl text-center cursor-pointer transition">
                        {list[8]}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        
    )
}